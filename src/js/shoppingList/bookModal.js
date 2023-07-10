import { fetchBook } from './booksApi';

async function createBookModal(bookId) {
  try {
    const book = await fetchBook(bookId);

    const modalHTML = `
      <div class="modal">
        <div class="modal-content">
          <img src="${book.image}" alt="Book Cover">
          <h2>${book.title}</h2>
          <p>Автор: ${book.author}</p>
          <p>${book.description}</p>
          <ul>
            ${book.links.map(link => `<li><a href="${link.url}">${link.label}</a></li>`).join('')}
          </ul>
          <button class="action-button">${isBookInShoppingList(book) ? 'Видалити з Shopping List' : 'Додати до Shopping List'}</button>
        </div>
      </div>
    `;

    document.body.innerHTML += modalHTML;

    const actionButton = document.querySelector('.action-button');
    actionButton.addEventListener('click', handleActionButtonClick);
  } catch (error) {
    console.log('Помилка при отриманні даних:', error);
  }
}

function isBookInShoppingList(book) {
  const shoppingList = getShoppingList();
  return shoppingList.some(item => item.id === book.id);
}

function handleActionButtonClick() {
  const actionButton = document.querySelector('.action-button');
  const book = getBookDetails();

  if (isBookInShoppingList(book)) {
    removeFromShoppingList(book);
    actionButton.textContent = 'Додати до Shopping List';
  } else {
    addToShoppingList(book);
    actionButton.textContent = 'Видалити з Shopping List';
  }
}

function addToShoppingList(book) {
  const shoppingList = getShoppingList();
  shoppingList.push(book);
  saveShoppingList(shoppingList);
}

function removeFromShoppingList(book) {
  let shoppingList = getShoppingList();
  shoppingList = shoppingList.filter(item => item.id !== book.id);
  saveShoppingList(shoppingList);
}

function getShoppingList() {
  const shoppingList = localStorage.getItem('shoppingList');
  return shoppingList ? JSON.parse(shoppingList) : [];
}

function saveShoppingList(shoppingList) {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}