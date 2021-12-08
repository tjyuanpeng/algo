/**
数字 n 代表生成括号的对数，请你设计一个函数
用于能够生成所有可能的并且 有效的 括号组合。

示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：
输入：n = 1
输出：["()"]
 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const generateParenthesis = n => {
  const res = []

  /**
   * @param String path 已经生成的路径
   * @param Number left 左括号数量
   * @param Number right 右括号数量
   * @returns
   */
  const dfs = (path, left, right) => {
    // 肯定不合法，提前结束
    if (left > n || left < right) {
      return
    }

    // 到达结束条件
    if (left + right === 2 * n) {
      res.push(path)
      return
    }

    // 选择
    dfs(path + '(', left + 1, right)
    dfs(path + ')', left, right + 1)
  }

  dfs('', 0, 0)

  return res
}

describe('括号生成', function () {
  it('3', function () {
    const s = generateParenthesis(3)
    const r = arrEquals(s, ['((()))', '(()())', '(())()', '()(())', '()()()'])
    r.should.to.equal(true)
  })
  it('1', function () {
    const s = generateParenthesis(1)
    const r = arrEquals(s, ['()'])
    r.should.to.equal(true)
  })
})

var arrEquals = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false
    }
  }
  return true
}
