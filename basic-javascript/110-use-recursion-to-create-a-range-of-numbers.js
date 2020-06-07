function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum]
  } else {
    const rangeArray = rangeOfNumbers(startNum, endNum - 1)
    rangeArray.push(endNum)
    return rangeArray
  }
}

console.log(rangeOfNumbers(4, 10))
