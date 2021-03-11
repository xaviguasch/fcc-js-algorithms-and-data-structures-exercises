// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const startsWithVowel = vowels.some((vow) => vow === str[0])

  if (startsWithVowel) {
    return str.concat('way')
  } else {
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        const finalWord = str.slice(i) + str.slice(0, i) + 'ay'

        return finalWord
      }
    }
    const finalWord = str.slice(0) + 'ay'
    return finalWord
  }
}

console.log(translatePigLatin('california'))
console.log(translatePigLatin('paragraphs'))
console.log(translatePigLatin('glove'))
console.log(translatePigLatin('algorithm'))
console.log(translatePigLatin('rhythm'))
