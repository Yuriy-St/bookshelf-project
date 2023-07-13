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
    const bookModalMarkup = await markupBookModal(bookId, isInShoppingList);
    document.body.insertAdjacentHTML('beforeend', bookModalMarkup);

    const actionButton = document.querySelector('.action-button');
    actionButton.addEventListener(
      'click',
      handleActionButtonClick.bind(null, bookId, isInShoppingList)
    );

    const closeButton = document.querySelector('.modal-close-button');
    closeButton.addEventListener('click', closeModal);
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
          <div class="book-image" >
            <img src="${book.book_image}" alt="Book Cover">
          </div>
          <button class="modal-close-button">
          <svg class="modal-close-icon">
            <use xlink:href="#modal-close-button"></use>
          </svg>
          </button>
          <h2 class="modal-title">${book.title}</h2>
          <p class="modal-author">Автор: ${book.author}</p>
          <p class="modal-decsription">${book.description}</p>
          <ul class="modal-svg">
            <!-- ${buyLinksMarkup} -->
          </ul>
          <button class="modal-action-button">${
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

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}
