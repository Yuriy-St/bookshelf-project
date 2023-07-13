import {
  paginateItems,
  createPaginationOptions,
  initializePagination,
} from './pagination';
import debounce from 'lodash.debounce';
import { getListOfBooks, deleteBookFromList } from '../dbAPI/dbAPI';
import { markupShoppingListItems } from './shoppingListItem';

export let bookList = [];

let itemsPerPage;
let paginationVisiblePages;
let mediaQuery = window.matchMedia('(max-width: 767px)');
const booksContainer = document.getElementById('booksContainer');

export async function renderShoppingList() {
  try {
    bookList = await getListOfBooks();
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
    bookList = bookList.filter(item => item._id !== bookId);
    renderPageItems(bookList);
  }
}

function initializePreloadData(pageOptions = {}) {
  const { itemsPerPage, paginationVisiblePages } = pageOptions;
  const paginatedItems = paginateItems(bookList, itemsPerPage);
  const options = createPaginationOptions(
    paginatedItems,
    paginationVisiblePages
  );
  initializePagination(options, paginatedItems);
  renderPageItems(paginatedItems[0]);
}

function renderPlaceholder() {
  booksContainer.innerHTML = markupPlaceholder();
}

function markupPlaceholder() {
  const markupPlaceholder = `
  <div class="shopping_list-placeholder-container">
    <p class="shopping_list-placeholder-text">This page is empty, add some books and proceed to order.</p>
    <div class="shopping_list-placeholder-thumb"></div>
  </div>`;

  return markupPlaceholder;
}

function handleMediaQueryChange() {
  if (mediaQuery.matches) {
    itemsPerPage = 4;
    paginationVisiblePages = 2;
  } else {
    itemsPerPage = 3;
    paginationVisiblePages = 3;
  }
  initializePreloadData({ itemsPerPage, paginationVisiblePages });
}

function renderShoppingListItems(bookList) {
  const shoppingListItemMarkup = markupShoppingListItems(bookList);
  const bookListMarkup = `<ul>${shoppingListItemMarkup}</ul>`;
  booksContainer.insertAdjacentHTML('beforeend', bookListMarkup);
}

function renderPageItems(pageItems) {
  booksContainer.innerHTML = '';
  renderShoppingListItems(pageItems);
}

// Smooth Scroll
function initScroll() {
  const { height: cardHeight } = document
    .querySelector('.shoppinglist-list')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

window.addEventListener('resize', debounce(handleMediaQueryChange, 200));

renderShoppingList();

booksContainer.addEventListener('click', function (event) {
  const clickedElement = event.target;
  if (
    clickedElement.classList.contains('shoppinglist-delete-book-button-svg')
  ) {
    deleteBook(event);
  }
});
