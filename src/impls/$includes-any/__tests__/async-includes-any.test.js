/**
 * @generated-from ./$includes-any.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIncludesAny } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncIncludesAny', () => {
  describe('when no values are given', () => {
    it('returns false', async () => {
      expect(await asyncIncludesAny([], asyncWrap([]))).toBe(false);
    });
  });

  describe('when iterable includes a given value', () => {
    it('returns true', async () => {
      expect(await asyncIncludesAny([1], asyncWrap([1, 2, 3]))).toBe(true);
      expect(await asyncIncludesAny([1, 2], asyncWrap([1, 2, 3]))).toBe(true);
      expect(await asyncIncludesAny([2, 1], asyncWrap([1, 2, 3]))).toBe(true);
      expect(await asyncIncludesAny([3, 2, 1], asyncWrap([1, 2, 3]))).toBe(true);
      expect(await asyncIncludesAny([1, 2, 3], asyncWrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable does not include a given value', () => {
    it('returns false', async () => {
      expect(await asyncIncludesAny([-1, 0], asyncWrap([1, 2, 3]))).toBe(false);
      expect(await asyncIncludesAny([undefined, null], asyncWrap([1, 2, 3]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    it('returns false', async () => {
      expect(await asyncIncludesAny([undefined], asyncWrap([]))).toBe(false);
    });
  });
});
