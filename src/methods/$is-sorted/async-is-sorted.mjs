/**
 * @generated-from ./$is-sorted.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { defaultCompare } from '../../internal/compare';
import { asyncPeekerate } from '../$peekerate/async-peekerate';

export async function asyncIsSorted(iterable, comparator = defaultCompare) {
  const peekr = await asyncPeekerate(iterable);

  while (!peekr.done) {
    const { value } = peekr;
    await peekr.advance();

    if (!peekr.done && comparator(value, peekr.value) > 0) {
      await peekr.return();
      return false;
    }
  }
  return true;
}

export default asyncIterableCurry(asyncIsSorted, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,
});
