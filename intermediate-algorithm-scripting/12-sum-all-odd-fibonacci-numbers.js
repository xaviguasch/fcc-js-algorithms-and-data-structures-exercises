// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let a = 1
  let b = 1
  let sum = a

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b
    }

    let tempVar = b

    b = a + b
    a = tempVar
  }
  return sum
}

console.log(sumFibs(4))
// console.log(sumFibs(1))
// console.log(sumFibs(1000))
// console.log(sumFibs(4000000))
// console.log(sumFibs(4))
// console.log(sumFibs(75024))
// console.log(sumFibs(75025))
