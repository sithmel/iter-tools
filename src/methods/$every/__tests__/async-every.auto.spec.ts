/**
 * @generated-from ./async-every.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncEvery } from '../../..';
import { asyncWrap } from '../../../test/async-helpers';

describe('asyncEvery', () => {
  describe('when iterable is empty', () => {
    it('returns true', async () => {
      expect(await asyncEvery(() => true, null)).toEqual(true);
      expect(await asyncEvery(() => true, undefined)).toEqual(true);
      expect(await asyncEvery(() => true, asyncWrap([]))).toEqual(true);
    });
  });

  describe('when no values match predicate', () => {
    it('returns false', async () => {
      expect(await asyncEvery(val => val !== val, [1, 2, 3])).toBe(false);
    });
  });

  describe('when some values match predicate', () => {
    it('returns false', async () => {
      expect(await asyncEvery(val => val > 2, [1, 2, 3])).toBe(false);
    });
  });

  describe('when every value matches predicate', () => {
    it('returns true', async () => {
      expect(await asyncEvery(val => val > 0, [1, 2, 3])).toBe(true);
    });
  });

  it('may take an async predicate', async () => {
    expect(await asyncEvery(async () => true, [1, 2, 3])).toBe(true);
  });
});
