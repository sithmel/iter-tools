/**
 * @generated-from ./$take-sorted.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import Heap from 'little-ds-toolkit/lib/heap';
import { iterableCurry } from '../../internal/iterable';
import { defaultCompareOrder } from '../../internal/order';
export function* takeSorted(source, n, compareEquality = defaultCompareOrder) {
  const heap = new Heap(compareEquality);

  for (const item of source) {
    heap.push(item);

    if (heap.size() > n) {
      heap.pop();
    }
  }

  const len = heap.size();

  for (let i = 0; i < len; i++) {
    yield heap.pop();
  }
}
export default iterableCurry(takeSorted, {
  minArgs: 1,
  maxArgs: 2,
});
