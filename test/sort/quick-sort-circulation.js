/**
  快速排序 - 循环算法
  https://www.jianshu.com/p/f5b157a974b0
  https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/6.quickSort.md
 */

function quickSort(arr, left, right) {
  var len = arr.length
  var left = typeof left !== 'number' ? 0 : left
  var right = typeof right !== 'number' ? len - 1 : right

  if (left < right) {
    var partitionIndex = partition(arr, left, right)

    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}

function partition(arr, left, right) {
  var pivot = left
  var index = left + 1
  for (var i = index; i <= right; i++) {
    // 小于pivot的都放到一边
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }

  // 把pivot放到中间
  // 整个数组从left到right都已经以pivot进行了分组
  // 分组左边 < pivot，分组右边 >= pivot
  swap(arr, pivot, index - 1)

  return index - 1
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

describe('快速排序 - 循环算法', function () {
  it('case 1', function () {
    const r = quickSort([85, 24, 63, 45, 17, 31, 96, 50])
    const anwser = [17, 24, 31, 45, 50, 63, 85, 96]
    for (let i = 0; i < r.length; i++) {
      r[i].should.to.equals(anwser[i])
    }
  })
})
