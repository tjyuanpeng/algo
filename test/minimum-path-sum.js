/**
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1：

输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// var minPathSum = grid => {
//   const row = grid.length
//   const col = grid[0].length

//   // init dp
//   // let dp = new Array(row).fill(0)
//   // dp = dp.map(() => {
//   //   return new Array(col).fill(0)
//   // })
//   let dp = Array.from(Array(row), () => Array(col).fill(0))

//   dp[0][0] = grid[0][0]
//   console.log(dp)

//   for (let i = 1; i < row; i++) {
//     dp[i][0] = dp[i - 1][0] + grid[i][0]
//   }

//   for (let j = 1; j < col; j++) {
//     dp[0][j] = dp[0][j - 1] + grid[0][j]
//   }

//   for (let i = 1; i < row; i++) {
//     for (let j = 1; j < col; j++) {
//       dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
//     }
//   }
//   return dp[row - 1][col - 1]
// }

var minPathSum = grid => {
  const row = grid.length
  const col = grid[0].length
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0]
  }
  for (let j = 1; j < col; j++) {
    grid[0][j] += grid[0][j - 1]
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
  }
  return grid[row - 1][col - 1]
}

describe('最小路径和', function () {
  it('[[1,3,1],[1,5,1],[4,2,1]]', function () {
    const r = minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
    r.should.to.equal(7)
  })
  it('[[1,2,3],[4,5,6]]', function () {
    const r = minPathSum([
      [1, 2, 3],
      [4, 5, 6],
    ])
    r.should.to.equal(12)
  })
})
