// The global variable
var bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
]

// Change code below this line
function add(books, bookName) {
  const newBooks = [...books]

  return [...newBooks, bookName]

  // Change code above this line
}

// Change code below this line
function remove(books, bookName) {
  const newBooks = [...books]
  var book_index = newBooks.indexOf(bookName)
  if (book_index >= 0) {
    newBooks.splice(book_index, 1)
    return newBooks

    // Change code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time')
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
var newestBookList = remove(
  add(bookList, 'A Brief History of Time'),
  'On The Electrodynamics of Moving Bodies'
)

console.log(newerBookList)
