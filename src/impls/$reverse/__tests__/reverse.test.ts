/**
 * @generated-from ./$reverse.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { reverse } from 'iter-tools-es';
import { unwrap, wrap } from '../../../test/helpers.js';

describe('reverse', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(reverse(null))).toEqual([]);
      expect(unwrap(reverse(undefined))).toEqual([]);
      expect(unwrap(reverse(wrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields values in reverse order', () => {
      expect(unwrap(reverse(wrap([1, 2, 3])))).toEqual([3, 2, 1]);
    });
  });
});
