// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const re = /([a-z])([A-Z])/g
  let strToCamelCase = str.replace(re, '$1 $2')
  let strReplaced = strToCamelCase.replace(/_|\s/g, '-')
  let strToLowerCase = strReplaced.toLowerCase()

  return strToLowerCase
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase('The_Andy_Griffith_Show'))
console.log(spinalCase('AllThe-small Things'))
