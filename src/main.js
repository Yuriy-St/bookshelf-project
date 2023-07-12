import './js/mobileMenu/mobileMenu'; // TODO remove, just for test and style settings
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
