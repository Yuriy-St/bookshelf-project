import * as themeSwitcher from './themeSwitcher';
import { renderAllBookCategories, renderBookCategory } from '../categories';

const DEFAULT_CATEGORY = 'All categories';

export default function renderHeader() {
  const userBlockRef = document.querySelector('.user-block');
  initNavButtons();
  themeSwitcher.renderThemeSwitcher(userBlockRef);
  themeSwitcher.restoreTheme();
}

function initNavButtons() {
  initHomeButton();
}

function initHomeButton() {
  const btnHomeRef = document.querySelector('[data-home]');
  btnHomeRef.addEventListener('click', onClickHome);
}

function onClickHome() {
  const currentCategory =
    localStorage.getItem('currentCategory') || DEFAULT_CATEGORY;

  if (currentCategory === DEFAULT_CATEGORY) {
    renderAllBookCategories();
    return;
  }

  const categoriesContainerRef = document.querySelector('.categories_list');
  const chosenCategory = [...categoriesContainerRef.children].find(
    listItem => listItem.textContent === currentCategory
  );
  chosenCategory
    ? renderBookCategory(chosenCategory)
    : renderAllBookCategories();
}

function renderButton() {}
