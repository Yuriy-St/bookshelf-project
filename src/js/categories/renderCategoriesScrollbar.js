import * as booksAPI from '../booksAPI/booksApi';
import { renderBookshelf } from './renderBookshelf';
import renderBestSellerBooks from '../startPage/renderBestSellerBooks ';
import * as loader from '../loader';
import * as errorHandler from '../errorHandler';
let categoriesContainerRef = null;

export async function renderCategoriesScrollbar(parentRef) {
  try {
    loader.add(parentRef);
    parentRef.innerHTML = await markupCategoriesUlContainer();
    categoriesContainerRef = document.querySelector('.categories_list');
    categoriesContainerRef.addEventListener('click', onClickCategory);
  } catch {
    errorHandler.renderError(categoriesContainerRef);
  }
}

async function markupCategoriesUlContainer() {
  const categories = await fetchCategoryList();
  const categoriesMarkup = markupScrollbarCategories(categories);
  const categoriesUlContainerMarkup = `<ul class="categories_list list">
      <li id="all-categories" class="categories_list--item current">All categories</li>
      ${categoriesMarkup}
    </ul>`;
  return categoriesUlContainerMarkup;
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

function markupScrollbarCategories(categories) {
  return categories
    .map(
      category => `<li class="categories_list--item">${category.list_name}</li>`
    )
    .join('');
}

export async function onClickCategory(event) {
  const { target: targetRef } = event;

  if (targetRef === categoriesContainerRef) return;

  if (targetRef.textContent === 'All categories') {
    renderAllBookCategories();
    return;
  }

  renderBookCategory(targetRef);
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

export async function renderBookCategory(targetRef) {
  try {
    // loader.add(targetRef);
    const categoryClickedName = targetRef.textContent;
    const categoryBooks = await fetchBooksByCategory(categoryClickedName);

    toggleCurrentCategoryColor(targetRef);
    renderBookshelf(categoryBooks);
  } catch (error) {
    onErrorMessage(targetRef);
  }
}

export function renderAllBookCategories() {
  renderBestSellerBooks();
  const allCategoriesLinkRef = document.getElementById('all-categories');
  toggleCurrentCategoryColor(allCategoriesLinkRef);
}
