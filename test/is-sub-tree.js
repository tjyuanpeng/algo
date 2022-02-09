/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A === null || B === null) {
    return false
  }
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function dfs(r, b) {
  if (b === null) {
    return true
  }
  if (r === null) {
    return false
  }
  return r.val === b.val && dfs(r.left, b.left) && dfs(r.right, b.right)
}

describe('是否为树的子结构', function () {
  it('A=[4, 2, 3, 4, 5, 6, 7, 8, 9], B=[4, 8, 9]', function () {
    const A = createTreeNode([4, 2, 3, 4, 5, 6, 7, 8, 9])
    const B = createTreeNode([4, 8, 9])
    const r = isSubStructure(A, B)
    r.should.to.equal(true)
  })
})

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
function createTreeNode(arr, i = 1) {
  if (!arr[i - 1]) {
    return null
  }
  const root = new TreeNode(arr[i - 1])
  if (arr[2 * i - 1]) {
    root.left = createTreeNode(arr, 2 * i)
  }
  if (arr[2 * i]) {
    root.right = createTreeNode(arr, 2 * i + 1)
  }

  return root
}
