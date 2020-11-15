/**
 * @generated-from ./$find-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncFindOr } from '../../..';
import { asyncWrap } from '../../../test/async-helpers';

describe('asyncFindOr', () => {
  describe('when iterable is empty', () => {
    it('returns notFoundValue', async () => {
      expect(await asyncFindOr(0, (item: any) => item, null)).toBe(0);
      expect(await asyncFindOr(0, (item: any) => item, undefined)).toBe(0);
      expect(await asyncFindOr(0, (item: any) => item, asyncWrap([]))).toBe(0);
    });
  });

  describe('when iterable does not contain the desired value', () => {
    it('returns notFoundValue', async () => {
      expect(await asyncFindOr(0, _ => false, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(0);
    });
  });

  describe('when iterable contains the desired value', () => {
    it('returns the value', async () => {
      expect(await asyncFindOr(0, item => item === 5, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(5);
    });
  });

  it('may take an async predicate', async () => {
    expect(await asyncFindOr(0, async item => item === 5, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(5);
  });
});
