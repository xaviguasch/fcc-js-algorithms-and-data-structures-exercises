function bouncer(arr) {
  const newArr = []

  arr.map((el) => {
    if (Boolean(el)) {
      newArr.push(el)
    }
  })

  return newArr
}

console.log(bouncer([7, 'ate', '', false, 9]))
console.log(bouncer([false, null, 0, NaN, undefined, '']))
console.log(bouncer([null, NaN, 1, 2, undefined]))
