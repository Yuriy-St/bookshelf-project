import * as booksAPI from '../booksAPI/booksApi';
import { renderBookshelf } from './renderBookshelf';
import renderBestSellerBooks from '../startPage/renderBestSellerBooks ';

let categoriesContainerRef = null;

export async function renderCategoriesScrollbar(parentRef) {
  try {
    parentRef.innerHTML =
      '<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>';
    categoriesContainerRef = document.querySelector('.categories_list');
    const categories = await fetchCategoryList();
    // throw new error();

    categoriesContainerRef.addEventListener('click', onClickCategory);

    categoriesContainerRef.insertAdjacentHTML(
      'beforeend',
      markupCategoriesScrollbar(categories)
    );
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

  toggleCurrentCategoryColor(chosenCategory);

  const categoryBooks = await fetchBooksByCategory(categoryClickedName);

  renderBookshelf(categoryBooks, bookshelfRef);
}

async function fetchBooksByCategory(categoryName) {
  try {
    const category = await booksAPI.fetchBooksByCategory(categoryName);
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
