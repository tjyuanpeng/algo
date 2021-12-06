/**
给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。

如果可以完成上述分割，则返回 true ；否则，返回 false 。

示例 1：

输入: [1,2,3,3,4,5]
输出: True
解释:
你可以分割出这样两个连续子序列 : 
1, 2, 3
3, 4, 5
示例 2：

输入: [1,2,3,3,4,4,5,5]
输出: True
解释:
你可以分割出这样两个连续子序列 : 
1, 2, 3, 4, 5
3, 4, 5
示例 3：

输入: [1,2,3,4,4,5]
输出: False
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const isPossible = function (nums) {
  // 最大的数字
  let max = nums[nums.length - 1]

  // arr：存储原数组中数字每个数字出现的次数
  let arr = new Array(max + 2).fill(0)

  // tail：存储以数字num结尾的且符合题意的连续子序列个数
  let tail = new Array(max + 2).fill(0)

  for (let num of nums) {
    arr[num]++
  }

  for (let num of nums) {
    if (arr[num] === 0) {
      continue
    }
    arr[num]--

    if (tail[num - 1] > 0) {
      tail[num - 1]--
      tail[num]++
    } else if (arr[num + 1] > 0 && arr[num + 2] > 0) {
      arr[num + 1]--
      arr[num + 2]--
      tail[num + 2]++
    } else {
      return false
    }
  }

  return true
}

describe('分割数组为连续子序列', function () {
  it('[1,2,3,3,4,5]', function () {
    const r = isPossible([1, 2, 3, 3, 4, 5])
    r.should.to.equal(true)
  })
  it('[1,2,3,3,4,4,5,5]', function () {
    const r = isPossible([1, 2, 3, 3, 4, 4, 5, 5])
    r.should.to.equal(true)
  })
  it('[1,2,3,4,4,5]', function () {
    const r = isPossible([1, 2, 3, 4, 4, 5])
    r.should.to.equal(false)
  })
})
