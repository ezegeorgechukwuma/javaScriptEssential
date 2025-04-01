let books = [];

function addBook() {
         let bookName = document.getElementById('bookName').value;
            let authorName = document.getElementById('authorName').value;
            let bookDescription = document.getElementById('bookDescription').value;
            let pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Please fill in all fields correctly.');
            }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `
        <div class="book-entry">
        <h2>book number: ${index + 1}</h2>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete</button>
        </div>
    `);
  
    document.getElementById('books').innerHTML = booksDiv.join('');
  
}

 function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }

 function deleteBook(index) {
     books.splice(index, 1);
     showbooks()
 }