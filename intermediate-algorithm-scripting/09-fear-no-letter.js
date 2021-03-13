// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const arr = str.split('').map((letter) => letter.charCodeAt(0))

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      const missingCharCode = arr[i] + 1
      return String.fromCharCode(missingCharCode)
    }
  }
  return undefined
}

console.log(fearNotLetter('abce'))
// console.log(fearNotLetter('abcdefghjklmno'))
// console.log(fearNotLetter('stvwx'))
// console.log(fearNotLetter('bcdf'))
// console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'))
