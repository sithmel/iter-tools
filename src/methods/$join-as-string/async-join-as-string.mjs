/**
 * @generated-from ./$join-as-string.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable } from '../../internal/async-iterable';
import { asyncJoinAsStringWith } from '../$join-as-string-with/async-join-as-string-with';
export function asyncJoinAsString(source) {
  return asyncJoinAsStringWith(asyncEnsureIterable(source), '');
}
export default asyncJoinAsString;
