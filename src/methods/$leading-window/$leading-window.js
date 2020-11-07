import { $, $async, $await } from '../../../generate/async.macro';
import { $iterableCurry } from '../../internal/$iterable';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer';

import { validateWindowArgs } from '../$trailing-window/internal/validate-window-args';

$async;
export function* $leadingWindow(source, size, { filler, useFiller = true } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  let len = 0;
  $await;
  for (const item of source) {
    buffer.push(item);
    if (buffer.isFull()) {
      yield bufferReadProxy;
    }
    len++;
  }

  if (useFiller) {
    for (let i = len; i < size; i++) {
      buffer.push(filler);
    }
  }

  if (len > 0 && len < size) yield bufferReadProxy;

  for (let i = 0; i < Math.min(size, len) - 1; i++) {
    buffer.shift();
    if (useFiller) {
      buffer.push(filler);
    }
    yield bufferReadProxy;
  }
}

export default $iterableCurry($leadingWindow, {
  minArgs: 1,
  maxArgs: 2,
  optionalArgsAtEnd: true,
  validateArgs: validateWindowArgs($`leadingWindow`),
});
