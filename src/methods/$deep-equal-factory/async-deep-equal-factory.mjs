/**
 * @generated-from ./$deep-equal-factory.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { coerceValues } from '../$equal-factory/internal/async-coerce-values';
import { asyncIterableEqual } from '../$equal-factory/internal/async-iterable-equal';
import { asyncAllEqual } from '../$equal-factory/internal/async-all-equal';
import { objectEntries } from '../object-entries/object-entries';

const isObject = o => o != null && typeof o === 'object';

const defaultCompareFactory = options => {
  const asyncDeepEqual = asyncDeepEqualFactory(options);
  return async (a, b) => {
    return isObject(a) && isObject(b)
      ? await asyncDeepEqual(objectEntries(a), objectEntries(b))
      : Object.is(a, b);
  };
};

function validateOptions(options) {
  const _options =
    typeof options === 'function'
      ? {
          compareFactory: options,
        }
      : options;

  const {
    compare,
    compareFactory = compare ? undefined : defaultCompareFactory,
    compareValues = true,
    iterableNullish = true,
    syncEqualsAsync = true,
  } = _options;

  if (compare && compareFactory) {
    throw new Error('deepEqualFactory cannot have both compare and compareFactory arguments');
  }

  return {
    compare,
    compareFactory,
    iterableNullish,
    compareValues,
    syncEqualsAsync,
  };
}

export function asyncDeepEqualFactory(options = {}) {
  const _options = validateOptions(options);

  const { compareFactory, iterableNullish, syncEqualsAsync } = _options;
  let { compare, compareValues } = _options;

  const asyncDeepEqual = async (...values) => {
    if (!values.length) {
      throw new Error(`${'asyncDeepEqual'} received no values to compare.`);
    } // Set compareValues to false to nudge the user away from creating an infinite loop like:
    // compare => deepEqual => allEqual => compare => deepEqual => ...

    compare =
      compare || compareFactory(compareValues ? _options : { ..._options, compareValues: false });
    const [failed, comparingIterables, coercedValues] = coerceValues(
      values,
      iterableNullish,
      syncEqualsAsync,
    );

    if (!compareValues) {
      compareValues = true; // essential for recursion

      if (failed || !comparingIterables) {
        throw new Error(`A value passed to ${'asyncDeepEqual'} was not iterable`);
      }
    }

    return (
      !failed &&
      (comparingIterables
        ? await asyncIterableEqual(coercedValues, asyncDeepEqual)
        : await asyncAllEqual(values, compare))
    );
  };

  return asyncDeepEqual;
}
export default asyncDeepEqualFactory;