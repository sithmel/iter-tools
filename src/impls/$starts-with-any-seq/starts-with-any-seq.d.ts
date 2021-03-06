/**
 * @generated-from ./$starts-with-any-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable } from '../../types/iterable';

declare function startsWithAnySeq(
  same: (a: any, b: any) => boolean,
  seqs: Array<Wrappable<any>>,
): (iterable: Wrappable<any>) => boolean;

declare function startsWithAnySeq(
  same: (a: any, b: any) => boolean,
  seqs: Array<Wrappable<any>>,
  iterable: Wrappable<any>,
): boolean;

declare function startsWithAnySeq(seqs: Array<Wrappable<any>>, iterable: Wrappable<any>): boolean;

export { startsWithAnySeq };
