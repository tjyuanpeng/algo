/**
  快速排序
 */

var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }

  const less = []
  const greater = []
  const pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return quickSort(less).concat(pivot).concat(quickSort(greater))
}

describe('快速排序', function () {
  it('case 1', function () {
    const r = quickSort([85, 24, 63, 45, 17, 31, 96, 50])
    const anwser = [17, 24, 31, 45, 50, 63, 85, 96]
    for (let i = 0; i < r.length; i++) {
      r[i].should.to.equals(anwser[i])
    }
  })
  it('case 2', function () {
    const r = quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
    const anwser = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < r.length; i++) {
      r[i].should.to.equals(anwser[i])
    }
  })
})
