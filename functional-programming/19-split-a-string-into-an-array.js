function splitify(str) {
  // Only change code below this line
  // return str.split(/[^a-zA-Z0-9_]/)
  return str.split(/[\s\W]/)

  // Only change code above this line
}

console.log(splitify('Hello World,I-am code'))
