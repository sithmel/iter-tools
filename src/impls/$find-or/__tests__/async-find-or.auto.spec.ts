/**
 * @generated-from ./async-find-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncFindOr } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncFindOr', () => {
  describe('when iterable is empty', () => {
    it('returns notFoundValue', async () => {
      expect(await asyncFindOr(0, (value: any) => value, null)).toBe(0);
      expect(await asyncFindOr(0, (value: any) => value, undefined)).toBe(0);
      expect(await asyncFindOr(0, (value: any) => value, asyncWrap([]))).toBe(0);
    });
  });

  describe('when iterable does not contain the desired value', () => {
    it('returns notFoundValue', async () => {
      expect(await asyncFindOr(0, (_) => false, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(0);
    });
  });

  describe('when iterable contains the desired value', () => {
    it('returns the value', async () => {
      expect(await asyncFindOr(0, (value) => value === 5, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(5);
    });
  });

  it('may take an async predicate', async () => {
    expect(await asyncFindOr(0, async (value) => value === 5, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(
      5,
    );
  });
});
