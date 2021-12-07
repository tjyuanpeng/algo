/**

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  var a = 1
  var b = 2
  var temp = 0
  for (var i = 3; i <= n; i++) {
    temp = a
    a = b
    b = temp + a
  }
  return b
}

describe('爬楼梯问题', function () {
  it('1层有1种方法', function () {
    const r = climbStairs(1)
    r.should.to.equal(1)
  })
  it('2层有2种方法', function () {
    const r = climbStairs(2)
    r.should.to.equal(2)
  })
  it('3层有3种方法', function () {
    const r = climbStairs(3)
    r.should.to.equal(3)
  })
  it('4层有5种方法', function () {
    const r = climbStairs(4)
    r.should.to.equal(5)
  })
  it('5层有8种方法', function () {
    const r = climbStairs(5)
    r.should.to.equal(8)
  })
  it('19层有6765种方法', function () {
    const r = climbStairs(19)
    r.should.to.equal(6765)
  })
})
