import { renderCategoriesScrollbar } from './js/categories';
import markupCharityList from './js/charity/charityScrollContainer';

const categoriesContainerRef = document.querySelector('.categories');

renderCategoriesScrollbar(categoriesContainerRef);
markupCharityList();
