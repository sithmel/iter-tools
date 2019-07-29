/**
 * @generated-from ./$first-or.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncIterable, AsyncPromise } from './internal/async-iterable';
declare function asyncFirstOr<Iter extends AsyncInputIterable<any>, E>(
  whenEmpty: E,
  iterable: Iter,
): Iter extends [infer First, ...Array<any>]
  ? AsyncPromise<First>
  : Iter extends AsyncIterable<infer T>
  ? AsyncPromise<T | E>
  : AsyncPromise<E>;
export default asyncFirstOr;
