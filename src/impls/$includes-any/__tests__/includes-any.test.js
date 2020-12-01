/**
 * @generated-from ./$includes-any.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { includesAny } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('includesAny', () => {
  describe('when no values are given', () => {
    it('returns false', () => {
      expect(includesAny([], wrap([]))).toBe(false);
    });
  });

  describe('when iterable includes a given value', () => {
    it('returns true', () => {
      expect(includesAny([1], wrap([1, 2, 3]))).toBe(true);
      expect(includesAny([1, 2], wrap([1, 2, 3]))).toBe(true);
      expect(includesAny([2, 1], wrap([1, 2, 3]))).toBe(true);
      expect(includesAny([3, 2, 1], wrap([1, 2, 3]))).toBe(true);
      expect(includesAny([1, 2, 3], wrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when iterable does not include a given value', () => {
    it('returns false', () => {
      expect(includesAny([-1, 0], wrap([1, 2, 3]))).toBe(false);
      expect(includesAny([undefined, null], wrap([1, 2, 3]))).toBe(false);
    });
  });

  describe('when iterable is empty', () => {
    it('returns false', () => {
      expect(includesAny([undefined], wrap([]))).toBe(false);
    });
  });

  describe('when iterable is a string', () => {
    it('warns', () => {
      includesAny([], 'abc');
      expect(console.warn).callsMatchSnapshot();
    });
  });
});
