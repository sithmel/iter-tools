/**
 * @generated-from ./$some.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { some, asyncSome } from '../..'
describe('some', () => {
  it('returns true if at least one item is true', () => {
    expect(some(n => n % 2 === 0, [1, 2, 3, 4, 5, 6])).toBe(true)
  })
  it('returns false if all items are false', () => {
    expect(some(n => n % 2 === 0, [1, 3, 3, 7, 5, 1])).toBe(false)
  })
  it('returns false if there are no items', () => {
    expect(some(n => n % 2 === 0, null)).toBe(false)
  })
})
