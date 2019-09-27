/**
 * @generated-from ./$iterable-includes_.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncWindow } from '../$window/async-window';
import asyncToAnySubseq from '../../internal/async-to-any-subseq';
import { iterableStartsWith_ } from '../$starts-with_/iterable-starts-with_';
const startsWithConfig = {
  any: true,
  subseq: true,
};
export async function asyncIterableIncludes_(iterable, config, value) {
  const subseqs = await asyncToAnySubseq(config, value);
  const maxMatchLength = subseqs.reduce((max, { length }) => Math.max(max, length), 1);
  let hasItems = false;

  for await (const buffer of asyncWindow(iterable, maxMatchLength)) {
    if (iterableStartsWith_(buffer, startsWithConfig, subseqs)) {
      return true;
    }

    hasItems = true;
  }

  return !hasItems && !!subseqs.find(subseq => !subseq.length);
}
