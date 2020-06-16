function titleCase(str) {
  const wordsArr = str.split(' ')

  const phrase = wordsArr.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())

  return phrase.join(' ')
}

console.log(titleCase("I'm a little tea pot"))
console.log(titleCase('sHoRt AnD sToUt'))
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'))
