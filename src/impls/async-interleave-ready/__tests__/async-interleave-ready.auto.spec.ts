/**
 * @generated-from ./async-interleave-ready.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncInterleaveReady, asyncToArray } from 'iter-tools-es';

import { delay } from '../../../internal/delay.js';

describe('asyncInterleaveReady', () => {
  it('can use the return value of canTakeAny to interleave by promise readiness', async () => {
    const a = (async function* () {
      await delay(10);
      yield 1;
      await delay(30);
      yield 2;
    })();

    const b = (async function* () {
      await delay(20);
      yield 3;
      await delay(10);
      yield 4;
    })();

    expect(await asyncToArray(asyncInterleaveReady(a, b))).toEqual([1, 3, 4, 2]);
  });
});
