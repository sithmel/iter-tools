/**
 * @generated-from ./async-zip.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncZip, asyncToArray } from '../../..';
import { asyncWrap } from '../../../test/async-helpers';

describe('asyncZip', () => {
  it('zips', async () => {
    const iter = asyncZip(asyncWrap([1, 2, 3]), asyncWrap([4, 5, 6]), asyncWrap([7, 8, 9]));
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });

  it('zips stopping early', async () => {
    const iter = asyncZip(asyncWrap([1, 2, 3]), asyncWrap([4, 5, 6]), asyncWrap([7, 8]));
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8]]);
  });
});
