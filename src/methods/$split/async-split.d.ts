/**
 * @generated-from ./$split.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { GeneratorIterator as SyncGeneratorIterator } from '../../internal/iterable';
import { AsyncInputIterable, AsyncGeneratorIterator } from '../../internal/async-iterable';
declare function asyncSplit<T = any>(
  iterable: AsyncInputIterable<T>,
): AsyncGeneratorIterator<SyncGeneratorIterator<T>>;
declare function asyncSplit(iterable: string): string;
export default asyncSplit;
