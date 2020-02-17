/**
 * @generated-from ./$includes-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { includesAnySubseq } from '../$includes-any-subseq/includes-any-subseq';
export function includesSubseq(iterable, subseq, compareEquality = Object.is) {
  return includesAnySubseq(iterable, [subseq], compareEquality);
}
export default iterableCurry(includesSubseq, {
  reduces: true,
  maxArgs: 2,
  optionalArgsAtEnd: true,
});
