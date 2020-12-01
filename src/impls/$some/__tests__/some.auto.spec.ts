/**
 * @generated-from ./some.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { some } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('some', () => {
  describe('when iterable is empty', () => {
    it('returns false', () => {
      expect(some(() => true, null)).toEqual(false);
      expect(some(() => true, undefined)).toEqual(false);
      expect(some(() => true, wrap([]))).toEqual(false);
    });
  });

  describe('when no values match predicate', () => {
    it('returns false', () => {
      expect(some((val) => val !== val, [1, 2, 3])).toBe(false);
    });
  });

  describe('when some values match predicate', () => {
    it('returns true', () => {
      expect(some((val) => val > 2, [1, 2, 3])).toBe(true);
    });
  });

  describe('when all values match predicate', () => {
    it('returns true', () => {
      expect(some((val) => val > 0, [1, 2, 3])).toBe(true);
    });
  });
});
