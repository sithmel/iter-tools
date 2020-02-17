/**
 * @generated-from ./$is-sorted.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { defaultCompareOrder } from '../../internal/order';
export function isSorted(iterable, compareEquality = defaultCompareOrder) {
  let a;
  let b;
  let iter;
  let done;

  try {
    iter = iterable[Symbol.iterator]();
    ({ done, value: b } = iter.next());

    while (!done) {
      a = b;
      ({ done, value: b } = iter.next());

      if (!done && compareEquality(a, b) > 0) {
        return false;
      }
    }

    return true;
  } finally {
    if (!done && typeof iter.return === 'function') {
      iter.return();
    }
  }
}
export default iterableCurry(isSorted, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,
});
