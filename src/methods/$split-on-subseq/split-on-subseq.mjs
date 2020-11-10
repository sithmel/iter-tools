/**
 * @generated-from ./$split-on-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry, ensureIterable } from '../../internal/iterable';
import { splitOnAnySubseq } from '../$split-on-any-subseq/split-on-any-subseq';

export function splitOnSubseq(source, separatorSubseq) {
  return splitOnAnySubseq(source, [separatorSubseq]);
}

export default iterableCurry(splitOnSubseq, {
  validateArgs(args) {
    args[0] = ensureIterable(args[0]);
  },
});
