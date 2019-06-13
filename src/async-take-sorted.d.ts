/**
 * @generated-from ./$take-sorted.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  AsyncIterableLike,
  AsyncIterableIterator,
  AsyncMaybePromise,
} from './internal/async-iterable';
declare function asyncTakeSorted<T = any>(
  n: number,
): (iterable: AsyncIterableLike<T>) => AsyncIterableIterator<T>;
declare function asyncTakeSorted<T = any>(
  func: (a: T, b: T) => number,
  n: number,
): (iterable: AsyncIterableLike<T>) => AsyncIterableIterator<T>;
declare function asyncTakeSorted<T = any>(
  n: number,
  iterable: AsyncIterableLike<T>,
): AsyncIterableIterator<T>;
declare function asyncTakeSorted<T = any>(
  func: (a: T, b: T) => number,
  n: number,
  iterable: AsyncIterableLike<T>,
): AsyncIterableIterator<T>;
export default asyncTakeSorted;
