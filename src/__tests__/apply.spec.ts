/**
 * @generated-from ./apply.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { apply } from '..';
describe('apply', () => {
  it('passes the function the iterable of arguments provided to it', () => {
    const testFn = jest.fn();
    apply(testFn, [2, 3]);
    expect(testFn).toHaveBeenCalledTimes(1);
    expect(testFn).toHaveBeenLastCalledWith(2, 3);
  });
  it('can be curried', () => {
    const testFn = jest.fn();
    apply(testFn)([2, 3]);
    expect(testFn).toHaveBeenCalledTimes(1);
    expect(testFn).toHaveBeenLastCalledWith(2, 3);
  });
});
