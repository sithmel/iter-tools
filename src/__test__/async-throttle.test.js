/* eslint-env node, jest */
const { asyncThrottle, asyncIterToArray, range } = require('iter-tools')

describe('asyncThrottle', function () {
  it('throttle the output', async function () {
    const iter = asyncThrottle(10, range(6))
    const t0 = Date.now()
    expect(await asyncIterToArray(iter)).toEqual([0, 1, 2, 3, 4, 5])
    const t1 = Date.now()
    expect(t1 - t0).toBeGreaterThanOrEqual(40)
  })
})