/**
 * @generated-from ./$fork.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { asyncFork, asyncMap, asyncToArray } from '../..'
import { AsyncOneTwoThreeIterable } from './__framework__/fixtures'

function * _makeIterable () {
  yield 1
  yield 2
  yield 3
}

async function * _asyncMakeIterable () {
  yield 1
  yield 2
  yield 3
}

const asyncMakeIterable = _asyncMakeIterable
describe('asyncFork', () => {
  it('creates an iterable of iterables with the same values as its source', async () => {
    const [a, b, c] = asyncFork(asyncMakeIterable())
    const originalIter = await asyncToArray(asyncMakeIterable())
    expect((await asyncToArray(asyncMap(iter => asyncToArray(iter), [a, b, c])))).toEqual(Array(3).fill(originalIter))
  })
  it('can take a number as first argument', async () => {
    const gen = asyncFork(3, asyncMakeIterable())
    const originalIter = await asyncToArray(asyncMakeIterable())
    expect((await asyncToArray(asyncMap(iter => asyncToArray(iter), gen)))).toEqual(Array(3).fill(originalIter))
  })
  it('can be curried', async () => {
    const gen = asyncFork(3)(asyncMakeIterable())
    const originalIter = await asyncToArray(asyncMakeIterable())
    expect((await asyncToArray(asyncMap(iter => asyncToArray(iter), gen)))).toEqual(Array(3).fill(originalIter))
  })
  it('it does not matter which order the fork iterables are consumed in', async () => {
    const [a, b, c] = asyncFork(asyncMakeIterable())
    const originalIter = await asyncToArray(asyncMakeIterable())
    expect((await asyncToArray(asyncMap(iter => asyncToArray(iter), [c, b, a])))).toEqual(Array(3).fill(originalIter))
  })
  describe('source iterable cleanup', () => {
    it('happens when a fork is exhausted', async () => {
      const oneTwoThree = new AsyncOneTwoThreeIterable()
      const iterableIterator = asyncFork(oneTwoThree)[Symbol.iterator]()
      await asyncToArray(iterableIterator.next().value)
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true)
    })
    it('happens when fork is exhausted and then all forks are exhausted', async () => {
      const oneTwoThree = new AsyncOneTwoThreeIterable()
      const [a, b] = asyncFork(oneTwoThree)
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false)
      await a[Symbol.asyncIterator]().next()
      await a.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false)
      await b[Symbol.asyncIterator]().next()
      await b.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true)
    })
    it('happens when all forks are exhausted then fork is exhausted', async () => {
      const oneTwoThree = new AsyncOneTwoThreeIterable()
      const iterableIterator = asyncFork(oneTwoThree)[Symbol.iterator]()
      const a = iterableIterator.next().value
      await a[Symbol.asyncIterator]().next()
      await a.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false)
      const b = iterableIterator.next().value
      await b[Symbol.asyncIterator]().next()
      await b.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false)
      iterableIterator.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true)
    })
    it('happens even when a fork is closed without being used', async () => {
      const oneTwoThree = new AsyncOneTwoThreeIterable()
      const [a, b] = asyncFork(oneTwoThree)
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false)
      await a.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false)
      await b.return()
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true)
    })
  })
})
