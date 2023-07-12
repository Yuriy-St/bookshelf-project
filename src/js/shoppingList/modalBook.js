import { async } from '@firebase/util';
import { fetchBookById } from '../booksAPI/booksApi';
import {
  addBookToList,
  deleteBookFromList,
  getListOfBooks,
} from '../dbAPI/dbAPI';

export default async function renderBookModal(bookId) {
  try {
    const isInShoppingList = await isBookInShoppingList(bookId);
    const bookModalMarkup = await markupBookModal(bookId, isBookInShoppingList);
    document.body.insertAdjacentHTML('beforeend', bookModalMarkup);

    const actionButton = document.querySelector('.action-button');
    actionButton.addEventListener(
      'click',
      handleActionButtonClick.bind(null, bookId, isInShoppingList)
    );
  } catch (error) {
    console.log('Помилка при отриманні даних:', error);
  }
}

async function markupBookModal(bookId, isInList) {
  try {
    const book = await fetchBookById(bookId);

    const buyLinksMarkup = book.buy_links
      .map(link => `<li><a href="${link.url}">${link.label}</a></li>`)
      .join('');

    const markup = `
      <div class="modal">
        <div class="modal-content">
          <img src="${book.book_image}" alt="Book Cover">
          <h2>${book.title}</h2>
          <p>Автор: ${book.author}</p>
          <p>${book.description}</p>
          <ul>
            ${buyLinksMarkup}
          </ul>
          <button class="action-button">${
            isInList ? 'Видалити з Shopping List' : 'Додати до Shopping List'
          }</button>
        </div>
      </div>
    `;
    return markup;
  } catch (error) {
    console.log('Помилка при отриманні даних:', error);
  }
}

async function isBookInShoppingList(bookId) {
  return false;
  const listOfBooks = await getListOfBooks();
  return listOfBooks.some(book => book._id === bookId);
}

async function handleActionButtonClick(bookId, isInShoppingList) {
  const actionButton = document.querySelector('.action-button');

  if (isInShoppingList) {
    await deleteBookFromList(bookId);
    actionButton.textContent = 'Додати до Shopping List';
  } else {
    await addBookToList(bookId);
    actionButton.textContent = 'Видалити з Shopping List';
  }
}
