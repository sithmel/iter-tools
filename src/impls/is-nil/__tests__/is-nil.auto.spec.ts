/**
 * @generated-from ./is-nil.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { isNil } from 'iter-tools-es';

describe('isNil', () => {
  describe('when value is null or undefined', () => {
    it('returns true', () => {
      expect(isNil(undefined)).toBe(true);
      expect(isNil(null)).toBe(true);
    });
  });

  describe('when value is not null or undefined', () => {
    it('returns false', () => {
      expect(isNil(0)).toBe(false);
      expect(isNil({})).toBe(false);
      expect(isNil(NaN)).toBe(false);
    });
  });
});