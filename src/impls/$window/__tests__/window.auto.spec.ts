/**
 * @generated-from ./window.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { window } from 'iter-tools-es';
import { wrap, unwrapDeep, anyType } from '../../../test/helpers.js';

describe('window', () => {
  describe('when source is empty', () => {
    it('yields no windows', () => {
      expect(unwrapDeep(window(3, null))).toEqual([]);
      expect(unwrapDeep(window(3, undefined))).toEqual([]);
      expect(unwrapDeep(window(3, wrap([])))).toEqual([]);
    });
  });

  describe('when size(source) < size', () => {
    it('yields no windows', () => {
      expect(unwrapDeep(window(3, wrap([1, 2])))).toEqual([]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields one full window', () => {
      expect(unwrapDeep(window(3, wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields partial windows, then size(source)-size full windows', () => {
      expect(unwrapDeep(window(2, wrap([1, 2, 3])))).toEqual([
        [1, 2],
        [2, 3],
      ]);
    });
  });

  describe('when size is invalid', () => {
    it('throws a validation error', () => {
      expect(() => window(anyType(''), wrap([]))).toThrowErrorMatchingSnapshot();
    });
  });
});
