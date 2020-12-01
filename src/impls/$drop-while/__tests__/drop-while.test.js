/**
 * @generated-from ./$drop-while.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { dropWhile } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('dropWhile', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(dropWhile((value: any) => value, null))).toEqual([]);
      expect(unwrap(dropWhile((value: any) => value, undefined))).toEqual([]);
      expect(unwrap(dropWhile((value: any) => value, wrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    describe('when no values match predicate', () => {
      it('yields values from source', () => {
        const iter = dropWhile((i) => i !== i, wrap([1, 2, 3, 4, 5, 6]));
        expect(unwrap(iter)).toEqual([1, 2, 3, 4, 5, 6]);
      });
    });

    describe('when all values match predicate', () => {
      it('yields no values', () => {
        const iter = dropWhile((i) => i === i, wrap([1, 2, 3, 4, 5, 6]));
        expect(unwrap(iter)).toEqual([]);
      });
    });

    describe('when a value matches predicate', () => {
      it('yields the matching value and subsequent values', () => {
        const iter = dropWhile((i) => i !== 4, wrap([1, 2, 3, 4, 5, 6]));
        expect(unwrap(iter)).toEqual([4, 5, 6]);
      });
    });
  });
});
