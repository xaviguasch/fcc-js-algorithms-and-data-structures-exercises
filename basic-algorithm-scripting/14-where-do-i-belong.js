function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0
  }

  const sortedArr = arr.sort((a, b) => a - b)

  if (sortedArr[sortedArr.length - 1] < num) {
    return sortedArr.length
  }

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) {
      return i
    }
  }
}

console.log(getIndexToIns([5, 3, 20, 3], 5))
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))

console.log(getIndexToIns([2, 5, 10], 15))
