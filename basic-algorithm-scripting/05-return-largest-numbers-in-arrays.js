function largestOfFour(arr) {
  return arr.map((subArr) => {
    const sortedSub = subArr.sort((a, b) => b - a)
    return sortedSub[0]
  })
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
)
