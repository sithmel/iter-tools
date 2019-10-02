/**
 * @generated-from ./$split-at.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { groupBy } from '../$group-by/group-by';

function* empty() {}

export function* splitAt(source, index) {
  const groupedIter = groupBy(source, (_item, i) => i >= index)[Symbol.iterator]();

  for (let i = 0; i <= 1; i++) {
    const item = groupedIter.next(); // prettier-ignore

    yield item.done ? empty() : item.value[1];
  }
}
export default iterableCurry(splitAt, {
  forceSync: true,
});
