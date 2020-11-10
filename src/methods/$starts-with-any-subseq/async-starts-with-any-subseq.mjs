/**
 * @generated-from ./$starts-with-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry, asyncEnsureIterable } from '../../internal/async-iterable';
import { asyncZipAll } from '../$zip-all/async-zip-all';
import { asyncPeekerate } from '../$peekerate/async-peekerate';

const none = Symbol('none');

export async function asyncStartsWithAnySubseq_(peekr, subseqPeekr) {
  if (subseqPeekr.done || subseqPeekr.value.includes(none)) return true;

  const matches = subseqPeekr.value.map(() => true);

  while (!peekr.done && !subseqPeekr.done) {
    const { value } = peekr; // the value to match
    const { value: seqValue } = subseqPeekr;

    for (let i = 0; i < seqValue.length; i++) {
      if (seqValue[i] === none) {
        if (matches[i]) return true;
      } else {
        matches[i] = matches[i] && seqValue[i] === value;
      }
    }
    await Promise.all([subseqPeekr.advance(), peekr.advance()]);
  }

  return subseqPeekr.done && matches.includes(true);
}

export async function asyncStartsWithAnySubseq(iterable, subseqs) {
  if (!subseqs.length) return false;
  const peekr = await asyncPeekerate(iterable);
  const subseqPeekr = await asyncPeekerate(asyncZipAll(subseqs, { filler: none }));

  const seqFound = await asyncStartsWithAnySubseq_(peekr, subseqPeekr);

  await subseqPeekr.return();
  await peekr.return();

  return seqFound;
}

export default asyncIterableCurry(asyncStartsWithAnySubseq, {
  reduces: true,
  validateArgs(args) {
    args[0] = args[0].map(arg => asyncEnsureIterable(arg));
  },
});
