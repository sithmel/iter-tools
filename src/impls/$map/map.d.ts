/**
 * @generated-from ./$map.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable, IterableIterator } from '../../types/iterable';

declare function map<O, T>(
  func: (value: T, i: number) => O,
): (source: Wrappable<T>) => IterableIterator<O>;

declare function map<O, T>(
  func: (value: T, i: number) => O,
  source: Wrappable<T>,
): IterableIterator<O>;

export { map };
