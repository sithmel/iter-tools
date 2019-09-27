/**
 * @generated-from ./$window.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import CircularBuffer from '../../internal/circular-buffer';
import { asyncConcat } from '../$concat/async-concat';
import { repeat } from '../repeat/repeat';
export async function* asyncWindow(iterable, size, { filler } = {}) {
  const circular = new CircularBuffer(size);
  circular.fill(filler);
  let index = 0;

  for await (const item of asyncConcat(iterable, repeat(filler, size - 1))) {
    circular.push(item);

    if (index + 1 >= size) {
      yield circular.readOnlyCopy;
    }

    index++;
  }
}
export default asyncIterableCurry(asyncWindow, {
  minArgs: 1,
  maxArgs: 2,

  validateArgs(args) {
    let size;
    let filler;

    if (typeof args[1] === 'number') {
      size = args[1];
    } else if (typeof args[1] === 'object' && args[1]) {
      filler = args[1].filler;
      size = args[1].size;

      if (size !== undefined && args[0] !== undefined) {
        throw new Error(
          'size cannot be specified as both a positional and named argument to window',
        );
      }
    }

    args[0] = size;
    args[1] = {
      filler,
    };
  },
});
