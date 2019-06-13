/**
 * @generated-from ./$take-while.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { asyncTakeWhile, asyncToArray, range } from '..';
describe('asyncTakeWhile', () => {
  it('takeWhile on array', async () => {
    const iter = asyncTakeWhile(item => item % 2 === 0, [2, 2, 3, 2, 2, 2]);
    expect(await asyncToArray(iter)).toEqual([2, 2]);
  });
  it('takeWhile on iterable', async () => {
    const iter = asyncTakeWhile(
      item => item !== 4,
      range({
        start: 1,
        end: 7,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([1, 2, 3]);
  });
  it('takeWhile on iterable (curried version)', async () => {
    const iter = asyncTakeWhile(item => item !== 4);
    expect(
      await asyncToArray(
        iter(
          range({
            start: 1,
            end: 7,
          }),
        ),
      ),
    ).toEqual([1, 2, 3]);
  });
  it('takeWhile on empty iterable', async () => {
    expect(await asyncToArray(asyncTakeWhile(item => item, null))).toEqual([]);
  });
  it('takeWhile on array (using a promise)', async () => {
    const iter = asyncTakeWhile(item => Promise.resolve(item % 2 === 0), [2, 2, 3, 2, 2, 2]);
    expect(await asyncToArray(iter)).toEqual([2, 2]);
  });
});
