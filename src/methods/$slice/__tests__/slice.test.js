/**
 * @generated-from ./$slice.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { slice } from '../../..';
import { Iterable } from '../../../types/iterable';
import { wrap, unwrap } from '../../../test/helpers';

describe('slice', () => {
  let list: Iterable<number>;

  beforeEach(() => {
    list = wrap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  describe('with positional args', () => {
    it('can slice starting from the beginning', () => {
      expect(unwrap(slice(0, 2, list))).toEqual([0, 1]);
    });

    it('can slice to the end', () => {
      expect(unwrap(slice(8, list))).toEqual([8, 9]);
    });

    it('can slice with a step', () => {
      expect(unwrap(slice(2, 7, 2, list))).toEqual([2, 4, 6]);
    });
  });

  describe('with options argument', () => {
    it('can slice to the end', () => {
      expect(unwrap(slice({ start: 8 }, list))).toEqual([8, 9]);
    });

    it('returns simple slice with start/end', () => {
      expect(unwrap(slice({ start: 1, end: 4 }, list))).toEqual([1, 2, 3]);
    });

    it('returns empty slice with end > start', () => {
      expect(unwrap(slice({ start: 4, end: 3 }, list))).toEqual([]);
    });

    it('returns simple slice with start/end/step', () => {
      expect(unwrap(slice({ start: 1, end: 6, step: 2 }, list))).toEqual([1, 3, 5]);
    });

    it('returns empty iterable when passed out of bounds indicies', () => {
      expect(unwrap(slice({ start: 1, end: 6, step: 2 }, []))).toEqual([]);
    });

    it('returns empty iterable when passed null iterable', () => {
      expect(unwrap(slice({ start: 1, end: 4 }, null))).toEqual([]);
    });

    it('returns curried slice', () => {
      expect(unwrap(slice({ start: 0, end: 2 })(list))).toEqual([0, 1]);
    });

    it('returns slice with negative end', () => {
      expect(unwrap(slice({ start: 4, end: -2 }, list))).toEqual([4, 5, 6, 7]);
    });

    it('returns empty slice with negative end', () => {
      expect(unwrap(slice({ start: 4, end: -8 }, list))).toEqual([]);
    });

    it('returns slice with negative end and step', () => {
      expect(unwrap(slice({ start: 1, end: -1, step: 3 }, list))).toEqual([1, 4, 7]);
    });

    it('returns slice with negative start', () => {
      expect(unwrap(slice({ start: -3 }, list))).toEqual([7, 8, 9]);
    });

    it('returns slice with negative start and step', () => {
      expect(unwrap(slice({ start: -6, step: 2 }, list))).toEqual([4, 6, 8]);
    });

    it('returns slice with negative start and end', () => {
      expect(unwrap(slice({ start: -3, end: -1 }, list))).toEqual([7, 8]);
    });

    it('returns slice with negative start and end, and step', () => {
      expect(unwrap(slice({ start: -5, end: -1, step: 2 }, list))).toEqual([5, 7]);
    });

    it('returns slice with negative start and end, and end < start', () => {
      expect(unwrap(slice({ start: -1, end: -2 }, list))).toEqual([]);
    });

    it('returns slice with negative start and positive end', () => {
      expect(unwrap(slice({ start: -5, end: 9 }, list))).toEqual([5, 6, 7, 8]);
    });

    it('returns slice with negative start and positive end (return empty)', () => {
      expect(unwrap(slice({ start: -5, end: 2 }, list))).toEqual([]);
    });

    it('returns slice with negative start and positive end and step', () => {
      expect(unwrap(slice({ start: -5, end: 9, step: 2 }, list))).toEqual([5, 7]);
    });

    it('returns a smaller slice when start is negative and larger than source', () => {
      expect(unwrap(slice({ start: -3, end: 1, step: 1 }, [1, 2]))).toEqual([1]);
    });
  });

  it('when given invalid parameters', () => {
    const untypedSlice: any = slice;
    expect(() => untypedSlice('', [])).toThrowErrorMatchingSnapshot();
    expect(() => untypedSlice(0, {}, [])).toThrowErrorMatchingSnapshot();
    expect(() => untypedSlice(0, 0, -2, [])).toThrowErrorMatchingSnapshot();
  });
});
