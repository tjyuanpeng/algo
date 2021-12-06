/**
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

let longestPalindrome = function (s) {
  const len = s.length
  const dp = new Array(len).fill(false)
  let str = ''

  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1])) {
        dp[i] = true
        let temp = s.substring(i, j + 1)
        str = temp.length >= str.length ? temp : str
      } else {
        dp[i] = false
      }
    }
  }

  return str
}

describe('最长回文子串', function () {
  it('babad', function () {
    const r = longestPalindrome('babad')
    r.should.to.equal('aba')
  })
  it('cbbd', function () {
    const r = longestPalindrome('cbbd')
    r.should.to.equal('bb')
  })
  it('a', function () {
    const r = longestPalindrome('a')
    r.should.to.equal('a')
  })
  it('ac', function () {
    const r = longestPalindrome('ac')
    r.should.to.equal('c')
  })
})
