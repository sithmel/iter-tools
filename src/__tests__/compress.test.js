/**
 * @generated-from ./$compress.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { compress, toArray, range } from '..';
describe('compress', () => {
  it('compress iterables', () => {
    const iter = compress(range(10), [false, true, false, true, true]);
    expect(toArray(iter)).toEqual([1, 3, 4]);
  });
});
