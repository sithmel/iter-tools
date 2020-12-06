/**
 * @generated-from ./leading-window.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { leadingWindow } from 'iter-tools-es';
import { wrap, unwrapDeep, anyType } from '../../../test/helpers.js';

describe('leadingWindow', () => {
  describe('when source is empty', () => {
    it('yields no windows', () => {
      expect(unwrapDeep(leadingWindow(3, { filler: 0 }, null))).toEqual([]);
      expect(unwrapDeep(leadingWindow(3, { filler: 0 }, undefined))).toEqual([]);
      expect(unwrapDeep(leadingWindow(3, { filler: 0 }, wrap([])))).toEqual([]);
    });
  });

  describe('when size(source) < size', () => {
    it('yields only partial windows', () => {
      expect(unwrapDeep(leadingWindow(3, { filler: 0 }, wrap([1, 2])))).toEqual([
        [1, 2, 0],
        [2, 0, 0],
      ]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields one full window, then partial windows', () => {
      expect(unwrapDeep(leadingWindow(3, { filler: 0 }, wrap([1, 2, 3])))).toEqual([
        [1, 2, 3],
        [2, 3, 0],
        [3, 0, 0],
      ]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields size(source)-size full windows, then partial windows', () => {
      expect(unwrapDeep(leadingWindow(2, { filler: 0 }, wrap([1, 2, 3])))).toEqual([
        [1, 2],
        [2, 3],
        [3, 0],
      ]);
    });
  });

  describe('when useFiller is false', () => {
    it('yields shorter windows instead of windows with filler', () => {
      expect(unwrapDeep(leadingWindow(3, { useFiller: false }, wrap([1, 2, 3])))).toEqual([
        [1, 2, 3],
        [2, 3],
        [3],
      ]);
    });
  });

  it('has a default filler of undefined', () => {
    expect(unwrapDeep(leadingWindow(2, wrap([1])))).toEqual([[1, undefined]]);
  });

  describe('when arguments are invalid', () => {
    it('throws', () => {
      expect(() => leadingWindow(anyType('foo'), wrap([1, 2, 3]))).toThrowErrorMatchingSnapshot();
    });
  });
});
