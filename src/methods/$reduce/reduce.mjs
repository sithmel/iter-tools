/**
 * @generated-from ./$reduce.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
export function reduce(initial, func, iterable) {
  let c = 0;
  let acc = initial;
  const iterator = iterable[Symbol.iterator]();

  try {
    if (initial === undefined) {
      const firstResult = iterator.next();

      if (firstResult.done) {
        throw new Error('Cannot reduce: no initial value specified and iterable was empty');
      }

      acc = firstResult.value;
      c = 1;
    }

    let result;

    while (!(result = iterator.next()).done) {
      acc = func(acc, result.value, c++);
    }

    return acc;
  } finally {
    // close the iterator in case of exceptions
    if (typeof iterator.return === 'function') iterator.return();
  }
}
export default iterableCurry(reduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
});
