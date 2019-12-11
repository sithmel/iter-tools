/**
 * @generated-from ./$iterator-proxy.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { AsyncIteratorProxy } from '../async-iterator-proxy';
describe('AsyncIteratorProxy', () => {
  it('calls a return method if it exists', async () => {
    let returned = false;
    const proxy = new AsyncIteratorProxy({
      next: () => ({
        value: undefined,
        done: true,
      }),
      return: () => {
        returned = true;
        return {
          value: undefined,
          done: true,
        };
      },
    });
    await proxy.return();
    expect(returned).toBe(true);
  });
  it('calls a throw method if it exists', async () => {
    let threw = false;
    const proxy = new AsyncIteratorProxy({
      next: () => ({
        value: undefined,
        done: true,
      }),
      throw: () => {
        threw = true;
        return {
          value: undefined,
          done: true,
        };
      },
    });
    await proxy.throw();
    expect(threw).toBe(true);
  });
  it('returns done after its source is done', async () => {
    let i = -1;
    const source = {
      next() {
        i++;
        return {
          value: i === 3 ? undefined : i,
          done: i === 3,
        };
      },
    };
    const proxy = new AsyncIteratorProxy(source);
    expect(await proxy.next()).toEqual({
      value: 0,
      done: false,
    });
    expect(await proxy.next()).toEqual({
      value: 1,
      done: false,
    });
    expect(await proxy.next()).toEqual({
      value: 2,
      done: false,
    });
    expect(await proxy.next()).toEqual({
      value: undefined,
      done: true,
    });
    expect(await proxy.next()).toEqual({
      value: undefined,
      done: true,
    });
  });
  it('returns the value passed to return', async () => {
    let i = -1;
    const source = {
      next() {
        i++;
        return {
          value: i === 3 ? undefined : i,
          done: i === 1,
        };
      },
    };
    const proxy = new AsyncIteratorProxy(source);
    expect(await proxy.next()).toEqual({
      value: 0,
      done: false,
    });
    expect(await proxy.return()).toEqual({
      value: undefined,
      done: true,
    });
    expect(await proxy.return(-1)).toEqual({
      value: -1,
      done: true,
    });
    expect(await proxy.return(-2)).toEqual({
      value: -2,
      done: true,
    });
    expect(await proxy.return()).toEqual({
      value: undefined,
      done: true,
    });
    expect(await proxy.next()).toEqual({
      value: undefined,
      done: true,
    });
  });
  it('allows throw to be caught', async () => {
    let i = 0;
    let caught = false;
    const source = new (class {
      next() {
        return {
          value: i++,
          done: false,
        };
      }

      throw() {
        const item = caught
          ? {
              value: undefined,
              done: true,
            }
          : {
              value: i++,
              done: false,
            };
        caught = true;
        return item;
      }
    })();
    const proxy = new AsyncIteratorProxy(source);
    expect(await proxy.next()).toEqual({
      value: 0,
      done: false,
    });
    expect(await proxy.throw()).toEqual({
      value: 1,
      done: false,
    });
    expect(await proxy.next()).toEqual({
      value: 2,
      done: false,
    });
    expect(await proxy.throw()).toEqual({
      value: undefined,
      done: true,
    });
    expect(await proxy.next()).toEqual({
      value: undefined,
      done: true,
    });
  });
});