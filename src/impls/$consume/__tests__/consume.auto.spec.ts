/**
 * @generated-from ./consume.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { consume } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('consume', () => {
  describe('when iterable is empty', () => {
    it('does not error', () => {
      expect(consume(null)).toBe(undefined);
      expect(consume(undefined)).toBe(undefined);
      expect(consume(wrap([]))).toBe(undefined);
    });
  });

  describe('when consuming an iterable has side effects', () => {
    it('the effects are triggered', () => {
      const arr: Array<number> = [];

      expect(
        consume(
          (function* () {
            arr.push(1);
            yield;
            arr.push(2);
            yield;
            arr.push(3);
          })(),
        ),
      ).toBe(undefined);
      expect(arr).toEqual([1, 2, 3]);
    });
  });
});
