/**
 * @generated-from ./$split-on-any-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable, IterableIterator } from '../../types/iterable';

declare function splitOnAnySeq(
  separatorSeqs: Array<Wrappable<any>>,
): <T>(source: Wrappable<T>) => IterableIterator<IterableIterator<T>>;

declare function splitOnAnySeq<T>(
  separatorSeqs: Array<Wrappable<any>>,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

export { splitOnAnySeq };
