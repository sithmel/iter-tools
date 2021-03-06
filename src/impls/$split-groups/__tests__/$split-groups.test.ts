import { $, $async, $await, $Promise } from '../../../../generate/async.macro.cjs';
import { $awaitError } from '../../../../generate/test.macro.cjs';

import { $splitGroups } from 'iter-tools-es';
import { $wrap, $unwrap, $unwrapDeep } from '../../../test/$helpers.js';

$async;
function identity<T>(value: T): $Promise<T> {
  return value;
}

describe($`splitGroups`, () => {
  describe('when source is empty', () => {
    it(
      'yields no groups',
      $async(() => {
        expect($await($unwrapDeep($splitGroups(identity, null)))).toEqual([]);
        expect($await($unwrapDeep($splitGroups(identity, undefined)))).toEqual([]);
        expect($await($unwrapDeep($splitGroups(identity, $wrap([]))))).toEqual([]);
      }),
    );
  });

  describe('when values from source cannot be grouped', () => {
    it(
      'yields a group for each value',
      $async(() => {
        expect(
          $await(
            $unwrapDeep(
              $splitGroups(
                $async((_: number, i: number) => i),
                $wrap([0, 0, 0]),
              ),
            ),
          ),
        ).toEqual([
          [0, [0]],
          [1, [0]],
          [2, [0]],
        ]);
      }),
    );
  });

  describe('when source contains subsequent values belonging to the same group', () => {
    it(
      'coalesces values into groups',
      $async(() => {
        const lowerCase = $async((value: string) => value.toLowerCase());
        expect($await($unwrapDeep($splitGroups(lowerCase, 'AaA')))).toEqual([
          ['a', ['A', 'a', 'A']],
        ]);
        expect($await($unwrapDeep($splitGroups(lowerCase, 'baA')))).toEqual([
          ['b', ['b']],
          ['a', ['a', 'A']],
        ]);
      }),
    );
  });

  describe($`when getKey is omitted`, () => {
    it(
      'coalesces values into groups',
      $async(() => {
        expect($await($unwrapDeep($splitGroups('aaa')))).toEqual([['a', ['a', 'a', 'a']]]);
        expect($await($unwrapDeep($splitGroups('bbabb')))).toEqual([
          ['b', ['b', 'b']],
          ['a', ['a']],
          ['b', ['b', 'b']],
        ]);
      }),
    );
  });

  describe('when groups are consumed out of order', () => {
    it(
      'throws',
      $async(() => {
        const iter = $splitGroups(identity, 'AB');
        const [, As] = $await(iter.next()).value;
        const [, Bs] = $await(iter.next()).value;

        $unwrap(Bs);

        expect($awaitError($unwrap(As))).toMatchSnapshot();
      }),
    );
  });
});
