/**
 * @generated-from ./$helpers.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { isIterable } from '../internal/iterable';
export function unwrapDeep(iterable) {
  const items = [];

  for (const item of iterable) {
    if (typeof item !== 'string' && isIterable(item)) {
      items.push(unwrapDeep(item));
    } else {
      items.push(item);
    }
  }

  return items;
}
