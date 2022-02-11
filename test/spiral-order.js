var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return []
  }

  const ret = []
  let x = 0
  let endx = matrix[0].length - 1
  let y = 0
  let endy = matrix.length - 1
  while (1) {
    // 从左到右
    for (let i = x; i <= endx; i++) {
      ret.push(matrix[y][i])
    }
    y++
    if (y > endy) {
      break
    }

    // 从上到下
    for (let i = y; i <= endy; i++) {
      ret.push(matrix[i][endx])
    }
    endx--
    if (x > endx) {
      break
    }

    // 从右到左
    for (let i = endx; i >= x; i--) {
      ret.push(matrix[endy][i])
    }
    endy--
    if (y > endy) {
      break
    }

    // 从下到上
    for (let i = endy; i >= y; i--) {
      ret.push(matrix[i][x])
    }
    x++
    if (x > endx) {
      break
    }
  }

  return ret
}

describe('顺时针打印矩阵', function () {
  it('[[1,2,3],[4,5,6],[7,8,9]]', function () {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const ret = spiralOrder(matrix)
    const r = eq(ret, [1, 2, 3, 6, 9, 8, 7, 4, 5])
    r.should.to.equal(true)
  })
})

function eq(l1, l2) {
  if (l1.length !== l2.length) {
    return false
  }
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) {
      return false
    }
  }
  return true
}
