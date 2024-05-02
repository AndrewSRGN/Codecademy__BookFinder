import { flattenObjectValuesIntoArray, renderBooksToDom, structureBookAsHtml } from "./helper.js";
import { books } from "./bookList.js";
// Click handler for search button
const captureSearchValue = () => {
    const searchValue = document.getElementById("search-bar").value;
    return searchValue
};

// Filter books based on search input
const filterBooks = () => {
    const searchValue = captureSearchValue();
    const filteredBooks = [];
    flattenObjectValuesIntoArray(books).forEach((book, index) => {
        book.forEach(value => {
            if (value == searchValue) {
                filteredBooks.push(books[index]);
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
const structureBooksAsHtml = () => {
    const booksElements = [];
    filterBooks().forEach(book => {
        booksElements.push(structureBookAsHtml(book));
    })
    return booksElements
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
    const booksElements = structureBooksAsHtml();
    renderBooksToDom(booksElements);
};

// Grab search button from the DOM
const searchBtn = document.querySelector(".btn#search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", searchBtnClickHandler);