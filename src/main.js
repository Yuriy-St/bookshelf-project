import renderHeader from './js/header/header';
import { renderCategoriesScrollbar } from './js/categories';
import renderCharityList from './js/charity/charityScrollContainer';
import renderBestSellerBooks from './js/startPage/renderBestSellerBooks ';
import renderShoppingListByUserClick from './js/shoppingList/renderShoppingListSection';

const categoriesContainerRef = document.querySelector('.categories');
const topBooksRef = document.querySelector('.bookshelf');
const mainContainer = document.querySelector('main .container');

renderHeader();

const shoppingListButton = document.querySelector('[data-shoppinglist]');

renderShoppingListByUserClick(mainContainer, shoppingListButton);
renderCategoriesScrollbar(categoriesContainerRef);
renderBestSellerBooks(topBooksRef);
renderCharityList();
// test;
