/**
 * @generated-from ./$sort.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncTakeSorted } from '../$take-sorted/async-take-sorted';
export function asyncSort(source) {
  return asyncTakeSorted(source, Infinity);
}
export default asyncIterableCurry(asyncSort);
