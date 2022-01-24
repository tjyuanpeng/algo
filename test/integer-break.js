/**
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。

示例 2:
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
说明: 你可以假设 n 不小于 2 且不大于 58。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/integer-break
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n < 2) {
    return 0
  } else if (n === 2) {
    return 1
  } else if (n === 3) {
    return 2
  }

  const dp = Array(n + 1).fill(0)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3

  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      dp[i] = Math.max(dp[j] * dp[i - j], dp[i])
    }
  }

  return dp[n]
}

describe('整数拆分', function () {
  it('2', function () {
    const r = integerBreak(2)
    r.should.to.equal(1)
  })
  it('3', function () {
    const r = integerBreak(3)
    r.should.to.equal(2)
  })
  it('4', function () {
    const r = integerBreak(4)
    r.should.to.equal(4)
  })
  it('10', function () {
    const r = integerBreak(10)
    r.should.to.equal(36)
  })
})
