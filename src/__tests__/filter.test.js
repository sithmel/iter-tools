/**
 * @generated-from ./$filter.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { filter, asyncFilter, toArray, asyncToArray, range } from '../..'
describe('filter', () => {
  it('returns filtered iterable', () => {
    const iter = filter(item => item % 2 === 0, [1, 2, 3, 4, 5, 6])
    expect(toArray(iter)).toEqual([2, 4, 6])
  })
  it('returns filtered iterable from iterable', () => {
    const iter = filter(item => item % 2 === 0, range({
      start: 1,
      end: 7
    }))
    expect(toArray(iter)).toEqual([2, 4, 6])
  })
  it('returns filtered iterable (curried version)', () => {
    const iter = filter(item => item % 2 === 0)
    expect(toArray(iter(range({
      start: 1,
      end: 7
    })))).toEqual([2, 4, 6])
  })
  it('returns empty iterable from null', () => {
    expect(toArray(filter(item => item, null))).toEqual([])
  })
})
