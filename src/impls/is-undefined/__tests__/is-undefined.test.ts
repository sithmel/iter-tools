import { isUndefined } from 'iter-tools-es';

describe('isUndefined', () => {
  describe('when value is undefined', () => {
    it('returns true', () => {
      expect(isUndefined(undefined)).toBe(true);
    });
  });

  describe('when value is not undefined', () => {
    it('returns false', () => {
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined({})).toBe(false);
      expect(isUndefined(NaN)).toBe(false);
    });
  });
});
