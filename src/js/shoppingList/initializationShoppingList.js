import { getListOfBooks, deleteBookFromList } from '../dbAPI/dbAPI';
import {
  markupShoppingListItems,
  markupShoppingListItem,
} from './shoppingListItem';
import { markupBookshelfTitle } from '../categories/renderBookshelf';
export let itemsPerPage;
export let paginationVisiblePages;

let bookState = [];

//init Shopping List
export async function initShoppingList() {
  try {
    const booksContainer = document.querySelector('#booksContainer');
    const books = await getListOfBooks();
    bookState = [...books];

    booksContainer.innerHTML = markupShoppingListItem(bookState);
    handleDeleteButton();
  } catch (error) {
    renderPlaceholder();
  }
}

function handleDeleteButton() {
  const eventId = event => {
    if (event.target.closest('.shoppinglist-delete-book-button')) {
      const removeButton = event.target.closest(
        '.shoppinglist-delete-book-button'
      );

      deleteBook(removeButton.dataset.bookId);
    }
  };

  const booksContainer = document.querySelector('#booksContainer');
  booksContainer.addEventListener('click', eventId);
}

async function deleteBook(bookId) {
  const booksContainer = document.querySelector('#booksContainer');

  if (bookId) {
    await deleteBookFromList(bookId);
    bookState = bookState.filter(item => item._id !== bookId);

    if (bookState.length === 0) {
      renderPlaceholder();
      return;
    }

    booksContainer.innerHTML = markupShoppingListItem(bookState);
  }
}

export function renderPlaceholder() {
  const booksContainer = document.querySelector('.bookshelf');
  booksContainer.innerHTML = markupPlaceholder();
}

function markupPlaceholder() {
  return `
  ${markupBookshelfTitle('Shopping List')}
  <div class="shopping_list-placeholder-container">
    <p class="shopping_list-placeholder-text">This page is empty, add some books and proceed to order.</p>
    <div class="shopping_list-placeholder-thumb"></div>
  </div>`;
}

export function renderShoppingListItems(pageItems) {
  const shoppingListItemMarkup = markupShoppingListItems(pageItems);
  booksContainer.insertAdjacentHTML('beforeend', shoppingListItemMarkup);
}
