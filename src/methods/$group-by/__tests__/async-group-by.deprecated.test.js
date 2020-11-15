/**
 * @generated-from ./$group-by.deprecated.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncGroupBy } from '../../..';
import { asyncUnwrapDeep } from '../../../test/async-helpers';

describe('asyncGroupBy (deprecated)', () => {
  it('returns source values grouped by identity', async () => {
    const source = 'ABBAAC';
    const result = [['A', ['A']], ['B', ['B', 'B']], ['A', ['A', 'A']], ['C', ['C']]];
    expect(await asyncUnwrapDeep(asyncGroupBy(null, source))).toEqual(result);
    expect(await asyncUnwrapDeep(asyncGroupBy(null, source))).toEqual(result);
    expect(console.warn).callsMatchSnapshot();
  });
});
