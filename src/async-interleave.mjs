/**
 * @generated-from ./$interleave.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable, asyncIterableCurry } from './internal/async-iterable';
import AsyncInterleaveBuffer from './internal/interleave/async-buffer';
import makeCanTakeAny from './internal/interleave/async-can-take-any';

async function* interleave(generatorFn, iterables) {
  const buffers = iterables.map(
    (iterable, i) =>
      new AsyncInterleaveBuffer(asyncEnsureIterable(iterable)[Symbol.asyncIterator](), i),
  );

  try {
    yield* generatorFn(makeCanTakeAny(buffers), ...buffers);
  } finally {
    for (const buffer of buffers) {
      if ((await buffer.canTake()) && typeof buffer._iterator.return === 'function') {
        await buffer._iterator.return();
      }
    }
  }
}

export default asyncIterableCurry(interleave, {
  variadic: true,
});