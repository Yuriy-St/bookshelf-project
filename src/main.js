import { renderCategoriesScrollbar } from './js/categories';
import renderCharityList from './js/charity/charityScrollContainer';
import * as themeSwitcher from './js/themeSwitcher';
import renderBestSellerBooks from './js/startPage/renderBestSellerBooks ';

const categoriesContainerRef = document.querySelector('.categories');
const userBlockRef = document.querySelector('.user-block');
const topBooksRef = document.querySelector('.bookshelf');

themeSwitcher.renderThemeSwitcher(userBlockRef);
themeSwitcher.restoreTheme();

renderCategoriesScrollbar(categoriesContainerRef);
renderBestSellerBooks(topBooksRef);
renderCharityList();

import renderBookModal from './js/shoppingList/modalBook'; //TODO remove, for testing only
renderBookModal('643282b1e85766588626a0b4'); //TODO remove, for testing only
