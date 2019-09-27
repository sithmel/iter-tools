/**
 * @generated-from ./$last.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { last, wrap } from '../../..';
describe('last', () => {
  it('Returns the last item in the iterable', () => {
    expect(last(wrap([1, 2, 3]))).toEqual(3);
  });
  it('Returns the last item in an array', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });
  describe('when iterable is empty', () => {
    it('returns undefined', () => {
      expect(last(wrap([]))).toBe(undefined);
    });
  });
});
