/**
 * @generated-from ./take-last-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { takeLastOr } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('takeLastOr', () => {
  describe('when iterable is empty', () => {
    it('returns whenEmpty', () => {
      expect(takeLastOr(0, null)).toBe(0);
      expect(takeLastOr(0, undefined)).toBe(0);
      expect(takeLastOr(0, wrap([]))).toBe(0);
    });
  });

  describe('when iterable has values', () => {
    it('returns last value', () => {
      expect(takeLastOr(null, wrap([1, 2, 3]))).toBe(3);
    });
  });
});
