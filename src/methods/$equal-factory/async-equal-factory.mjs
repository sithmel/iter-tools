/**
 * @generated-from ./$equal-factory.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { coerceValues } from './internal/async-coerce-values';
import { asyncAllEqual } from './internal/async-all-equal';
import { asyncIterableEqual } from './internal/async-iterable-equal';

function validateOptions(options = {}) {
  const _options =
    typeof options === 'function'
      ? {
          compareEquality: options,
        }
      : options;

  const {
    compareEquality = Object.is,
    iterableNullish = true,
    shouldCompareValues = true,
    syncEqualsAsync = true,
  } = _options;
  return {
    compareEquality,
    iterableNullish,
    shouldCompareValues,
    syncEqualsAsync,
  };
}

export function asyncEqualFactory(options = {}) {
  const _options = validateOptions(options);

  const { compareEquality, iterableNullish, shouldCompareValues, syncEqualsAsync } = _options;
  return async (...values) => {
    if (!values.length) {
      throw new Error(`${'asyncEqual'} received no values to compare.`);
    }

    const [failed, comparingIterables, coercedValues] = coerceValues(
      values,
      iterableNullish,
      syncEqualsAsync,
    );
    return (
      !failed &&
      (comparingIterables
        ? await asyncIterableEqual(coercedValues, compareEquality)
        : shouldCompareValues && (await asyncAllEqual(values, compareEquality)))
    );
  };
} // export default options => {
//   return $equalFactory(validateOptions(options));
// };

export default asyncEqualFactory;
