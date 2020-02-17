import { $SourceIterable, $ResultIterable } from '../../types/$iterable';

// curried

// prettier-ignore
declare function $splitOnSubseq(
  separatorSubseq: $SourceIterable<string>,
  compareEquality?: (value: string, item: string) => boolean,
): (source: string) => $ResultIterable<string>;

declare function $splitOnSubseq(
  separatorSubseq: $SourceIterable<any>,
): <T>(source: $SourceIterable<T>) => $ResultIterable<$ResultIterable<T>>;

declare function $splitOnSubseq<V, T>(
  separatorSubseq: $SourceIterable<V>,
  compareEquality: (value: V, item: T) => boolean,
): (source: $SourceIterable<T>) => $ResultIterable<$ResultIterable<T>>;

// noncurried

// prettier-ignore
declare function $splitOnSubseq(
  separatorSubseq: $SourceIterable<string>,
  compareEquality: (value: string, item: string) => boolean,
  source: string
): $ResultIterable<string>;

// prettier-ignore
declare function $splitOnSubseq(
  separatorSubseq: $SourceIterable<string>,
  source: string
): $ResultIterable<string>;

declare function $splitOnSubseq<V, T>(
  separatorSubseq: $SourceIterable<V>,
  compareEquality: (value: V, item: T) => boolean,
  source: $SourceIterable<T>,
): $ResultIterable<$ResultIterable<T>>;

declare function $splitOnSubseq<T>(
  separatorSubseq: $SourceIterable<any>,
  source: $SourceIterable<T>,
): $ResultIterable<$ResultIterable<T>>;

export default $splitOnSubseq;
