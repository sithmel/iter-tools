/**
 * @generated-from ./$reduce.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { __peekerate } from '../$peekerate/peekerate.js';

export function __reduce(iterable, reducer, initial = undefined) {
  let c = 0;
  let result = initial;
  const peekr = __peekerate(iterable);
  try {
    if (initial === undefined) {
      if (peekr.done) {
        throw new Error('Cannot reduce: no initial value specified and iterable was empty');
      }
      result = peekr.value;
      peekr.advance();
      c = 1;
    }
    while (!peekr.done) {
      result = reducer(result, peekr.value, c++);
      peekr.advance();
    }
    return result;
  } finally {
    // close the iterator in case of exceptions
    peekr.return();
  }
}

export const reduce = /*#__PURE__*/ iterableCurry(__reduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
});
