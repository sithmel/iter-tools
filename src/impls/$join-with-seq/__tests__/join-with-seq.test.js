/**
 * @generated-from ./$join-with-seq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { joinWithSeq } from 'iter-tools-es';
import { wrapDeep, unwrap } from '../../../test/helpers.js';

describe('joinWithSeq', () => {
  describe('joining on the empty seq', () => {
    it('should include the values from every group', () => {
      expect(unwrap(joinWithSeq([], wrapDeep([[1], [2], [3]])))).toEqual([1, 2, 3]);
    });

    it('should contain no output for an empty group', () => {
      expect(unwrap(joinWithSeq([], wrapDeep([[1], [], [3]])))).toEqual([1, 3]);
    });
  });

  it('should yield a single separator when joining two empty groups', () => {
    expect(unwrap(joinWithSeq([1, 2], wrapDeep([[], []])))).toEqual([1, 2]);
  });

  it('passes through the empty iterable', () => {
    expect(unwrap(joinWithSeq([], null))).toEqual([]);
    expect(unwrap(joinWithSeq([], undefined))).toEqual([]);
    expect(unwrap(joinWithSeq([], wrapDeep([])))).toEqual([]);
  });
});
