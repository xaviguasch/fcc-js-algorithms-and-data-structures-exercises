// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const words = str.split('')

  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  const result = words.map((word) => {
    if (htmlEntities.hasOwnProperty(word)) {
      return htmlEntities[word]
    } else {
      return word
    }
  })

  return result.join('')
}

console.log(convertHTML('Dolce & Gabbana'))
console.log(convertHTML('Hamburgers < Pizza < Tacos'))
console.log(convertHTML('Sixty > twelve'))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML('<>'))
console.log(convertHTML('abc'))
