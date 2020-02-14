/**
 * @generated-from ./$iterable-equal.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncZipAll } from '../../$zip-all/async-zip-all';
import { asyncIterableIncludesAny } from '../../$includes-any/internal/async-iterable-includes-any';
import { asyncAllEqual } from './async-all-equal';
const none = {};
const zipAllConfig = {
  filler: none,
};
export async function asyncIterableEqual(iterables, equals) {
  for await (const values of asyncZipAll(iterables, zipAllConfig)) {
    if (
      (await asyncIterableIncludesAny(values, [none])) ||
      !(await asyncAllEqual(values, equals))
    ) {
      return false;
    }
  }

  return true;
}
