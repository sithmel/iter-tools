/**
 * @generated-from ./$zip-all.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';

import { AsyncIterableIterator } from '../../../types/async-iterable';
import { asyncZipAll } from 'iter-tools-es';

declare const Ø: never;

// zipAll()
assert<AsyncIterableIterator<[number | undefined, string | undefined]>>(
  asyncZipAll(Ø as [0, 1, 2], Ø as ['a', 'b', 'c']),
);
assert<AsyncIterableIterator<[number | undefined, string | undefined, boolean | undefined]>>(
  asyncZipAll(Ø as [0, 1, 2], Ø as ['a', 'b', 'c'], Ø as [true, false, true]),
);

// zipAll({ filler })
assert<AsyncIterableIterator<[number | Date, string | Date]>>(
  asyncZipAll({ filler: new Date() }, Ø as [0, 1, 2], Ø as ['a', 'b', 'c']),
);
assert<AsyncIterableIterator<[number | Date, string | Date, boolean | Date]>>(
  asyncZipAll(
    { filler: new Date() },
    Ø as [0, 1, 2],
    Ø as ['a', 'b', 'c'],
    Ø as [true, false, true],
  ),
);
