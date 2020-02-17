import { $, $async, $await } from '../../../generate/async.macro';

import { coerceValues } from './internal/$coerce-values';
import { $allEqual } from './internal/$all-equal';
import { $iterableEqual } from './internal/$iterable-equal';

function validateOptions(options = {}) {
  const _options = typeof options === 'function' ? { compareEquality: options } : options;
  const {
    compareEquality = Object.is,
    iterableNullish = true,
    shouldCompareValues = true,
    syncEqualsAsync = true,
  } = _options;
  return { compareEquality, iterableNullish, shouldCompareValues, syncEqualsAsync };
}

export function $equalFactory(options = {}) {
  const _options = validateOptions(options);
  const { compareEquality, iterableNullish, shouldCompareValues, syncEqualsAsync } = _options;

  const $equal = $async((...values) => {
    if (!values.length) {
      throw new Error(`${$`equal`} received no values to compare.`);
    }

    const [failed, comparingIterables, coercedValues] = coerceValues(
      values,
      iterableNullish,
      syncEqualsAsync,
    );

    return (
      !failed &&
      (comparingIterables
        ? $await($iterableEqual(coercedValues, compareEquality))
        : shouldCompareValues && $await($allEqual(values, compareEquality)))
    );
  });

  return $equal;
}

// export default options => {
//   return $equalFactory(validateOptions(options));
// };

export default $equalFactory;
