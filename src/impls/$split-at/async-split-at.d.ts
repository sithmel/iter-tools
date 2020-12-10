/**
 * @generated-from ./$split-at.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { IterableIterator as SyncIterableIterator } from '../../types/iterable';
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncSplitAt(
  idx: number,
): <T>(source: AsyncWrappable<T>) => SyncIterableIterator<AsyncIterableIterator<T>>;

declare function asyncSplitAt<T>(
  idx: number,
  source: AsyncWrappable<T>,
): SyncIterableIterator<AsyncIterableIterator<T>>;

export { asyncSplitAt };
