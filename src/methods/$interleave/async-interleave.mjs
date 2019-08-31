/**
 * @generated-from ./$interleave.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable, asyncIterableCurry } from '../../internal/async-iterable';
import AsyncInterleaveBuffer from '../../internal/interleave/async-buffer';
import makeCanTakeAny from '../../internal/interleave/async-can-take-any';
export async function* asyncInterleave(iterables, generatorFn, options) {
  const buffers = iterables.map(
    (iterable, i) =>
      new AsyncInterleaveBuffer(asyncEnsureIterable(iterable)[Symbol.asyncIterator](), i),
  );

  try {
    const canTakeAny = makeCanTakeAny(buffers);
    yield* options !== undefined
      ? generatorFn(options, canTakeAny, ...buffers)
      : generatorFn(canTakeAny, ...buffers);
  } finally {
    for (const buffer of buffers) {
      if ((await buffer.canTake()) && typeof buffer._iterator.return === 'function') {
        await buffer._iterator.return();
      }
    }
  }
}
export default asyncIterableCurry(asyncInterleave, {
  variadic: true,
  optionalArgsAtEnd: true,
  minArgs: 1,
  maxArgs: 2,
});
