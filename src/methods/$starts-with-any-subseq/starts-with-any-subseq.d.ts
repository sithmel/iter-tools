/**
 * @generated-from ./$starts-with-any-subseq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../types/iterable';
import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
declare function startsWithAnySubseq(
  valueSubseqs: SyncSourceIterable<SourceIterable<any>>,
): (iterable: SourceIterable<any>) => boolean;
declare function startsWithAnySubseq(
  valueSubseqs: SyncSourceIterable<SourceIterable<any>>,
  iterable: SourceIterable<any>,
): boolean;
declare function startsWithAnySubseq<V, T>(
  valueSubseqs: SyncSourceIterable<SourceIterable<V>>,
  compareEquality: (value: V, item: T) => boolean,
): (iterable: SourceIterable<T>) => boolean;
declare function startsWithAnySubseq<V, T>(
  valueSubseqs: SyncSourceIterable<SourceIterable<V>>,
  compareEquality: (value: V, item: T) => boolean,
  iterable: SourceIterable<T>,
): boolean;
export default startsWithAnySubseq;
