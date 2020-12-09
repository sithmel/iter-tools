import { AsyncSourceIterable } from '../../types/async-iterable';

declare function __method__<T>(
  iterable: AsyncSourceIterable<T>,
): Promise<T>;

export { __method__ };
