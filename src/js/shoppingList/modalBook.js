import { fetchBook } from '../booksAPI/booksApi';
import { addBookToList, deleteBookFromList, getListOfBooks } from '../dbAPI/dbAPI';

export async function createBookModal(bookId) {
  try {
    const book = await fetchBook(bookId);
    const isInShoppingList = await isBookInShoppingList(bookId);

    const modalHTML = `
      <div class="modal">
        <div class="modal-content">
          <img src="${book.book_image}" alt="Book Cover">
          <h2>${book.title}</h2>
          <p>Автор: ${book.author}</p>
          <p>${book.description}</p>
          <ul>
            ${book.buy_links.map(link => `<li><a href="${link.url}">${link.label}</a></li>`).join('')}
          </ul>
          <button class="action-button">${isInShoppingList ? 'Видалити з Shopping List' : 'Додати до Shopping List'}</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const actionButton = document.querySelector('.action-button');
    actionButton.addEventListener('click', handleActionButtonClick.bind(null, bookId, isInShoppingList));
  } catch (error) {
    console.log('Помилка при отриманні даних:', error);
  }
}

async function isBookInShoppingList(bookId) {
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