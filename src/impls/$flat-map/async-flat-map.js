/**
 * @generated-from ./$flat-map.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { asyncMap } from '../$map/async-map.js';

export async function* asyncFlatMap(source, func) {
  for await (const item of asyncMap(source, func)) {
    yield* item;
  }
}

export default /*#__PURE__*/ asyncIterableCurry(asyncFlatMap);