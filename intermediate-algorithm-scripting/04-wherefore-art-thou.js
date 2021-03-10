function whatIsInAName(collection, source) {
  var arr = []
  // Only change code below this line

  collection.forEach((obj) => {
    let numProps = 0
    let matchingProps = 0
    for (const [key, value] of Object.entries(source)) {
      numProps++
      if (obj[key] && obj[key] === value) {
        matchingProps++
      }
    }

    if (numProps === matchingProps) {
      arr.push(obj)
    }
  })
  // Only change code above this line
  return arr
}

console.log(
  whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
    apple: 1,
    bat: 2,
  })
)

// console.log(
//   whatIsInAName(
//     [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//     ],
//     { last: 'Capulet' }
//   )
// )

// collection.forEach((object) => {
//   for (const [key, value] of Object.entries(object)) {
//     for (const [key2, value2] of Object.entries(source)) {
//       if (key === key2 && value === value2) {
//         arr.push(object)
//       }
//     }
//   }
// })
