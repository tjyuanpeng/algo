/**
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

let permute = function (nums) {
  // 使用一个数组保存所有可能的全排列
  let res = []
  if (nums.length === 0) {
    return res
  }

  let used = {}
  let path = []

  dfs(nums, nums.length, 0, path, used, res)

  return res
}

let dfs = function (nums, len, depth, path, used, res) {
  // console.log(depth, path, used)
  // 所有数都填完了
  if (depth === len) {
    res.push([...path])
    return
  }
  for (let i = 0; i < len; i++) {
    if (used[i]) {
      continue
    }

    // 动态维护数组
    path.push(nums[i])
    used[i] = true

    // 继续递归填下一个数
    dfs(nums, len, depth + 1, path, used, res)

    // 撤销操作
    used[i] = false
    path.pop()
  }
}

describe('全排列问题', function () {
  it('[1,2,3]', function () {
    const s = permute([1, 2, 3])
    const r = arrEquals(s, [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
    r.should.to.equal(true)
  })
  it('[0,1]', function () {
    const s = permute([0, 1])
    const r = arrEquals(s, [
      [0, 1],
      [1, 0],
    ])
    r.should.to.equal(true)
  })
  it('[1]', function () {
    const s = permute([1])
    const r = arrEquals(s, [[1]])
    r.should.to.equal(true)
  })
})

var arrEquals = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i].length !== t[i].length) {
      return false
    }
    for (let j = 0; j < t.length; j++) {
      if (s[i][j] !== t[i][j]) {
        return false
      }
    }
  }
  return true
}
