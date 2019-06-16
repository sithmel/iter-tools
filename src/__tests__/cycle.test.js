/**
 * @generated-from ./$cycle.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { cycle, range } from '../..'
describe('cycle', () => {
  it('return infinite cycle', () => {
    const iter = cycle([1, 2, 3])[Symbol.iterator]()
    expect(iter.next()).toEqual({
      value: 1,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 2,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 3,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 1,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 2,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 3,
      done: false
    })
  })
  it('return infinite cycle (from iterator)', () => {
    const iter = cycle(range(3))[Symbol.iterator]()
    expect(iter.next()).toEqual({
      value: 0,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 1,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 2,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 0,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 1,
      done: false
    })
    expect(iter.next()).toEqual({
      value: 2,
      done: false
    })
  })
  it('can be reused', () => {
    const myCycle = cycle(range(3))
    const iter1 = myCycle[Symbol.iterator]()
    expect(iter1.next()).toEqual({
      value: 0,
      done: false
    })
    expect(iter1.next()).toEqual({
      value: 1,
      done: false
    })
    const iter2 = myCycle[Symbol.iterator]()
    expect(iter2.next()).toEqual({
      value: 0,
      done: false
    })
    expect(iter2.next()).toEqual({
      value: 1,
      done: false
    })
  })
})
