/**
 * @generated-from ./$group-by.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from './internal/async-iterable';
import splitBy from './internal/async-split-by';

async function* cons(item, iterable) {
  yield item;
  yield* iterable;
}

async function car(iterable) {
  const iterator = iterable[Symbol.asyncIterator]();
  const { done, value } = await iterator.next();
  if (done) return [];
  return [value, iterator];
}

async function* asyncGroupBy(getKey, iterable) {
  const _getKey = getKey || (k => k);

  for await (const subseq of splitBy(_getKey, iterable)) {
    const [first, rest] = await car(subseq);
    if (rest === undefined) return;
    const key = await _getKey(first);
    yield [key, cons(first, rest)];
  }
}

export default asyncIterableCurry(asyncGroupBy);
