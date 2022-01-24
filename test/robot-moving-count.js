/**
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  if (k === 0) {
    return 1
  }

  const visited = Array.from(Array(m), () => Array(n).fill(false))
  return dfs(m, n, k, visited, 0, 0)
}

const dfs = function (m, n, k, visited, row, col) {
  if (row < 0 || row > m - 1 || col < 0 || col > n - 1) {
    return 0
  }
  if (visited[row][col]) {
    return 0
  }
  if (sumDigit(row, col) > k) {
    return 0
  }

  visited[row][col] = true
  let count = 1
  count +=
    dfs(m, n, k, visited, row - 1, col) +
    dfs(m, n, k, visited, row, col + 1) +
    dfs(m, n, k, visited, row + 1, col) +
    dfs(m, n, k, visited, row, col - 1)

  return count
}

const sumDigit = function (row, col) {
  let sum = 0
  let rn = row
  while (rn > 0) {
    sum += rn % 10
    rn = Math.floor(rn / 10)
  }
  let cn = col
  while (cn > 0) {
    sum += cn % 10
    cn = Math.floor(cn / 10)
  }
  return sum
}

describe('offer 13 机器人的运动范围', function () {
  it('case 1', function () {
    const r = movingCount(2, 3, 1)
    r.should.to.equal(3)
  })
  it('case 2', function () {
    const r = movingCount(3, 1, 0)
    r.should.to.equal(1)
  })
  it('case 3', function () {
    const r = movingCount(3, 2, 17)
    r.should.to.equal(6)
  })
})
