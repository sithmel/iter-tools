/**
 * @generated-from ./$split-on-any-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { splitOnAnySubseq } from '../../..';
import { unwrapDeep as uw } from '../../../__tests__/helpers';
import { wrap } from '../../../__tests__/__framework__/wrap';
describe('splitOnAnySubseq', () => {
  it('can split on any of many possible subsequences', () => {
    expect(uw(splitOnAnySubseq([[2, 2], [3, 3]], wrap([1, 2, 2, 3, 3, 4])))).toEqual([
      [1],
      [],
      [4],
    ]);
  });
  it('works when the separator is the only thing in the sequence', () => {
    expect(uw(splitOnAnySubseq([[2, 2], [3, 3]], wrap([2, 2])))).toEqual([[], []]);
  });
  it('splits on the longest subsequence that matches', () => {
    expect(uw(splitOnAnySubseq([[2, 2, 3], [2, 3]], wrap([1, 2, 2, 3, 3, 4])))).toEqual([
      [1],
      [3, 4],
    ]);
    expect(uw(splitOnAnySubseq([[2, 3], [2, 2, 3]], wrap([1, 2, 2, 3, 3, 4])))).toEqual([
      [1],
      [3, 4],
    ]);
    expect(uw(splitOnAnySubseq([[2, 2, 3], [2, 2]], wrap([1, 2, 2, 3, 3, 4])))).toEqual([
      [1],
      [3, 4],
    ]);
    expect(uw(splitOnAnySubseq([[2, 2], [2, 2, 3]], wrap([1, 2, 2, 3, 3, 4])))).toEqual([
      [1],
      [3, 4],
    ]);
  });
  it('should only start matching again after a consumed split ends', () => {
    expect(uw(splitOnAnySubseq([[2, 3], [3, 2]], wrap([1, 2, 3, 2, 2, 3, 2, 3, 4])))).toEqual([
      [1],
      [2],
      [],
      [4],
    ]);
    expect(uw(splitOnAnySubseq([[2, 3], [2, 2, 3]], wrap([1, 2, 2, 3, 3, 4])))).toEqual([
      [1],
      [3, 4],
    ]);
  });
  it('does not split on the empty subsequence', () => {
    expect(uw(splitOnAnySubseq([[], [null]], wrap([1, 2, null, 4])))).toEqual([[1, 2], [4]]);
  });
  it('passes through the empty iterable', () => {
    expect(uw(splitOnAnySubseq([], null))).toEqual([]);
  });
  it('the empty string is an empty iterable', () => {
    expect(uw(splitOnAnySubseq([], ''))).toEqual([]);
  });
  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(uw(splitOnAnySubseq(['Ø'], '11Ø22Ø33'))).toEqual(['11', '22', '33']);
    });
    it('should split when the subseqs are not strings', () => {
      expect(uw(splitOnAnySubseq([['Ø']], '11Ø22Ø33'))).toEqual(['11', '22', '33']);
    });
  });
});
