/**
 * @generated-from ./$split-at.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from './internal/iterable';
import splitBy from './internal/split-by';

function splitAt(index, iterable) {
  return splitBy((item, i) => i >= index, iterable);
}

export default iterableCurry(splitAt, {
  forceSync: true,
});
