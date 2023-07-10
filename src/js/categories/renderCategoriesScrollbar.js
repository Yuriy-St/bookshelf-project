import * as booksAPI from '../booksAPI/booksApi';
import { renderBookshelf } from './renderBookshelf';

const categoriesContainerEl = document.querySelector('.categories');
categoriesContainerEl.innerHTML =
  '<ul class="categories_list"><li class="categories_list--item current">All categories</li></ul>';
const categoriesListEl = document.querySelector('.categories_list');
const bookShelfEl = document.querySelector('.bookshelf');

categoriesListEl.addEventListener('click', onCategoryClick);

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

export async function renderCategoriesScrollbar() {
  try {
    // throw new error();
    const categories = await fetchCategories();
    categories.forEach(category =>
      categoriesListEl.insertAdjacentHTML(
        'beforeend',
        `<li class="categories_list--item">${category.list_name}</li>`
      )
    );
  } catch (error) {
    console.log(error);
    categoriesContainerEl.innerHTML = `
    <div class="error_container">
       <p class="error_container--message">
          Oops! Sorry, but something is wrong.
          Please,
          try again or reload the page.
       </p>
    </div>
    `;
  }
}

async function onCategoryClick(event) {
  if (event.target === categoriesListEl) return;

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
