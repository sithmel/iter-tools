/**
 * @generated-from ./$regexp-split-iter.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { IterableLike, IterableIterator } from './internal/iterable';
declare function regexpSplitIter(
  re: RegExp | string,
): (iterable: IterableLike<string>) => IterableIterator<string>;
declare function regexpSplitIter(
  re: RegExp | string,
  iterable: IterableLike<string>,
): IterableIterator<string>;
export default regexpSplitIter;
