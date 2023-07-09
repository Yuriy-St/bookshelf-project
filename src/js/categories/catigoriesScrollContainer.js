import * as booksAPI from '../booksAPI/booksApi';
import { markupBookCard } from '../bookCard/bookCard';

const categoriesContainerRef = document.querySelector('.categories');
categoriesContainerRef.innerHTML =
  '<ul class="categories_list"><li class="categories_list--item current">All categories</li></ul>';
const categoriesListEl = document.querySelector('.categories_list');
const bookShelfEl = document.querySelector('.bookshelf');

categoriesListEl.addEventListener('click', onCategoryClick);

async function fetchCategories() {
  try {
    const categories = await booksAPI.fetchCategories();
    categories.sort((firstName, secondName) =>
      firstName.list_name.localeCompare(secondName.list_name)
    );

    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function renderListCategoriesMurkup() {
  try {
    const categories = await fetchCategories();
    categories.forEach(category =>
      categoriesListEl.insertAdjacentHTML(
        'beforeend',
        `<li class="categories_list--item">${category.list_name}</li>`
      )
    );
  } catch (error) {
    console.log(error);
  }
}

// renderListCategoriesMurkup();

async function onCategoryClick(event) {
  if (event.target === categoriesListEl) return;

  toggleCurrentCategoryColor(event.target);

  let category = await booksAPI.fetchBookCategory(event.target.textContent);

  const categoryBooksArray = category.map(book => {
    let bookId = book._id;
    let bookAuthorName = book.author;
    let bookImage = book.book_image;
    let bookTitle = book.title;

    return { bookId, bookImage, bookAuthorName, bookTitle };
  });

  clearBookshelf(event.target.textContent);
  const bookshelfListRef = document.querySelector('.bookshelf_category--list');

  categoryBooksArray.map(book =>
    bookshelfListRef.insertAdjacentHTML('beforeend', markupBookCard(book))
  );
}

function clearBookshelf(simpleCategoryName) {
  let finalCategoryName = simpleCategoryName.split(' ');

  bookShelfEl.innerHTML = `<h1 class="bookshelf_category--title">${finalCategoryName
    .slice(0, finalCategoryName.length - 1)
    .join(' ')} <span class="blue-last-word">${finalCategoryName.slice(
    -1
  )}</span></h1><ul class="bookshelf_category--list" ></ul>`;
}

function toggleCurrentCategoryColor(clickedCategory) {
  let currentCategory = document.querySelector('.current');
  currentCategory.classList.remove('current');
  clickedCategory.classList.add('current');
}
