/**
 * @generated-from ./$join.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncWrapWithMethodIterable, asyncEnsureIterable } from '../../internal/async-iterable';
import { asyncJoinWithSubseq } from '../$join-with-subseq/async-join-with-subseq';
const emptySubseq = [];
export function asyncJoin(source) {
  return asyncJoinWithSubseq(asyncEnsureIterable(source), emptySubseq);
}
export default asyncWrapWithMethodIterable(asyncJoin);
