/**
 * @generated-from ./$iterable-starts-with-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ensureSubseqs } from '../../../internal/ensure-subseqs';
import { zipAll } from '../../$zip-all/zip-all';
import { simpleSlice } from '../../$slice/slice';
import { wrap } from '../../$wrap/wrap';
const none = {};
const zipAllConfig = {
  filler: none,
};
export function iterableStartsWithAnySubseq(iterable, valueSubseqs, equals) {
  const valueArrays = ensureSubseqs(valueSubseqs);
  const states = valueArrays.map(_ => ({
    matches: true,
    done: false,
  }));

  for (const allItems of zipAll([iterable, ...valueArrays], zipAllConfig)) {
    const item = allItems[0];
    let i = -1;
    let allDone = true;
    let anyMatched = false;

    for (const subseqItem of simpleSlice(allItems, 1, Infinity)) {
      const state = states[++i];
      state.done = subseqItem === none;
      state.matches = state.matches && equals(subseqItem, item);
      allDone = allDone && state.done;
      anyMatched = anyMatched || state.matches;
    }

    if (allDone) break;
    if (!anyMatched) return false;
  }

  return true;
}