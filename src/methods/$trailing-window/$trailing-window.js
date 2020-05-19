import { $, $async, $await } from '../../../generate/async.macro';
import { $iterableCurry } from '../../internal/$iterable';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer';

import { validateWindowArgs } from './internal/validate-window-args';

$async;
export function* $trailingWindow(source, size, { filler } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  buffer.fill(filler);

  $await;
  for (const item of source) {
    buffer.push(item);
    yield bufferReadProxy;
  }
}

export default $iterableCurry($trailingWindow, {
  minArgs: 1,
  maxArgs: 2,
  optionalArgsAtEnd: true,
  validateArgs: validateWindowArgs($`trailingWindow`),
});
