/**
 * @generated-from ./$drop.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncDrop<T>(n: number, iterable: AsyncWrappable<T>): AsyncIterableIterator<T>;

declare function asyncDrop<T>(n: number): (iterable: AsyncWrappable<T>) => AsyncIterableIterator<T>;

export { asyncDrop };
