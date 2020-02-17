/**
 * @generated-from ./$includes-any.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../types/iterable';
import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
declare function includesAny(
  values: SyncSourceIterable<any>,
): (iterable: SourceIterable<any>) => boolean;
declare function includesAny(
  values: SyncSourceIterable<any>,
  iterable: SourceIterable<any>,
): boolean;
declare function includesAny<V, T>(
  values: SyncSourceIterable<V>,
  compareEquality: (value: V, item: T) => boolean,
): (iterable: SourceIterable<T>) => boolean;
declare function includesAny<V, T>(
  values: SyncSourceIterable<V>,
  compareEquality: (value: V, item: T) => boolean,
  iterable: SourceIterable<T>,
): boolean;
export default includesAny;
