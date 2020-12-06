/**
 * @generated-from ./$trailing-window.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer.js';

export async function* __asyncTrailingWindow(source, size, { filler } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  buffer.fill(filler);

  for await (const value of source) {
    buffer.push(value);
    yield bufferReadProxy;
  }
}

export const asyncTrailingWindow = /*#__PURE__*/ asyncIterableCurry(__asyncTrailingWindow, {
  minArgs: 1,
  maxArgs: 2,
  growRight: true,
  validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error(`${'asyncTrailingWindow'} must be passed a numeric size`);
    }
  },
});
