function confirmEnding(str, target) {
  const targetLength = target.length
  return str.slice(-targetLength) === target ? true : false
}

console.log(confirmEnding('Bastian', 'n'))
console.log(confirmEnding('Connor', 'n'))
console.log(confirmEnding('Congratulation', 'on'))
