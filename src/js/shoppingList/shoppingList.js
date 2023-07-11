import Pagination from 'tui-pagination';
import debounce from 'lodash.debounce';
import { addListToLocalStorage } from '../storage/storage';
import { getListFromLocalStorage } from '../storage/storage';

import { fetchBookById, fetchTopBooks } from '../booksAPI/booksApi';
let items = [];
let itemsPerPage = 3;
let paginationVisiblePages = 3;
let mediaQuery = window.matchMedia('(max-width: 767px)');
const paginationContainer = document.getElementById('pagination');
const booksContainer = document.getElementById('booksContainer');

// временно
async function fetchBooks() {
  try {
    const books = await fetchTopBooks();
    const bookPromises = books.map(book => fetchBookById(book.books[0]._id));
    const booksId = await Promise.all(bookPromises);
    booksId.forEach(bookId => {
      addListToLocalStorage(bookId);
    });
    items = await getListFromLocalStorage();
    if (items.length === 0 || Array.isArray(items) === false) {
      renderPlaceholder();
      return;
    }
    handleMediaQueryChange();
  } catch (error) {
    renderPlaceholder();
  }
}
// временно
function initializePreloadDate() {
  const paginatedItems = paginateItems(items);
  const options = createPaginationOptions(paginatedItems);
  initializePagination(options, paginatedItems);
  renderPageItems(paginatedItems[0]);
}

function renderPlaceholder() {
  const markupPlaceholder = `<div class="shopping_list-placeholder-container">
    <p class="shopping_list-placeholder-text">This page is empty, add some books and proceed to order.</p>
    <div class="shopping_list-placeholder-thumb">
    </div>
    </div>`;
  booksContainer.innerHTML = markupPlaceholder;
}
function handleMediaQueryChange() {
  if (mediaQuery.matches) {
    itemsPerPage = 4;
    paginationVisiblePages = 2;
    initializePreloadDate();
  } else {
    itemsPerPage = 3;
    paginationVisiblePages = 3;
    initializePreloadDate();
  }
}

function paginateItems(items) {
  const paginatedItems = [];
  const totalPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * itemsPerPage;
    const pageItems = items.slice(startIndex, startIndex + itemsPerPage);
    paginatedItems.push(pageItems);
  }
  return paginatedItems;
}

function createPaginationOptions(paginatedItems) {
  return {
    totalItems: paginatedItems.length,
    itemsPerPage: 1,
    visiblePages: paginationVisiblePages,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{ type }}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{ type }}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
}
function initializePagination(options, paginatedItems) {
  const pagination = new Pagination(paginationContainer, options);
  pagination.on('afterMove', function (event) {
    const pageIndex = event.page - 1;
    const pageItems = paginatedItems[pageIndex];
    booksContainer.innerHTML = '';
    markupItems(pageItems);
  });
}

function renderPageItems(pageItems) {
  booksContainer.innerHTML = '';
  markupItems(pageItems);
}

function markupItems(pageItems) {
  const markup = pageItems
    .map(({ list_name, book_image }) => {
      return `
      <li class="shoppinglist-item">
        <img src="${book_image}" alt="${list_name}" style="width: 116px"
"height: 165px" class="shoppinglist-img">
        <p class="shoppinglist-name">${list_name}</p>
        <p class="shoppinglist-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
      </li>`;
    })
    .join('');
  booksContainer.insertAdjacentHTML('beforeend', markup);
}

window.addEventListener('resize', debounce(handleMediaQueryChange, 200));

fetchBooks();
