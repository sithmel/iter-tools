/**
 * @generated-from ./async-join-as-string.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncJoinAsString } from '../../..';
import { asyncWrap } from '../../../__tests__/__framework__/async-wrap';
describe('asyncJoinAsString', () => {
  it('joins an iterable of strings into a single string', async () => {
    expect(await asyncJoinAsString(asyncWrap(['1', '2', '3']))).toEqual('123');
  });
  it('joins an iterable of iterables of strings into a single string', async () => {
    expect(
      await asyncJoinAsString(asyncWrap([asyncWrap('1'), asyncWrap('2'), asyncWrap('3')])),
    ).toEqual('123');
  });
  it('coerces non-strings into strings', async () => {
    const iterable: any = [1, 2, 3];
    expect(await asyncJoinAsString(asyncWrap(iterable))).toEqual('123');
  });
});
