import Pagination from 'tui-pagination';
import debounce from 'lodash.debounce';
import { getListOfBooks, deleteBookFromList } from '../dbAPI/dbAPI';
export let items = [];
let itemsPerPage;
let paginationVisiblePages;
let mediaQuery = window.matchMedia('(max-width: 767px)');
const paginationContainer = document.getElementById('pagination');
const booksContainer = document.getElementById('booksContainer');

export async function fetchBooks() {
    try {
        items = await getListOfBooks();
        handleMediaQueryChange()
        initScroll()
    } catch (error) {
        console.log(error);
        renderPlaceholder();
    }
};

async function deleteBook(event) {
    event.preventDefault();
    const clickedElement = event.target;
    console.log('clickedElement: ', clickedElement);
    const bookId = clickedElement.dataset.bookId;
    console.log('bookId: ', bookId);
    if (bookId) {
        await deleteBookFromList(bookId);
        console.log('bookId: ', bookId);
        items = items.filter((item) => item._id !== bookId);
        renderPageItems(items);
    }
}

function initializePreloadDate() {
    const paginatedItems = paginateItems(items);
    const options = createPaginationOptions(paginatedItems);
    initializePagination(options, paginatedItems);
    renderPageItems(paginatedItems[0]);

};

function renderPlaceholder() {
    const markupPlaceholder = `<div class="shopping_list-placeholder-container">
    <p class="shopping_list-placeholder-text">This page is empty, add some books and proceed to order.</p>
    <div class="shopping_list-placeholder-thumb">
    </div>
    </div>`;
    booksContainer.innerHTML = markupPlaceholder;
};

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
};

function paginateItems(items) {
    const paginatedItems = [];
    const totalPages = Math.ceil(items.length / itemsPerPage);
    for (let i = 0; i < totalPages; i++) {
        const startIndex = i * itemsPerPage;
        const pageItems = items.slice(startIndex, startIndex + itemsPerPage);
        paginatedItems.push(pageItems);
    }
    return paginatedItems;
};

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
};

function initializePagination(options, paginatedItems) {
    const pagination = new Pagination(paginationContainer, options);
    pagination.on('afterMove', function (event) {
        const pageIndex = event.page - 1;
        const pageItems = paginatedItems[pageIndex];
        booksContainer.innerHTML = '';
        renderBookCard(pageItems);
    });

};

function renderPageItems(pageItems) {
    booksContainer.innerHTML = '';
    renderBookCard(pageItems);
};

function renderBookCard(pageItems) {
    const markupBookCard = pageItems.map(({ _id, list_name, author, description, title, book_image, buy_links }) => {
        return `
 <li class="shoppinglist-item">
  <button 
          type="button"
          class="shoppinglist-delete-book-button">
                <svg data-book-id="${_id}" class="shoppinglist-delete-book-button-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
      <div class="shoppinglist-thumb">
        <img src="${book_image}" alt="${title}" class="shoppinglist-img">
      </div> 
  <div class="shoppinglist-info-book">
      <h3 class="shoppinglist-name-book">${title}</h3>
      <p class="shoppinglist-book-category">${list_name}</p>
      <p class="shoppinglist-book-text">${description}</p>
        <div class="shoppinglist-author-link-wrap">
            <p class="shoppinglist-name-author">${author}</p>
                <div class="shoppinglist-link-wrap">
                  <a href="${buy_links[0].url}" target="_blank" class="shoppinglist-book-link">
                  <svg class="shoppinglist-book-link-svg-cont-amazon" ">
                  <use class="shoppinglist-book-link-svg" href="../../img/shoppingList-sprite.svg#icon-Amazon"></use>
                </svg>
                  </a>
                  <a href="${buy_links[1].url}" target="_blank" class="shoppinglist-book-link">
                    <svg class="shoppinglist-book-link-svg-cont" ">
                  <use class="shoppinglist-book-link-svg" href="../../img/shoppingList-sprite.svg#icon-apple-books"></use>
                </svg>
                </a>
                  <a href="${buy_links[2].url}" target="_blank" class="shoppinglist-book-link">
                    <svg class="shoppinglist-book-link-svg-cont" ">
                  <use class="shoppinglist-book-link-svg" href="../../img/shoppingList-sprite.svg#icon-book-shop"></use>
                </svg>
                </a>
                </div>
           </div>
        </div>
      </li>`;
    }).join('');
    booksContainer.insertAdjacentHTML('beforeend', markupBookCard);
}
// Smooth Scroll
function initScroll() {
    const { height: cardHeight } = document
        .querySelector(".shoppinglist-list")
        .firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });
}

window.addEventListener('resize', debounce(handleMediaQueryChange, 200));

fetchBooks();

booksContainer.addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('shoppinglist-delete-book-button-svg')) {
        deleteBook(event);
    }
});