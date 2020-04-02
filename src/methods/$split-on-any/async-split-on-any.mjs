/**
 * @generated-from ./$split-on-any.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import toArray from '../$to-array/to-array';
import { asyncSplitWith } from '../$split-with/async-split-with';
export function asyncSplitOnAny(source, separators) {
  const _separators = toArray(separators);

  return asyncSplitWith(source, value => _separators.includes(value));
}
export default asyncIterableCurry(asyncSplitOnAny, {
  maxArgs: 2,
  optionalArgsAtEnd: true,
});
