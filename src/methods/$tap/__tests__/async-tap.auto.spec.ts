/**
 * @generated-from ./async-tap.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncTap, asyncToArray, range } from '../../..';
describe('asyncTap', () => {
  it('return tapped iterable', async () => {
    const iter = asyncTap(item => item * 2, [1, 2, 3]);
    expect(await asyncToArray(iter)).toEqual([1, 2, 3]);
  });
  it('return tapped iterable from iterable', async () => {
    const iter = asyncTap(
      item => item * 2,
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([1, 2, 3]);
  });
  it('return tapped iterable (curried version)', async () => {
    const iter = asyncTap(item => item * 2);
    expect(
      await asyncToArray(
        iter(
          range({
            start: 1,
            end: 4,
          }),
        ),
      ),
    ).toEqual([1, 2, 3]);
  });
});
