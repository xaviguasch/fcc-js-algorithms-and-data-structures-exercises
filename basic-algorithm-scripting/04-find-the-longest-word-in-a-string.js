function findLongestWordLength(str) {
  const splittedArr = str.split(' ')

  let longestWord = ''

  splittedArr.map((word, index) => {
    if (word.length >= longestWord.length) {
      longestWord = splittedArr[index]
    }
  })
  return longestWord.length
}

console.log(
  findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')
)
