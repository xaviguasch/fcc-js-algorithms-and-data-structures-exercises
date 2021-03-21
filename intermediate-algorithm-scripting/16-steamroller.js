// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let finalArr = []

  const arrFlattener = (arr) => {
    arr.forEach((el) => {
      if (!Array.isArray(el)) {
        finalArr.push(el)
      } else {
        arrFlattener(el)
      }
    })
  }

  arrFlattener(arr)

  return finalArr
}

// console.log(steamrollArray([[['a']], [['b']]]))
// console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, [], [3, [[4]]]]))
// console.log(steamrollArray([1, {}, [3, [[4]]]]))
