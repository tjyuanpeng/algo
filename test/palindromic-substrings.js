/**
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

示例 1：

输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindromic-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

let countSubstrings = function (s) {
  const len = s.length
  let count = 0
  const dp = new Array(len).fill(false)

  for (let j = 0; j < len; j++) {
    // console.log(`【${s[j]}】`)
    for (let i = 0; i <= j; i++) {
      // console.log(`[${s[i]}]`, dp.map(v => (v ? 1 : 0)).join(' '))
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1])) {
        dp[i] = true
        count++
      } else {
        dp[i] = false
      }
      // console.log(`end`, dp.map(v => (v ? 1 : 0)).join(' '))
    }
    // console.log()
  }

  return count
}

let countSubstrings2 = function (s) {
  const len = s.length
  let count = 0
  const dp = new Array(len)

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false)
  }
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] == s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true
        count++
      }
    }
  }
  return count
}

describe('回文子串', function () {
  it('abc', function () {
    const r = countSubstrings('abc')
    r.should.to.equal(3)
  })
  it('aaa', function () {
    const r = countSubstrings('aaa')
    r.should.to.equal(6)
  })
  it('fdsklf', function () {
    const r = countSubstrings('fdsklf')
    r.should.to.equal(6)
  })
  it('3a2b2c', function () {
    const r = countSubstrings2('3a2b2c')
    r.should.to.equal(7)
  })
  it('abcdcba', function () {
    const r = countSubstrings('abcdcba')
    r.should.to.equal(10)
  })
})
