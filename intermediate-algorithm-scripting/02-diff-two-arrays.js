function diffArray(arr1, arr2) {
  let newArr = []

  arr1.forEach((w) => {
    if (arr2.indexOf(w) === -1) {
      newArr.push(w)
    }
  })

  arr2.forEach((w) => {
    if (arr1.indexOf(w) === -1) {
      newArr.push(w)
    }
  })

  return newArr
}

console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
)

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
