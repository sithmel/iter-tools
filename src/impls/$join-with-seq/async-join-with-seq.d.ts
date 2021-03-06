/**
 * @generated-from ./$join-with-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable as SyncWrappable } from '../../types/iterable';
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncJoinWithSeq<W, T>(
  seq: SyncWrappable<W>,
  source: AsyncWrappable<AsyncWrappable<T>>,
): AsyncIterableIterator<T | W>;

declare function asyncJoinWithSeq<W>(
  seq: SyncWrappable<W>,
): <T>(source: AsyncWrappable<AsyncWrappable<T>>) => AsyncIterableIterator<T | W>;

export { asyncJoinWithSeq };
