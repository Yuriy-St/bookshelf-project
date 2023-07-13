import renderHeader from './js/header/header';
import { renderCategoriesScrollbar } from './js/categories';
import renderCharityList from './js/charity/charityScrollContainer';
import renderBestSellerBooks from './js/startPage/renderBestSellerBooks ';

const categoriesContainerRef = document.querySelector('.categories');
const topBooksRef = document.querySelector('.bookshelf');

renderHeader();

renderCategoriesScrollbar(categoriesContainerRef);
renderBestSellerBooks(topBooksRef);
renderCharityList();
// test;
