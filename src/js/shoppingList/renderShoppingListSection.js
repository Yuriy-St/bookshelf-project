import { initShoppingList } from './initializationShoppingList';
// Pass the class name argument to the mainFuncRender() function.

function mainFuncRender(className) {
  // const markupBookshelfSection = ;
  // const mainBooksSection = document.querySelector('.' + className);
  className.innerHTML = mainFuncMarkup();
  initShoppingList();
}

export default function renderShoppingListByUserClick(
  renderingPlase,
  clickedElement
) {
  clickedElement.addEventListener('click', () => {
    mainFuncRender(renderingPlase);
  });
}

function mainFuncMarkup() {
  return `
<section class="bookshelf">
  <ul id="booksContainer" class="shoppinglist-list"></ul>
  <div id="pagination" class="tui-pagination"></div>
</section>
`;
}
