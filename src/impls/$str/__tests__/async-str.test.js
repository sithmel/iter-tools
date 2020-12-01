/**
 * @generated-from ./$str.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncStr } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncStr', () => {
  it('joins an iterable of strings into a single string', async () => {
    expect(await asyncStr(asyncWrap(['1', '2', '3']))).toEqual('123');
  });

  it('coerces non-strings into strings', async () => {
    expect(await asyncStr(asyncWrap([1, 2, 3]))).toEqual('123');
  });
});
