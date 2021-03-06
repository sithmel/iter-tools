/**
 * @generated-from ./$collate.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncCollate } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncCollate', () => {
  it('output is sorted if passed a comparator', async () => {
    const iter = asyncCollate(
      (a, b) => a - b,
      asyncWrap([1, 8, 9]),
      asyncWrap([4, 6, 7]),
      asyncWrap([2, 3, 5]),
    );
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with input iterables of different lengths', async () => {
    const iter = asyncCollate((a, b) => a - b, asyncWrap([]), asyncWrap([2, 3]), asyncWrap([1]));
    expect(await asyncUnwrap(iter)).toEqual([1, 2, 3]);
  });
});
