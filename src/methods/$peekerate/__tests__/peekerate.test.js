/**
 * @generated-from ./$peekerate.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { peekerate, PeekeratorClass } from '../../..';
import { wrap } from '../../../test/helpers';

describe('peekerate', () => {
  it('creates a peekerator', () => {
    expect(peekerate([])).toBeInstanceOf(PeekeratorClass);
  });

  it('decorates iterator with the current item in the iterable', () => {
    const peekerator = peekerate(wrap([1, 2, 3]));
    const observed = [];

    while (!peekerator.done) {
      const { current, done, value } = peekerator;
      observed.push({ current, done, value });
      peekerator.advance();
    }

    expect(observed).toEqual([
      {
        current: {
          done: false,
          value: 1,
        },
        done: false,
        value: 1,
      },
      {
        current: {
          done: false,
          value: 2,
        },
        done: false,
        value: 2,
      },
      {
        current: {
          done: false,
          value: 3,
        },
        done: false,
        value: 3,
      },
    ]);
  });
});
