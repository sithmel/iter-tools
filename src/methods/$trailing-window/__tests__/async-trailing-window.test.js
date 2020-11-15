/**
 * @generated-from ./$trailing-window.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncTrailingWindow } from '../../..';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers';

describe('asyncTrailingWindow', () => {
  describe('when source is empty', () => {
    it('yields no windows', async () => {
      expect(await asyncUnwrapDeep(asyncTrailingWindow(3, { filler: 0 }, null))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncTrailingWindow(3, { filler: 0 }, undefined))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncTrailingWindow(3, { filler: 0 }, asyncWrap([])))).toEqual(
        [],
      );
    });
  });

  describe('when size(source) < size', () => {
    it('yields only partial windows', async () => {
      expect(
        await asyncUnwrapDeep(asyncTrailingWindow(3, { filler: 0 }, asyncWrap([1, 2]))),
      ).toEqual([[0, 0, 1], [0, 1, 2]]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields partial windows, then one full window', async () => {
      expect(
        await asyncUnwrapDeep(asyncTrailingWindow(3, { filler: 0 }, asyncWrap([1, 2, 3]))),
      ).toEqual([[0, 0, 1], [0, 1, 2], [1, 2, 3]]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields partial windows, then size(source)-size full windows', async () => {
      const result = [[0, 1], [1, 2], [2, 3]];

      expect(
        await asyncUnwrapDeep(asyncTrailingWindow(2, { filler: 0 }, asyncWrap([1, 2, 3]))),
      ).toEqual(result);
      // prettier-ignore
      // @ts-ignore
      expect((await asyncUnwrapDeep(asyncTrailingWindow({ size: 2, filler: 0 }, asyncWrap([1, 2, 3]))))).toEqual(result);
    });
  });

  it('has a default filler of undefined', async () => {
    expect(await asyncUnwrapDeep(asyncTrailingWindow(2, asyncWrap([1])))).toEqual([[undefined, 1]]);
  });
});
