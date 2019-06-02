/**
 * @generated-from ./$find.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { asyncFind, range } from '..';
describe('asyncFind', () => {
  it('returns found item', async () => {
    const found = asyncFind(item => item === 5, [1, 2, 3, 4, 5, 6]);
    expect(await found).toBe(5);
  });
  it('returns undefined if no item found', async () => {
    const found = asyncFind(item => item === 100, [1, 2, 3, 4, 5, 6]);
    expect(await found).toBe(undefined);
  });
  it('returns found item from iterable', async () => {
    const found = asyncFind(
      item => item === 5,
      range({
        start: 1,
        end: 7,
      }),
    );
    expect(await found).toBe(5);
  });
  it('returns undefined if no item found from iterable', async () => {
    const found = asyncFind(
      item => item === 100,
      range({
        start: 1,
        end: 7,
      }),
    );
    expect(await found).toBe(undefined);
  });
  it('returns filtered iterable (curried version)', async () => {
    const findFive = asyncFind(item => item === 5);
    expect(
      await findFive(
        range({
          start: 1,
          end: 7,
        }),
      ),
    ).toBe(5);
  });
  it('returns undefined if passed null', async () => {
    const found = asyncFind(item => item, null);
    expect(await found).toBe(undefined);
  });
  it('returns found item (using a promise)', async () => {
    const found = asyncFind(async item => item === 5, [1, 2, 3, 4, 5, 6]);
    expect(await found).toBe(5);
  });
});
