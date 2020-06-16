function frankenSplice(arr1, arr2, n) {
  const arr2Copy = arr2.slice(0)
  arr2Copy.splice(n, 0, ...arr1.slice(0))

  return arr2Copy
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
console.log(frankenSplice([1, 2], ['a', 'b'], 1))
console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
)
