/**
 * @generated-from ./$round-robin.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { roundRobin } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('roundRobin', () => {
  it('starts at 0 with step 1 if given no config arguments', () => {
    const iter = roundRobin(wrap([1, 4, 7]), wrap([2, 5, 8]), wrap([3, 6, 9]));
    expect(unwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable step', () => {
    const iter = roundRobin(2, wrap([1, 4, 7]), wrap([3, 6, 9]), wrap([2, 5, 8]));
    expect(unwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable start and step', () => {
    const iter = roundRobin(1, 2, wrap([2, 5, 8]), wrap([1, 4, 7]), wrap([3, 6, 9]));
    expect(unwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have start and step specified in a config object', () => {
    const iter = roundRobin(
      { start: 1, step: 1 },
      wrap([3, 6, 9]),
      wrap([1, 4, 7]),
      wrap([2, 5, 8]),
    );
    expect(unwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with input iterables of different lengths', () => {
    const iter = roundRobin(wrap([]), wrap([1, 3]), wrap([2]));
    expect(unwrap(iter)).toEqual([1, 2, 3]);
  });

  describe('when step is invalid', () => {
    it('throws', () => {
      expect(() => roundRobin({ step: 0 }, wrap([]))).toThrowErrorMatchingSnapshot();
    });
  });
});
