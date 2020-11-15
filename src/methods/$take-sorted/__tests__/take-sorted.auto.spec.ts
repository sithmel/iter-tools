/**
 * @generated-from ./take-sorted.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { takeSorted } from '../../..';
import { wrap, unwrap } from '../../../test/helpers';

describe('takeSorted', () => {
  it('yields a sorted iterable if no number is specified', () => {
    const smallest3 = takeSorted(wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
    expect(unwrap(smallest3)).toEqual([4, 6, 12, 44, 66, 77, 97, 98, 99]);
  });

  it('yields n sorted items from the iterable', () => {
    const smallest3 = takeSorted(3, wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
    expect(unwrap(smallest3)).toEqual([97, 98, 99]);
    const smallest1 = takeSorted(1, wrap([99, 12, 4, 6, 97, 44, 66, 77, 98]));
    expect(unwrap(smallest1)).toEqual([99]);
  });

  it('yields items from the iterable sorted with a comparator', () => {
    const smallest2 = takeSorted(2, (a, b) => a.length - b.length, [
      'abc',
      'a',
      'abcd',
      'abcd',
      'abcdef',
      'ab',
    ]);
    expect(unwrap(smallest2)).toEqual(['abcd', 'abcdef']);
  });
});
