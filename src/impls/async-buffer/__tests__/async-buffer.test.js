import { asyncBuffer, asyncToArray } from 'iter-tools-es';
import { AsyncIterable } from '../../../types/async-iterable.js';
import { delay } from '../../../internal/delay.js';

function intermittent(): AsyncIterable<number> {
  const sequence = [
    { period: 0, value: 0 },
    { period: 400, value: 1 },
    { period: 0, value: 2 },
  ];

  return {
    async *[Symbol.asyncIterator]() {
      for (const { period, value } of sequence) {
        await delay(period);
        yield value;
      }
    },
  };
}

describe('asyncBuffer', () => {
  it('sanity checks', async () => {
    const iter = intermittent()[Symbol.asyncIterator]();
    const d0 = Date.now();
    await iter.next(); // 0
    await delay(400);

    const d1 = Date.now();
    await iter.next(); // 1
    await delay(400);

    const d2 = Date.now();
    await iter.next(); // 2
    await delay(400);

    const d3 = Date.now();

    expect(d1 - d0).toBeLessThan(700);
    expect(d2 - d1).toBeGreaterThan(700);
    expect(d3 - d2).toBeLessThan(700);
  });

  it('buffers', async () => {
    const iter = asyncBuffer(2, intermittent());
    const d0 = Date.now();
    await iter.next(); // 0
    await delay(400);

    const d1 = Date.now();
    await iter.next(); // 1
    await delay(400);

    const d2 = Date.now();
    await iter.next(); // 2
    await delay(400);

    const d3 = Date.now();

    expect(d1 - d0).toBeLessThan(700);
    expect(d2 - d1).toBeLessThan(700);
    expect(d3 - d2).toBeLessThan(700);
  });

  it('returns all values', async () => {
    const iter = asyncBuffer(2, intermittent());
    expect(await asyncToArray(iter)).toEqual([0, 1, 2]);
  });

  it('buffer using curry', async () => {
    const iter = asyncBuffer(2)(intermittent());
    expect(await asyncToArray(iter)).toEqual([0, 1, 2]);
  });

  it('buffer (bigger then iterable)', async () => {
    const iter = asyncBuffer(10, intermittent());
    expect(await asyncToArray(iter)).toEqual([0, 1, 2]);
  });

  it('throws when buffer size is < 0', () => {
    expect(() => asyncBuffer(-1, intermittent())).toThrowErrorMatchingSnapshot();
  });

  it('throws when buffer size is not a number', () => {
    const n: any = '';
    expect(() => asyncBuffer(n, intermittent())).toThrowErrorMatchingSnapshot();
  });
});
