/**
 * @generated-from ./$split-on.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable, IterableIterator } from '../../types/iterable';

declare function splitOn(
  same: (a: any, b: any) => boolean,
  separatorValue: any,
): <T>(source: Wrappable<T>) => IterableIterator<IterableIterator<T>>;

declare function splitOn<T>(
  same: (a: any, b: any) => boolean,
  separatorValue: any,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

declare function splitOn<T>(
  separatorValue: any,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

export { splitOn };
