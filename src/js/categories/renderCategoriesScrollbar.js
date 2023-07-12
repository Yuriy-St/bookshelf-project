import * as booksAPI from '../booksAPI/booksApi';
import { renderBookshelf } from './renderBookshelf';
import renderBestSellerBooks from '../startPage/renderBestSellerBooks ';
import * as loader from '../loader';

let categoriesContainerRef = null;

export async function renderCategoriesScrollbar(parentRef) {
  try {
    parentRef.innerHTML =
      '<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>';
    categoriesContainerRef = document.querySelector('.categories_list');
    loader.add(categoriesContainerRef);

    const categories = await fetchCategoryList();
    loader.remove(categoriesContainerRef);

    categoriesContainerRef.insertAdjacentHTML(
      'beforeend',
      markupCategoriesScrollbar(categories)
    );
    categoriesContainerRef.addEventListener('click', onClickCategory);
  } catch {
    onErrorMessage(categoriesContainerRef);
  }
}

async function fetchCategoryList() {
  try {
    const categories = await booksAPI.fetchCategoryList();
    categories.sort((firstName, secondName) =>
      firstName.list_name.localeCompare(secondName.list_name)
    );

    return categories;
  } catch (error) {
    console.log(error);
  }
}

function markupCategoriesScrollbar(categories) {
  return categories
    .map(
      category => `<li class="categories_list--item">${category.list_name}</li>`
    )
    .join('');
}

function onErrorMessage(parentRef) {
  parentRef.classList.add('error');
  parentRef.innerHTML = `
    <div class="error_container">
      <p class="error_container--message">
          Oops! Sorry, but we weren't able to get a category list.
          <br>
          Please,
          try reload the page.
      </p>
    </div>
    `;
}

export async function onClickCategory(event) {
  if (event.target === categoriesContainerRef) return;
  const bookshelfRef = document.querySelector('.bookshelf');

  if (event.target.textContent === 'All categories') {
    renderBestSellerBooks(bookshelfRef);
    toggleCurrentCategoryColor(event.target);
    return;
  }

  let categoryClickedName = event.target.textContent;
  let chosenCategory = event.target;

  if (event.srcElement.nodeName === 'BUTTON') {
    categoryClickedName = event.target.dataset.categoryname;
    chosenCategory = [...categoriesContainerRef.children].find(
      listItem => listItem.textContent === categoryClickedName
    );
  }

  bookshelfRef.innerHTML = '';
  loader.add(bookshelfRef);
  toggleCurrentCategoryColor(chosenCategory);

  const categoryBooks = await fetchBooksByCategory(categoryClickedName);

  loader.remove(bookshelfRef);
  renderBookshelf(categoryBooks, bookshelfRef);
}

async function fetchBooksByCategory(categoryName) {
  try {
    const categoryBooks = await booksAPI.fetchBooksByCategory(categoryName);
    return categoryBooks;
  } catch (error) {
    console.log(error);
  }
}

function toggleCurrentCategoryColor(clickedCategoryRef) {
  let currentCategoryRef = document.querySelector(
    '.categories_list--item.current'
  );
  currentCategoryRef.classList.remove('current');
  clickedCategoryRef.classList.add('current');
}
