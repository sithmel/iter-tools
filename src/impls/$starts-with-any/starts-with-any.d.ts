/**
 * @generated-from ./$starts-with-any.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable } from '../../types/iterable';

declare function startsWithAny(values: Array<any>): (iterable: Wrappable<any>) => boolean;

declare function startsWithAny(values: Array<any>, iterable: Wrappable<any>): boolean;

export { startsWithAny };
