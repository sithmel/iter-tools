/**
 * @generated-from ./starts-with-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { startsWithSubseq } from '../../..';
import { wrap } from '../../../test/helpers';

describe('startsWithSubseq', () => {
  describe('when iterable starts with the sequence', () => {
    it('returns true', () => {
      expect(startsWithSubseq(wrap([1, 2]), wrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is equal to the sequence', () => {
    it('returns true', () => {
      expect(startsWithSubseq(wrap([1, 2, 3]), wrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable is shorter than the sequence', () => {
    it('returns false', () => {
      expect(startsWithSubseq(wrap([1, 2, 3]), wrap([1, 2]))).toBe(false);
    });
  });

  describe('when iterable includes but does not start with the sequence', () => {
    it('returns false', () => {
      expect(startsWithSubseq(wrap([2, 3]), wrap([1, 2, 3]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    describe('and the sequence is empty', () => {
      it('returns true', () => {
        expect(startsWithSubseq(wrap([]), wrap([]))).toBe(true);
      });
    });

    describe('and the sequence is not empty', () => {
      it('returns false', () => {
        expect(startsWithSubseq(wrap([undefined]), wrap([]))).toBe(false);
      });
    });
  });
});
