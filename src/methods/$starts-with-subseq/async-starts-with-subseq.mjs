/**
 * @generated-from ./$starts-with-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncStartsWithAnySubseq } from '../$starts-with-any-subseq/async-starts-with-any-subseq';
export function asyncStartsWithSubseq(iterable, valueSubseq, compare) {
  return asyncStartsWithAnySubseq(iterable, [valueSubseq], compare);
}
export default asyncIterableCurry(asyncStartsWithSubseq, {
  reduces: true,
});
