/**
 * @generated-from ./equal.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { equal } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('equal', () => {
  describe('when there is only one iterable', () => {
    it('returns true', () => {
      expect(equal(null)).toEqual(true);
      expect(equal(undefined)).toEqual(true);
      expect(equal(wrap([1, 2, 3]))).toEqual(true);
    });
  });

  describe('when all values in all iterables are equal', () => {
    it('returns true if all contents are equal', () => {
      expect(equal(wrap([]), wrap([]))).toEqual(true);
      expect(equal(wrap([1, 2, 3]), wrap([1, 2, 3]))).toEqual(true);
      expect(equal(wrap([1, 2, 3]), wrap([1, 2, 3]), wrap([1, 2, 3]))).toEqual(true);
    });
  });

  describe('when all values in some iterables are equal', () => {
    it('returns false', () => {
      expect(equal(wrap([1, 2, 3]), wrap([1, 2, 3]), wrap([1, 2, 4]))).toEqual(false);
      expect(equal(wrap([1, 2, 3]), wrap([1, 2, 4]), wrap([1, 2, 3]))).toEqual(false);
      expect(equal(wrap([1, 2, 4]), wrap([1, 2, 3]), wrap([1, 2, 3]))).toEqual(false);
    });
  });

  describe('when iterables have the same values but different lengths', () => {
    it('returns false', () => {
      expect(equal(wrap([1]), wrap([1]), wrap([1, 2]))).toEqual(false);
      expect(equal(wrap([1]), wrap([1, 2]), wrap([1]))).toEqual(false);
      expect(equal(wrap([1, 2]), wrap([1]), wrap([1]))).toEqual(false);
      expect(equal(wrap([]), wrap([]), wrap([1]))).toEqual(false);
      expect(equal(wrap([]), wrap([1]), wrap([]))).toEqual(false);
      expect(equal(wrap([1]), wrap([]), wrap([]))).toEqual(false);
    });
  });
});
