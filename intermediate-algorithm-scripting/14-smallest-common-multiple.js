// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function findSCM(n1, n2) {
  let a = Math.min(n1, n2) // smallest number
  let b = Math.max(n1, n2) // bigger number

  for (let num = b; num <= a * b; num += b) {
    if (num % a === 0) {
      return num
    }
  }
}

function smallestCommons(arr) {
  let x = Math.min(...arr) //
  let y = Math.max(...arr)

  let scm = 1

  for (let i = x; i <= y; i++) {
    scm = findSCM(scm, i)
  }

  return scm
}

console.log(smallestCommons([2, 10]))
