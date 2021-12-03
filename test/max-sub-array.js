/**
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var maxSubArray = function (nums) {
  let max = nums[0]
  let pre = 0
  for (const num of nums) {
    // if (pre > 0) {
    //   pre += num
    // } else {
    //   pre = num
    // }
    /**
     * 当前值，比前面的数的总和都大的情况下
     * 最大子数组和一定是以当前值为基础的子数组
     * 所以应该从当前值开始继续累加最大值
     * 也就是划动窗口到当前值
     */
    pre = Math.max(pre + num, num)
    console.log(pre)
    max = Math.max(max, pre)
  }
  return max
}

describe('最大子数组和', function () {
  it('nums = [-2,1,-3,4,-1,2,1,-5,4]', function () {
    const r = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    r.should.to.equal(6)
  })
  it('nums = [1]', function () {
    const r = maxSubArray([1])
    r.should.to.equal(1)
  })
  it('nums = nums = [5,4,-1,7,8]', function () {
    const r = maxSubArray([5, 4, -1, 7, 8])
    r.should.to.equal(23)
  })
  it('nums = nums = [5,-3,1,7,-2，3]', function () {
    const r = maxSubArray([5, -3, 1, 7, -2, 1])
    r.should.to.equal(10)
  })
})
