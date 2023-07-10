import { markupBookCard } from '../bookCard/bookCard';

export function renderBookshelf(categoryBooks, parentRef) {
  const book = categoryBooks[0];
  const categoryName = book.list_name;
  const booksArray = collectCategoryBooks(categoryBooks);
  parentRef.innerHTML = murkupBookshelfTitle(categoryName);
  parentRef.insertAdjacentHTML(
    'beforeend',
    murkupBookList(booksArray, parentRef)
  );
}

export function murkupBookList(booksArray) {
  const booksList = booksArray.map(book => markupBookCard(book)).join('');
  return `<ul class="bookshelf_category--list">${booksList}</ul>`;
}

export function murkupBookshelfTitle(categoryName) {
  let titleWordsArray = categoryName.split(' ');

  const titleFirstPart = titleWordsArray
    .slice(0, titleWordsArray.length - 1)
    .join(' ');

  const titleLastPart = titleWordsArray.slice(-1);

  return `<h1 class="bookshelf_category--title">${titleFirstPart} <span class="blue-last-word">${titleLastPart}</span></h1>`;
}

export function collectCategoryBooks(category) {
  const booksArray = category.map(book => {
    let bookId = book._id;
    let bookAuthorName = book.author;
    let bookImage = book.book_image;
    let bookTitle = book.title;

    return { bookId, bookImage, bookAuthorName, bookTitle };
  });

  return booksArray;
}
