function repeatStringNumTimes(str, num) {
  let finalStr = ''
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      finalStr += str
    }
  } else {
    return ''
  }

  return finalStr
}

console.log(repeatStringNumTimes('abc', 3))
