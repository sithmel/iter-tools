/**
 * @generated-from ./$coerce-values.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { isIterable } from '../../../internal/iterable';
import { wrap } from '../../$wrap/wrap';
const empty = wrap([]);
export function coerceValues(values, iterableNullish, syncEqualsAsync) {
  const coercedValues = [];
  let failed = false;
  let anyIterable = false;
  let allIterable = true;

  for (const value of values) {
    const valueIsNullIterable = iterableNullish && value == null; // `"abc"` is considered primitive, not equal to `["a", "b", "c"]`.
    // This is because few if any APIs consider those expressions equivalent.
    // Our methods take care to return strings when possible instead of character iterables.

    const valueIsIterable = isIterable(value) && !(typeof value === 'string');
    const valueIsSync = valueIsIterable && !value[Symbol.asyncIterator]; // prettier-ignore

    coercedValues.push(valueIsNullIterable ? empty : wrap(value));
    const coercedValueIsIterable = valueIsNullIterable || valueIsIterable;
    anyIterable = anyIterable || coercedValueIsIterable;
    allIterable = allIterable && coercedValueIsIterable;
  }

  if ((anyIterable && !allIterable) || (false && !syncEqualsAsync && false && !true)) {
    failed = true;
  }

  return [failed, anyIterable, coercedValues];
}