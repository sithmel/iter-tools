/**
 * @generated-from ./$split-on-any.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncSplitOnAny(
  separatorValues: Array<string>,
): (source: string) => AsyncResultIterable<string>;

declare function asyncSplitOnAny(
  separatorValues: Array<any>,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<AsyncResultIterable<T>>;

declare function asyncSplitOnAny(
  separatorValues: Array<string>,
  source: string,
): AsyncResultIterable<string>;

declare function asyncSplitOnAny<T>(
  separatorValues: Array<any>,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<AsyncResultIterable<T>>;

export default asyncSplitOnAny;
