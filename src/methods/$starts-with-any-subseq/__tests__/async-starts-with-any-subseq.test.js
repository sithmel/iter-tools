/**
 * @generated-from ./$starts-with-any-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncStartsWithAnySubseq } from '../../..';
import { asyncWrap } from '../../../test/async-helpers';

describe('asyncStartsWithAnySubseq', () => {
  describe('when no sequences are given', () => {
    it('returns false', async () => {
      expect(await asyncStartsWithAnySubseq([], asyncWrap([]))).toBe(false);
    });
  });

  describe('when iterable starts with a given sequence', () => {
    it('returns true', async () => {
      expect(await asyncStartsWithAnySubseq([asyncWrap([1, 2])], asyncWrap([1, 2, 3]))).toBe(true);
      expect(
        await asyncStartsWithAnySubseq(
          [asyncWrap([1, 2]), asyncWrap([1, 2, 3])],
          asyncWrap([1, 2, 3]),
        ),
      ).toBe(true);
      expect(
        await asyncStartsWithAnySubseq(
          [asyncWrap([1, 2, 3]), asyncWrap([1, 2])],
          asyncWrap([1, 2, 3]),
        ),
      ).toBe(true);
    });
  });

  describe('when iterable is equal to a given sequence', () => {
    it('returns true', async () => {
      expect(await asyncStartsWithAnySubseq([asyncWrap([1, 2, 3])], asyncWrap([1, 2, 3]))).toBe(
        true,
      );
    });
  });

  describe('when iterable is shorter than a matching sequence', () => {
    it('returns false', async () => {
      expect(await asyncStartsWithAnySubseq([asyncWrap([1, 2, 3])], asyncWrap([1, 2]))).toBe(false);
    });
  });

  describe('when iterable includes but does not start with a given sequence', () => {
    it('returns false', async () => {
      expect(await asyncStartsWithAnySubseq([asyncWrap([2, 3])], asyncWrap([1, 2, 3]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    describe('and any sequence is empty', () => {
      it('returns true', async () => {
        expect(
          await asyncStartsWithAnySubseq([asyncWrap([]), asyncWrap([null])], asyncWrap([])),
        ).toBe(true);
        expect(await asyncStartsWithAnySubseq([null], asyncWrap([]))).toBe(true);
      });
    });

    describe('and no sequence is empty', () => {
      it('returns false', async () => {
        expect(await asyncStartsWithAnySubseq([asyncWrap([undefined])], asyncWrap([]))).toBe(false);
      });
    });
  });
});
