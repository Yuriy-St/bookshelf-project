import {
  createPaginationOptions,
  initializePagination,
} from './pagination';
import debounce from 'lodash.debounce';
import { getListOfBooks, deleteBookFromList } from '../dbAPI/dbAPI';
import { markupShoppingListItems } from './shoppingListItem';
export let bookList = [];
export let itemsPerPage;
export let paginationVisiblePages;
let booksContainer;
let mediaQuery = window.matchMedia('(max-width: 767px)');

export async function initShoppingList() {
  try {
    bookList = await getListOfBooks();
    console.log('bookList: ', bookList);
    booksContainer = document.getElementById('booksContainer');
    if (bookList.length === 0 || Array.isArray(bookList) === false) {
      renderPlaceholder();
      return;
    }
    handleMediaQueryChange();
    initScroll();
  } catch (error) {
    console.log(error);
    renderPlaceholder();
  }
}

async function deleteBook(event) {
  event.preventDefault();
  const targetRef = event.target;
  const bookId = targetRef.dataset.bookId;
  if (bookId) {
    await deleteBookFromList(bookId);
    console.log('bookId: ', bookId);
    bookList = bookList.filter(item => item._id !== bookId);
  }
  initializePreloadData();
};

function initializePreloadData() {
  const paginatedItems = paginateItems(bookList);
  const options = createPaginationOptions(paginatedItems, paginationVisiblePages);
  initializePagination(options, paginatedItems, renderShoppingListItems);
  renderPageItems(paginatedItems[0]);

};

function renderPlaceholder() {
  booksContainer.innerHTML = markupPlaceholder();
  console.log('booksContainer: ', booksContainer);
};

function markupPlaceholder() {
  const markupPlaceholder = `
  <div class="shopping_list-placeholder-container">
    <p class="shopping_list-placeholder-text">This page is empty, add some books and proceed to order.</p>
    <div class="shopping_list-placeholder-thumb"></div>
  </div>`;

  return markupPlaceholder;
};

function handleMediaQueryChange() {
  if (bookList.length === 0 || Array.isArray(bookList) === false) {
    renderPlaceholder();
    return;
  }
  if (mediaQuery.matches) {
    itemsPerPage = 4;
    paginationVisiblePages = 2;
  } else {
    itemsPerPage = 3;
    paginationVisiblePages = 3;
  }
  initializePreloadData({ itemsPerPage, paginationVisiblePages });
};

function paginateItems(bookList) {
  const paginatedItems = [];
  const totalPages = Math.ceil(bookList.length / itemsPerPage);
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * itemsPerPage;
    const pageItems = bookList.slice(startIndex, startIndex + itemsPerPage);
    paginatedItems.push(pageItems);
  } console.log('paginatedItems: ', paginatedItems);
  return paginatedItems;

};

export function renderShoppingListItems(pageItems) {
  const shoppingListItemMarkup = markupShoppingListItems(pageItems);
  booksContainer.insertAdjacentHTML('beforeend', shoppingListItemMarkup);
};

function renderPageItems(pageItems) {
  booksContainer.innerHTML = '';
  renderShoppingListItems(pageItems);
  booksContainer.addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (
      clickedElement.classList.contains('shoppinglist-delete-book-button') || clickedElement.classList.contains('shoppinglist-delete-book-button-svg')
    ) {
      deleteBook(event);
    }
  });
};

// Smooth Scroll
function initScroll() {
  const { height: cardHeight } = document
    .querySelector('.shoppinglist-list')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

window.addEventListener('resize', debounce(handleMediaQueryChange, 200));




