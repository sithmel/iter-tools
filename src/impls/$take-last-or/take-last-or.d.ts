/**
 * @generated-from ./$take-last-or.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable } from '../../types/iterable';

declare function takeLastOr<E, T>(whenEmpty: E, iterable: Wrappable<T>): T | E;

export { takeLastOr };
