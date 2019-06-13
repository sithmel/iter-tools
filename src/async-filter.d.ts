/**
 * @generated-from ./$filter.d.ts
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
declare function asyncFilter<S extends T, T = any>(
  func: (item: T, i: number) => item is S,
): (iterable: AsyncIterableLike<T>) => AsyncIterableIterator<S>;
declare function asyncFilter<T = any>(
  func: (item: T, i: number) => AsyncMaybePromise<boolean>,
): (iterable: AsyncIterableLike<T>) => AsyncIterableIterator<T>;
declare function asyncFilter<S extends T, T = any>(
  func: (item: T, i: number) => item is S,
  iterable: AsyncIterableLike<T>,
): AsyncIterableIterator<S>;
declare function asyncFilter<T = any>(
  func: (item: T, i: number) => AsyncMaybePromise<boolean>,
  iterable: AsyncIterableLike<T>,
): AsyncIterableIterator<T>;
export default asyncFilter;
