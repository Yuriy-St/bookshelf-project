import {
  renderBookshelf,
  collectCategoryBooks,
  markupBookshelfTitle,
  markupBookList,
} from '../categories/renderBookshelf';
import { fetchTopBooks } from '../booksAPI/booksApi';
import { renderBookCategory } from '../categories/renderCategoriesScrollbar';
import * as errorHandler from '../errorHandler';
import * as loader from '../loader.js';

export default async function renderBestSellerBooks(parentRef) {
  const bookShelfRef = parentRef || document.querySelector('.bookshelf');

  try {
    bookShelfRef.innerHTML = '';
    loader.add(bookShelfRef);
    const topBooksMarkup = await markupBestSellerBook();

    bookShelfRef.innerHTML = topBooksMarkup;
    addButtonListeners();
  } catch (error) {
    errorHandler.renderError(bookShelfRef);
  } finally {
    // loader.remove(bookShelfRef);
  }
}

async function markupBestSellerBook() {
  const bookShelfTitle = markupBookshelfTitle('Best Seller Books');
  const categoriesBestBooksMarkup = await markupCategoriesBestBooks();
  return `${bookShelfTitle} ${categoriesBestBooksMarkup}`;
}

async function fetchTopBooksData() {
  try {
    const categories = await fetchTopBooks();
    return categories;
  } catch (error) {
    console.error('Error fetching top books:', error);
    return [];
  }
}

async function markupCategoriesBestBooks() {
  const categories = await fetchTopBooksData();

  const categoriesMarkup = categories
    .map(category => {
      const book = category.books[0];
      const categoryName = book.list_name;
      const booksArray = collectCategoryBooks(category.books);
      const bestbooksCategoryList = markupBookList(booksArray);

      return `
        <li class="bestbooks_category--container">
          <h2 class="bestbooks_category--name">${categoryName}</h2>
          ${bestbooksCategoryList}
          <button type="button" class="button-brand-ghost button" data-categoryname="${categoryName}">
            See more
          </button>
        </li>
      `;
    })
    .join('');
  return `<ul class="bestbooks_list">${categoriesMarkup}</ul>`;
}

function addButtonListeners() {
  const buttonsArray = document.querySelectorAll('.button-brand-ghost');
  buttonsArray.forEach(button =>
    button.addEventListener('click', onClickSeeMoreBtn)
  );
}

export async function onClickSeeMoreBtn(event) {
  const targetRef = event.target;
  const categoryClickedName = targetRef.dataset.categoryname;
  const categoriesContainerRef = document.querySelector('.categories_list');

  const chosenCategory = [...categoriesContainerRef.children].find(
    listItem => listItem.textContent === categoryClickedName
  );
  chosenCategory
    ? renderBookCategory(chosenCategory)
    : renderAllBookCategories();
}
