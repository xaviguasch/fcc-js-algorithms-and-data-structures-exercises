function copyMachine(arr, num) {
  let newArr = []
  while (num >= 1) {
    // Only change code below this line
    const obj = [...arr]
    newArr.push(obj)
    // Only change code above this line
    num--
  }
  return newArr
}

console.log(copyMachine([true, false, true], 2))
