import { $, $async, $await } from '../../../generate/async.macro';

import { coerceValues } from '../$equal-factory/internal/$coerce-values';
import { $iterableEqual } from '../$equal-factory/internal/$iterable-equal';
import { $allEqual } from '../$equal-factory/internal/$all-equal';
import { objectEntries } from '../object-entries/object-entries';

const isObject = o => o != null && typeof o === 'object';

const defaultCompareFactory = options => {
  const $deepEqual = $deepEqualFactory(options);
  return $async((a, b) => {
    return isObject(a) && isObject(b)
      ? $await($deepEqual(objectEntries(a), objectEntries(b)))
      : Object.is(a, b);
  });
};

function validateOptions(options) {
  const _options = typeof options === 'function' ? { compareEqualityFactory: options } : options;
  const {
    compareEquality,
    compareEqualityFactory = compareEquality ? undefined : defaultCompareFactory,
    shouldCompareValues = true,
    iterableNullish = true,
    syncEqualsAsync = true,
  } = _options;

  if (compareEquality && compareEqualityFactory) {
    throw new Error(
      'deepEqualFactory cannot have both compareEquality and compareEqualityFactory arguments',
    );
  }

  return {
    compareEquality,
    compareEqualityFactory,
    iterableNullish,
    shouldCompareValues,
    syncEqualsAsync,
  };
}

export function $deepEqualFactory(options = {}) {
  const _options = validateOptions(options);
  const { compareEqualityFactory, iterableNullish, syncEqualsAsync } = _options;
  let { compareEquality, shouldCompareValues } = _options;

  const $deepEqual = $async((...values) => {
    if (!values.length) {
      throw new Error(`${$`deepEqual`} received no values to compare.`);
    }

    // Set shouldCompareValues to false to nudge the user away from creating an infinite loop like:
    // compareEquality => deepEqual => allEqual => compareEquality => deepEqual => ...
    compareEquality =
      compareEquality ||
      compareEqualityFactory(
        shouldCompareValues ? _options : { ..._options, shouldCompareValues: false },
      );

    const [failed, comparingIterables, coercedValues] = coerceValues(
      values,
      iterableNullish,
      syncEqualsAsync,
    );

    if (!shouldCompareValues) {
      shouldCompareValues = true; // essential for recursion
      if (failed || !comparingIterables) {
        throw new Error(`A value passed to ${$`deepEqual`} was not iterable`);
      }
    }

    return (
      !failed &&
      (comparingIterables
        ? $await($iterableEqual(coercedValues, $deepEqual))
        : $await($allEqual(values, compareEquality)))
    );
  });

  return $deepEqual;
}

export default $deepEqualFactory;
