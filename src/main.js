import { renderCategoriesScrollbar } from './js/categories';
import renderCharityList from './js/charity/charityScrollContainer';
import * as themeSwitcher from './js/themeSwitcher';

const categoriesContainerRef = document.querySelector('.categories');
const userBlockRef = document.querySelector('.user-block');

themeSwitcher.renderThemeSwitcher(userBlockRef);
themeSwitcher.restoreTheme();

renderCategoriesScrollbar(categoriesContainerRef);
renderCharityList();
