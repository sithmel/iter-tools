/**
 * @generated-from ./$split-at.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';

import { ResultIterable as SyncResultIterable } from '../../../types/iterable';
import { AsyncIterable, AsyncResultIterable } from '../../../types/async-iterable';
import { asyncSplitAt } from 'iter-tools-es';

declare const Ø: never;

assert<SyncResultIterable<AsyncResultIterable<number>>>(
  asyncSplitAt(3, Ø as AsyncIterable<number>),
);

assert<SyncResultIterable<AsyncResultIterable<number>>>(
  asyncSplitAt(3)(Ø as AsyncIterable<number>),
);
