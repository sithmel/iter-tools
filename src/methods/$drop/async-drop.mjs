/**
 * @generated-from ./$drop.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';

export async function* asyncDrop(iterable, n) {
  let i = 0;
  for await (const item of iterable) {
    if (i++ >= n) yield item;
  }
}

export default asyncIterableCurry(asyncDrop);
