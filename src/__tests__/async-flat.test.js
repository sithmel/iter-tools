/**
 * @generated-from ./$flat.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { asyncFlat, asyncToArray } from '../..'
describe('asyncFlat', () => {
  it('flats iterable', async () => {
    const iter = asyncFlat(1, [[1, 2], [3, 4], [5]])
    expect((await asyncToArray(iter))).toEqual([1, 2, 3, 4, 5])
  })
  it('flats iterable (default one level)', async () => {
    const iter = asyncFlat([[1, 2], [3, 4], [5]])
    expect((await asyncToArray(iter))).toEqual([1, 2, 3, 4, 5])
  })
  it('flats iterable, curried', async () => {
    const iter = asyncFlat(1)([[1, 2], [3, 4], [5]])
    expect((await asyncToArray(iter))).toEqual([1, 2, 3, 4, 5])
  })
  it('flats iterable, curried (default one level)', async () => {
    const iter = asyncFlat()([[1, 2], [3, 4], [5]])
    expect((await asyncToArray(iter))).toEqual([1, 2, 3, 4, 5])
  })
  it('flats iterable depth 0', async () => {
    const iter = asyncFlat(0, [[1, 2], [3, 4], [5]])
    expect((await asyncToArray(iter))).toEqual([[1, 2], [3, 4], [5]])
  })
  it('flats iterable depth 2', async () => {
    const iter = asyncFlat(2, [[1, 2], [3, [4, 5]], [[6]]])
    expect((await asyncToArray(iter))).toEqual([1, 2, 3, 4, 5, 6])
  })
  it('flats strings', async () => {
    const iter = asyncFlat(2, [['a', 'b'], ['c', ['d', 'e']], [['f']]])
    expect((await asyncToArray(iter))).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  })
  it('does not expand string', async () => {
    const iter = asyncFlat(2, ['foo', ['bar', ['baz']]])
    expect((await asyncToArray(iter))).toEqual(['foo', 'bar', 'baz'])
  })
  it('flats using custom function', async () => {
    const iter = asyncFlat(iter => !(typeof iter === 'string' && iter.length === 1), Infinity, [['a', 'b'], ['c', ['d', 'e']], [['fghi']]])
    expect((await asyncToArray(iter))).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])
  })
  it('flats using custom function (using a promise)', async () => {
    const iter = asyncFlat(async iter => !(typeof iter === 'string' && iter.length === 1), Infinity, [['a', 'b'], ['c', ['d', 'e']], [['fghi']]])
    expect((await asyncToArray(iter))).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])
  })
})
