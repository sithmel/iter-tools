/**
 * @generated-from ./$starts-with-seq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncStartsWithSeq } from '@iter-tools/es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncStartsWithSeq', () => {
  describe('when iterable starts with the sequence', () => {
    it('returns true', async () => {
      expect(await asyncStartsWithSeq(asyncWrap([1, 2]), asyncWrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is equal to the sequence', () => {
    it('returns true', async () => {
      expect(await asyncStartsWithSeq(asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is shorter than the sequence', () => {
    it('returns false', async () => {
      expect(await asyncStartsWithSeq(asyncWrap([1, 2, 3]), asyncWrap([1, 2]))).toBe(false);
    });
  });

  describe('when iterable includes but does not start with the sequence', () => {
    it('returns false', async () => {
      expect(await asyncStartsWithSeq(asyncWrap([2, 3]), asyncWrap([1, 2, 3]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    describe('and the sequence is empty', () => {
      it('returns true', async () => {
        expect(await asyncStartsWithSeq(asyncWrap([]), asyncWrap([]))).toBe(true);
      });
    });

    describe('and the sequence is not empty', () => {
      it('returns false', async () => {
        expect(await asyncStartsWithSeq(asyncWrap([undefined]), asyncWrap([]))).toBe(false);
      });
    });
  });
});