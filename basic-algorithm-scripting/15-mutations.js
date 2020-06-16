function mutation(arr) {
  const [firstWord, secondWord] = arr

  const secondWArr = secondWord.toLowerCase().split('')

  return secondWArr.every((word) => firstWord.toLowerCase().includes(word))
}

console.log(mutation(['hello', 'hey']))

console.log(mutation(['Mary', 'Army']))
