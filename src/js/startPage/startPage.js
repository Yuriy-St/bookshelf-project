import { fetchTopBooks } from '../booksAPI/booksApi';
import { markupBookCard } from '../bookCard/bookCard';

const topBooksRef = document.querySelector('.bookshelf');

async function fetchTopBooksData() {
  try {
    const categories = await fetchTopBooks();
    return categories;
  } catch (error) {
    console.error('Error fetching top books:', error);
    return [];
  }
}

function createCategoryContainer(listName) {
  const categoryContainer = document.createElement('div');
  categoryContainer.innerHTML = `
    <h5 class="categories_list--item">${listName}</h5>
    <ul class="bookshelf_category--list" id="${listName.replace(
      / /g,
      '-'
    )}-list"></ul>
    <button>SEE MORE</button>
  `;
  return categoryContainer;
}

function addBookToCategory(booksListRef, book) {
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
}

async function markupTopBooksList() {
  try {
    const categoriesList = await fetchTopBooksData();

    categoriesList.forEach(category => {
      const { list_name, books } = category;

      if (books.length === 0) {
        throw new Error(`Category '${list_name}' is empty.`);
      }

      const categoryContainer = createCategoryContainer(list_name);
      const booksListRef = categoryContainer.querySelector(
        `#${list_name.replace(/ /g, '-')}-list`
      );

      books.forEach(book => {
        addBookToCategory(booksListRef, book);
      });

      topBooksRef.appendChild(categoryContainer);
    });
  } catch (error) {
    console.error('Error marking up top books:', error);
  }
}

markupTopBooksList();
