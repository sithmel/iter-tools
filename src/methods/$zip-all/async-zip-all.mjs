/**
 * @generated-from ./$zip-all.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncParallelEach } from '../../internal/async-parallel-each';
import { asyncPeekerate } from '../$peekerate/async-peekerate';
import { asyncMap } from '../$map/async-map';
import { every } from '../$every/every';
import { asyncToArray } from '../$to-array/async-to-array';

const isDone = peekr => peekr.done;

export async function* asyncZipAll(sources, { filler } = {}) {
  const peekrs = await asyncToArray(asyncMap(sources, asyncPeekerate));
  let done = every(peekrs, isDone);

  try {
    while (!done) {
      yield peekrs.map(({ value, done }) => (done ? filler : value));

      await asyncParallelEach(peekrs, peekr => peekr.advance());

      done = every(peekrs, isDone);
    }
  } finally {
    await asyncParallelEach(peekrs, peekr => peekr.return());
  }
}

export default asyncIterableCurry(asyncZipAll, {
  variadic: true,
  minArgs: 0,
  maxArgs: 1,
});
