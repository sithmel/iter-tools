import { empty, wrapWithResultIterable } from '../../internal/iterable.js';

export function* wrapKeys(keysable) {
  if (keysable == null) {
    return empty();
  } else {
    yield* keysable.keys();
  }
}

export default wrapWithResultIterable(wrapKeys);