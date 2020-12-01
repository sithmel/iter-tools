/**
 * @generated-from ./$split.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { split } from 'iter-tools-es';
import { wrap, unwrapDeep } from '../../../test/helpers.js';

describe('split', () => {
  it('should yield an iterable for every value in the iterable', () => {
    expect(unwrapDeep(split(wrap([1, 2, 3])))).toEqual([[1], [2], [3]]);
  });
});
