/**
 * @generated-from ./$split-on-seq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry, asyncEnsureIterable } from '../../internal/async-iterable.js';
import { __asyncSplitOnAnySeq } from '../$split-on-any-seq/async-split-on-any-seq.js';

export function __asyncSplitOnSeq(source, separatorSeq, same = Object.is) {
  return __asyncSplitOnAnySeq(source, [separatorSeq], same);
}

export const asyncSplitOnSeq = /*#__PURE__*/ asyncIterableCurry(__asyncSplitOnSeq, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs(args) {
    args[1] = asyncEnsureIterable(args[1]);
  },
});
