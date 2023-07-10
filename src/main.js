import { renderCategoriesScrollbar } from './js/categories';
import renderCharityList from './js/charity/charityScrollContainer';

const categoriesContainerRef = document.querySelector('.categories');

renderCategoriesScrollbar(categoriesContainerRef);
renderCharityList();
