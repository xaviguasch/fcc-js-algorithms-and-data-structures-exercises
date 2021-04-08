// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

const numKeys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

const numerals = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

function convertToRoman(num) {
  let romanNumbers = ''
  numKeys.forEach((key) => {
    while (key <= num) {
      romanNumbers += numerals[key]
      num -= key
    }
  })

  return romanNumbers
}

console.log(convertToRoman(36))
console.log(convertToRoman(4))
