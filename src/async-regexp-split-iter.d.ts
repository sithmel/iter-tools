/**
 * @generated-from ./$regexp-split-iter.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncIterableLike, AsyncIterableIterator } from './internal/async-iterable';
declare function asyncRegexpSplitIter(
  re: RegExp | string,
): (iterable: AsyncIterableLike<string>) => AsyncIterableIterator<string>;
declare function asyncRegexpSplitIter(
  re: RegExp | string,
  iterable: AsyncIterableLike<string>,
): AsyncIterableIterator<string>;
export default asyncRegexpSplitIter;
