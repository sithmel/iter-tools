/**
 * @generated-from ./trailing-window.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { trailingWindow } from 'iter-tools-es';
import { wrap, unwrapDeep, anyType } from '../../../test/helpers.js';

describe('trailingWindow', () => {
  describe('when source is empty', () => {
    it('yields no windows', () => {
      expect(unwrapDeep(trailingWindow(3, { filler: 0 }, null))).toEqual([]);
      expect(unwrapDeep(trailingWindow(3, { filler: 0 }, undefined))).toEqual([]);
      expect(unwrapDeep(trailingWindow(3, { filler: 0 }, wrap([])))).toEqual([]);
    });
  });

  describe('when size(source) < size', () => {
    it('yields only partial windows', () => {
      expect(unwrapDeep(trailingWindow(3, { filler: 0 }, wrap([1, 2])))).toEqual([
        [0, 0, 1],
        [0, 1, 2],
      ]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields partial windows, then one full window', () => {
      expect(unwrapDeep(trailingWindow(3, { filler: 0 }, wrap([1, 2, 3])))).toEqual([
        [0, 0, 1],
        [0, 1, 2],
        [1, 2, 3],
      ]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields partial windows, then size(source)-size full windows', () => {
      expect(unwrapDeep(trailingWindow(2, { filler: 0 }, wrap([1, 2, 3])))).toEqual([
        [0, 1],
        [1, 2],
        [2, 3],
      ]);
    });
  });

  it('has a default filler of undefined', () => {
    expect(unwrapDeep(trailingWindow(2, wrap([1])))).toEqual([[undefined, 1]]);
  });

  describe('when arguments are invalid', () => {
    it('throws', () => {
      expect(() => trailingWindow(anyType('foo'), wrap([1, 2, 3]))).toThrowErrorMatchingSnapshot();
    });
  });
});
