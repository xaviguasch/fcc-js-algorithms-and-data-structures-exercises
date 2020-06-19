function destroyer(arr, ...rest) {
  return arr.filter((el) => rest.indexOf(el) === -1)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht',
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
)
