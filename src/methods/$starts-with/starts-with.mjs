/**
 * @generated-from ./$starts-with.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { startsWithAny } from '../$starts-with-any/starts-with-any';
export function startsWith(iterable, value, compareEquality = Object.is) {
  return startsWithAny(iterable, [value], compareEquality);
}
export default iterableCurry(startsWith, {
  reduces: true,
  maxArgs: 2,
  optionalArgsAtEnd: true,
});
