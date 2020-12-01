/**
 * @generated-from ./split-on-any-seq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { splitOnAnySeq, toArray } from 'iter-tools-es';
import { wrap, unwrapDeep } from '../../../test/helpers.js';

describe('splitOnAnySeq', () => {
  describe('when there are no sequences', () => {
    it('yields a single part containing the values from source', () => {
      expect(unwrapDeep(splitOnAnySeq([], wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
    });
  });

  describe('when source is empty', () => {
    it('yields no parts', () => {
      expect(toArray(splitOnAnySeq([null], null))).toEqual([]);
      expect(toArray(splitOnAnySeq([null], undefined))).toEqual([]);
      expect(toArray(splitOnAnySeq([null], wrap([])))).toEqual([]);
    });
  });

  describe('when no sequence is not present in source', () => {
    it('yields a single part containing the values from source', () => {
      expect(unwrapDeep(splitOnAnySeq([wrap([undefined])], wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
    });
  });

  describe('when a sequence is equal to source', () => {
    it('yields two empty parts', () => {
      expect(unwrapDeep(splitOnAnySeq([wrap([2, 2])], wrap([2, 2])))).toEqual([[], []]);
    });
  });

  describe('when sequences are present s times in source', () => {
    it('yields s+1 parts', () => {
      expect(unwrapDeep(splitOnAnySeq([wrap([1, -1])], wrap([1, 1, -1, 2, 1, -1, 3])))).toEqual([
        [1],
        [2],
        [3],
      ]);
    });
  });

  describe('when sequences overlap with each other in source', () => {
    it('should only split once', () => {
      expect(
        unwrapDeep(
          splitOnAnySeq(
            [
              [2, 3],
              [3, 2],
            ],
            wrap([1, 2, 3, 2, 2, 3, 2, 3, 4]),
          ),
        ),
      ).toEqual([[1], [2], [], [4]]);

      expect(
        unwrapDeep(
          splitOnAnySeq(
            [
              [2, 3],
              [2, 2, 3],
            ],
            wrap([1, 2, 2, 3, 3, 4]),
          ),
        ),
      ).toEqual([[1], [3, 4]]);
    });
  });

  describe('when more than one sequence matches', () => {
    it('consume the longest sequence that matches', () => {
      expect(
        unwrapDeep(
          splitOnAnySeq(
            [
              [2, 2, 3],
              [2, 3],
            ],
            wrap([1, 2, 2, 3, 3, 4]),
          ),
        ),
      ).toEqual([[1], [3, 4]]);

      expect(
        unwrapDeep(
          splitOnAnySeq(
            [
              [2, 3],
              [2, 2, 3],
            ],
            wrap([1, 2, 2, 3, 3, 4]),
          ),
        ),
      ).toEqual([[1], [3, 4]]);

      expect(
        unwrapDeep(
          splitOnAnySeq(
            [
              [2, 2, 3],
              [2, 2],
            ],
            wrap([1, 2, 2, 3, 3, 4]),
          ),
        ),
      ).toEqual([[1], [3, 4]]);

      expect(
        unwrapDeep(
          splitOnAnySeq(
            [
              [2, 2],
              [2, 2, 3],
            ],
            wrap([1, 2, 2, 3, 3, 4]),
          ),
        ),
      ).toEqual([[1], [3, 4]]);
    });
  });

  describe('when empty sequences are present', () => {
    it('ignores them', () => {
      expect(unwrapDeep(splitOnAnySeq([null], wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
      expect(unwrapDeep(splitOnAnySeq([undefined], wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
      expect(unwrapDeep(splitOnAnySeq([wrap([])], wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
      expect(unwrapDeep(splitOnAnySeq([null, wrap([2])], wrap([1, 2, 3])))).toEqual([[1], [3]]);
    });
  });
});
