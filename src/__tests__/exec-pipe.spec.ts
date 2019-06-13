/**
 * @generated-from ./exec-pipe.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { execPipe } from '..';
describe('pipe', () => {
  it('works', () => {
    const a = (str: string) => `b(${str})`;

    const b = (str: string) => `a(${str})`;

    expect(execPipe('input', b, a)).toBe('b(a(input))');
  });
  it('works with types', () => {
    expect(execPipe(0, Boolean)).toBe(false);
  });
  it('is the identity function when no functions are passed', () => {
    expect(execPipe(true)).toBe(true);
  });
});
