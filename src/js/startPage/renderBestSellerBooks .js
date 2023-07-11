import {
  renderBookshelf,
  collectCategoryBooks,
  markupBookshelfTitle,
  markupBookList,
} from '../categories/renderBookshelf';
import { fetchTopBooks } from '../booksAPI/booksApi';
import { onClickCategory } from '../categories/renderCategoriesScrollbar';

export default async function renderBestSellerBooks(parentRef) {
  parentRef.innerHTML = markupBookshelfTitle('Best Seller Books');

  parentRef.insertAdjacentHTML('beforeend', await markupCategoriesBestBooks());

  addButtonListeners();
}

async function fetchTopBooksData() {
  try {
    const categories = await fetchTopBooks();
    return categories;
  } catch (error) {
    console.error('Error fetching top books:', error);
    return [];
  }
}

async function markupCategoriesBestBooks() {
  const categories = await fetchTopBooksData();

  return categories
    .map(category => {
      const book = category.books[0];
      const categoryName = book.list_name;
      const booksArray = collectCategoryBooks(category.books);
      const bestbooksCategoryList = markupBookList(booksArray);

      return `
        <div class="bestbooks_category--container">
          <h2 class="bestbooks_category--name">${categoryName}</h2>
          ${bestbooksCategoryList}
          <button type="button" class="button-brand-ghost button" data-categoryname="${categoryName}">
            SEE MORE
          </button>
        </div>
      `;
    })
    .join('');
}

function addButtonListeners() {
  const buttonsArray = document.querySelectorAll('.button-brand-ghost');
  buttonsArray.forEach(button =>
    button.addEventListener('click', onClickCategory)
  );
}
