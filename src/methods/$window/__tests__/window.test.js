/**
 * @generated-from ./$window.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { unwrapDeep as uw } from '../../../__tests__/helpers';
import { window } from '../../..';

describe('window', () => {
  it('frames iterable', () => {
    expect(uw(window(3, [1, 2, 3, 4, 5]))).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
  });

  it('frames iterable (window equal to the sequence)', () => {
    expect(uw(window(5, [1, 2, 3, 4, 5]))).toEqual([[1, 2, 3, 4, 5]]);
  });

  describe('when the dinwos is bigger than the sequence', () => {
    it('frames iterable (window bigger than the sequence)', () => {
      expect(uw(window(6, [1, 2, 3, 4, 5]))).toEqual([]);
    });

    it('frames iterable (window bigger than the sequence) with filler', () => {
      expect(uw(window(6, [1, 2, 3, 4, 5]))).toEqual([]);
    });
  });

  describe('invalid inputs', () => {
    it('throw', () => {
      const size: any = 'a';
      expect(() => window(size, [])).toThrowErrorMatchingSnapshot();
    });
  });
});