import * as themeSwitcher from './themeSwitcher';
import { renderAllBookCategories, renderBookCategory } from '../categories';

export default function renderHeader() {
  const userBlockRef = document.querySelector('.user-block');
  initNavButtons();
  themeSwitcher.renderThemeSwitcher(userBlockRef);
  themeSwitcher.restoreTheme();
}

function initNavButtons() {
  const btnHomeRef = document.querySelector('[data-home]');
  const btnShoppingListRef = document.querySelector('[data-shoppinglist]');
}

function initHomeButton() {
  const btnHomeRef = document.querySelector('[data-home]');
  btnHomeRef.addEventListener('click', onClickHome);
}

function onClickHome() {
  const currentCategory = localStorage.getItem('currentCategory');
  renderAllBookCategories();
}

function renderButton() {}
