/**
  归并排序

  https://segmentfault.com/a/1190000008866524
  https://segmentfault.com/a/1190000037697664
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  //求出中点
  var middle = Math.floor(arr.length / 2)

  //分割数组
  var left = arr.slice(0, middle)
  var right = arr.slice(middle)

  return _merge(mergeSort(left), mergeSort(right))
}

function _merge(leftArr, rightArr) {
  var result = []

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }

  return result.concat(leftArr).concat(rightArr)
}

describe('归并排序', function () {
  it('case 1', function () {
    const r = mergeSort([85, 24, 63, 45, 17, 31, 96, 50])
    const anwser = [17, 24, 31, 45, 50, 63, 85, 96]
    for (let i = 0; i < r.length; i++) {
      r[i].should.to.equals(anwser[i])
    }
  })
  it('case 2', function () {
    const r = mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
    const anwser = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < r.length; i++) {
      r[i].should.to.equals(anwser[i])
    }
  })
})
