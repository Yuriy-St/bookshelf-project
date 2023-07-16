import { initShoppingList } from "./initializationShoppingList";

// Pass the class name argument to the mainFuncRender() function.
export default function mainFuncRender(className) {
  const markupBookshelfSection = mainFuncMarkup();
  const mainBooksSection = document.querySelector('.' + className);
  mainBooksSection.innerHTML = markupBookshelfSection;
  initShoppingList();
};

function mainFuncMarkup() {
  const markupBooksSection = `
<section class="bookshelf">
  <h2 class="shoppinglist-title">
    Shopping<span class="shoppinglist-wrap">List</span>
  </h2>
  <ul id="booksContainer" class="shoppinglist-list"></ul>
  <div id="pagination" class="tui-pagination"></div>
</section>
`;
  return markupBooksSection;
};


