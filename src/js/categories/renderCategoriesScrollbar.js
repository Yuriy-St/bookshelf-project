import * as booksAPI from '../booksAPI/booksApi';
import { renderBookshelf } from './renderBookshelf';

let categoriesContainerRef = null;

export async function renderCategoriesScrollbar(parentRef) {
  try {
    parentRef.innerHTML =
      '<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>';
    categoriesContainerRef = document.querySelector('.categories_list');
    const categories = await fetchCategories();
    // throw new error();

    categoriesContainerRef.addEventListener('click', onClickCategory);

    categoriesContainerRef.insertAdjacentHTML(
      'beforeend',
      murkupCategoriesScrollbar(categories)
    );
  } catch {
    onErrorMessage(categoriesContainerRef);
  }
}

async function fetchCategories() {
  try {
    const categories = await booksAPI.fetchCategories();
    categories.sort((firstName, secondName) =>
      firstName.list_name.localeCompare(secondName.list_name)
    );

    return categories;
  } catch (error) {
    console.log(error);
  }
}

function murkupCategoriesScrollbar(categories) {
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

async function onClickCategory(event) {
  if (event.target === categoriesContainerRef) return;

  toggleCurrentCategoryColor(event.target);

  const categoryBooks = await fetchBookCategory(event.target.textContent);
  const bookshelfRef = document.querySelector('.bookshelf');

  renderBookshelf(categoryBooks, bookshelfRef);
}

async function fetchBookCategory(categoryName) {
  try {
    const category = await booksAPI.fetchBookCategory(categoryName);
    return category;
  } catch (error) {
    console.log(error);
  }
}

function toggleCurrentCategoryColor(clickedCategory) {
  let currentCategory = document.querySelector('.current');
  currentCategory.classList.remove('current');
  clickedCategory.classList.add('current');
}