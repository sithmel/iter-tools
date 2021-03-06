import { $async, $await } from '../../../generate/async.macro.cjs';

import { $iterableCurry } from '../../internal/$iterable.js';
import { $__interleave } from '../$interleave/$interleave.js';

$async;
function* $byComparison({ compare }, all, ...peekrs) {
  let candidate;
  while (!all.done) {
    candidate = all.value;
    for (const peekr of peekrs) {
      if (!peekr.done && compare(peekr.value, candidate.value) < 0) {
        candidate = peekr;
      }
    }

    yield candidate.value;
    $await(candidate.advance());
  }
}

export function $__collate(sources, compare) {
  return $__interleave(sources, $byComparison, { compare });
}

export const $collate = /*#__PURE__*/ $iterableCurry($__collate, {
  variadic: true,
});
