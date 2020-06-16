function chunkArrayInGroups(arr, size) {
  const resultArr = []

  for (let i = 0; i < arr.length; i += size) {
    resultArr.push(arr.slice(i, i + size))
  }

  return resultArr
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
