/**
 * @generated-from ./$starts-with-any.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { firstOr } from '../$first-or/first-or';
const none = {};
export function startsWithAny(iterable, values, equals = Object.is) {
  const first = firstOr(iterable, none);
  if (first === none) return false;

  for (const value of values) {
    if (equals(value, first)) return true;
  }

  return false;
}
export default iterableCurry(startsWithAny, {
  reduces: true,
  maxArgs: 2,
  optionalArgsAtEnd: true,
});
