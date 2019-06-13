import asyncMapParallel from './async-map-parallel';
import { asyncIterableCurry } from './internal/async-iterable';

async function* asyncFlatMapParallel(concurrency = 4, func, iterable) {
  for await (const item of asyncMapParallel(concurrency, func, iterable)) {
    yield* item;
  }
}

export default asyncIterableCurry(asyncFlatMapParallel);
