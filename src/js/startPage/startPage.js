import { fetchTopBooks } from '../booksAPI/booksApi';
import { markupBookCard } from '../bookCard/bookCard';

const topBooksRef = document.querySelector(`.bookshelf`);

async function fetTopBooks() {
  const categories = await fetchTopBooks();

  return categories;
}

async function markupTopBooksList() {
  const categoriesList = await fetchTopBooks();

  categoriesList.forEach(category => {
    const { list_name, books } = category;

    const categoryContainer = document.createElement('div');
    categoryContainer.innerHTML = `
      <h5>${list_name}</h5>
      <ul class="top-books-list"></ul>
      <button>SEE MORE</button>
    `;

    const booksListRef = categoryContainer.querySelector('.top-books-list');

    books.forEach(book => {
      const { _id, book_image, author, title } = book;
      const bookData = markupBookCard({
        bookId: _id,
        bookImage: book_image,
        bookAuthorName: author,
        bookTitle: title,
      });

      const bookItem = document.createElement('li');
      bookItem.innerHTML = bookData;
      booksListRef.appendChild(bookItem);
    });

    topBooksRef.appendChild(categoryContainer);
  });
}

markupTopBooksList();
