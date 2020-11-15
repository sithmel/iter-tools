import { asyncIterableCurry } from '../../internal/async-iterable';

import { asyncToArray } from '../$to-array/async-to-array';
import { cycleTimes } from './cycle-times';

export async function* asyncCycleTimes(source, n) {
  yield* cycleTimes(await source, n);
}

export default asyncIterableCurry(asyncCycleTimes, {
  validateArgs(args) {
    args[1] = asyncToArray(args[1]);
  },
});
