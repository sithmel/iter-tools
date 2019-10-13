/**
 * @generated-from ./repeat.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { repeat, slice } from '../../..';
describe('repeat', () => {
  it('return simple repeat', () => {
    expect(Array.from(repeat(3, 'x'))).toEqual(['x', 'x', 'x']);
  });
  it('can be reused', () => {
    const myRepeat = repeat(3, 'x');
    expect(Array.from(myRepeat)).toEqual(['x', 'x', 'x']);
    expect(Array.from(myRepeat)).toEqual(['x', 'x', 'x']);
  });
  it('return infinite repeat', () => {
    expect(Array.from(slice(0, 4, repeat('x')))).toEqual(['x', 'x', 'x', 'x']);
  });
});
