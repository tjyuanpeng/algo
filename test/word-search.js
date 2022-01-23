/**
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length
  const cols = board[0].length
  const visited = Array.from(Array(rows), () => Array(cols).fill(false))

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(board, word, visited, row, col, 0)) {
        return true
      }
    }
  }

  return false
}

function dfs(board, word, visited, row, col, char) {
  if (char === word.length) {
    return true
  }

  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
    return false
  }

  if (word[char] !== board[row][col] || visited[row][col]) {
    return false
  }

  visited[row][col] = true
  const result =
    dfs(board, word, visited, row - 1, col, char + 1) ||
    dfs(board, word, visited, row, col + 1, char + 1) ||
    dfs(board, word, visited, row + 1, col, char + 1) ||
    dfs(board, word, visited, row, col - 1, char + 1)
  visited[row][col] = false

  return result
}

describe('79 单词搜索', function () {
  it('case 1', function () {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ]
    const word = 'ABCCED'
    const r = exist(board, word)
    r.should.to.equal(true)
  })
})
