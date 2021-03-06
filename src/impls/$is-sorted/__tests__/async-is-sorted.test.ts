/**
 * @generated-from ./$is-sorted.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIsSorted } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncIsSorted', () => {
  describe('when iterable is empty', () => {
    it('returns true', async () => {
      expect(await asyncIsSorted(asyncWrap([]))).toEqual(true);
    });
  });

  describe('when iterable contains only a single value', () => {
    it('returns true', async () => {
      expect(await asyncIsSorted(asyncWrap([9000]))).toEqual(true);
    });
  });

  describe('when the values in iterable are sorted', () => {
    it('returns true', async () => {
      expect(await asyncIsSorted((a, b) => b - a, asyncWrap([3, 2, 1]))).toEqual(true);
    });
  });

  describe('when the values in iterable are not sorted', () => {
    it('returns false', async () => {
      expect(await asyncIsSorted((a, b) => b - a, asyncWrap([1, 2, 3]))).toEqual(false);
    });
  });

  describe('when some values in iterable are equal to each other', () => {
    it('returns true', async () => {
      expect(await asyncIsSorted((a, b) => b - a, asyncWrap([3, 2, 2, 2, 1]))).toEqual(true);
    });
  });

  describe('when no comparator is specified', () => {
    it('compares the default comparator', async () => {
      expect(await asyncIsSorted('abc')).toEqual(true);
      expect(await asyncIsSorted('cba')).toEqual(false);
      expect(await asyncIsSorted('bbb')).toEqual(true);
    });
  });
});
