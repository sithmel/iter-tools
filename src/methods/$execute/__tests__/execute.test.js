/**
 * @generated-from ./$execute.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { execute } from '../../..';
describe('execute', () => {
  it('executes forever', () => {
    const iter = execute(() => 1);
    expect(iter.next()).toEqual({
      value: 1,
      done: false,
    });
    expect(iter.next()).toEqual({
      value: 1,
      done: false,
    });
    expect(iter.next()).toEqual({
      value: 1,
      done: false,
    });
  });
  it('can be passed additional arguments', () => {
    const iter = execute((a, b) => a + b + 1, 4, 6);
    expect(iter.next()).toEqual({
      value: 11,
      done: false,
    });
    expect(iter.next()).toEqual({
      value: 11,
      done: false,
    });
    expect(iter.next()).toEqual({
      value: 11,
      done: false,
    });
  });
});
