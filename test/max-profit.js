/**
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// var maxProfit = function (prices) {
//   let maxProfit = 0
//   let minPrice = prices[0]
//   for (const p of prices) {
//     /**
//      * 找到最小价格
//      * 以最小价格来计算收益，也就是当前价格和最小价格的差
//      * 同时保存最大收益的值，因为当前收益可能不是最大的收益
//      */
//     minPrice = Math.min(minPrice, p)
//     maxProfit = Math.max(maxProfit, p - minPrice)
//   }
//   return maxProfit
// }

let maxProfit = prices => {
  let dp = Array.from(Array(prices.length), () => Array(2).fill(0))

  // dp[i][0] 表示第i天 持有 股票的收益
  // dp[i][1] 表示第i天 不持有 股票的收益
  dp[0][0] = 0 - prices[0]
  dp[0][1] = 0

  for (let i = 1; i < prices.length; i++) {
    // 昨天持有的收益
    // 0 - 价格，买入
    dp[i][0] = Math.max(dp[i - 1][0], 0 - prices[i])

    // 昨天持有的状态收益 + 当前价格，卖出
    // 昨天不持有的收益
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
  }

  // 最后一天不持有的收益
  return dp[prices.length - 1][1]
}

describe('股票最大收益', function () {
  it('[7,1,5,3,6,4]', function () {
    const r = maxProfit([7, 1, 5, 3, 6, 4])
    r.should.to.equal(5)
  })
  it('[7,6,4,3,1]', function () {
    const r = maxProfit([7, 6, 4, 3, 1])
    r.should.to.equal(0)
  })
})
