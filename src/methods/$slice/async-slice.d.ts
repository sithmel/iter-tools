/**
 * @generated-from ./$slice.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncSlice<T = any>(opts: {
  readonly start?: number;
  readonly end?: number;
  readonly step?: number;
}): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;
declare function asyncSlice<T = any>(
  start?: number,
  end?: number,
  step?: number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;
declare function asyncSlice<T = any>(
  opts: {
    readonly start?: number;
    readonly end?: number;
    readonly step?: number;
  },
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
declare function asyncSlice<T = any>(
  start: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
declare function asyncSlice<T = any>(
  start: number,
  end: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
declare function asyncSlice<T = any>(
  start: number,
  end: number,
  step: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;
export default asyncSlice;
