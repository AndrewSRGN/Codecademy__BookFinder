// Click handler for search button
const captureSearchValue = () => {
    return searchValue = document.getElementById("search-bar").value;
};

// Filter books based on search input
const filterBooks = (searchString, bookList) => {
    const filteredBooks = [];
    flattenObjectValuesIntoArray(bookList).forEach((book, index) => {
        book.forEach(value => {
            if (value == searchString) {
                filteredBooks.push(bookList[index]);
                return true;
            } else {
                return false;
            }
        })
        return false;
    })
    return filteredBooks;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (bookList) => {
    const booksElements = [];
    bookList.forEach(book => {
        booksElements.push(structureBookAsHtml(book));
    })
    return booksElements
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (bookList) => {
    const searchString = captureSearchValue();
    const filteredBooks = filterBooks(searchString, bookList);
    const booksElements = structureBooksAsHtml(filteredBooks)
    renderBooksToDom(booksElements);
}

// Grab search button from the DOM
const searchBtn = document.querySelector(".btn#search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });