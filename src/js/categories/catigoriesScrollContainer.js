import { fetchCategories } from '../booksAPI/books_api';

const categoriesListEl = document.querySelector('.categories_list');

export default async function renderScrollListCategories() {
  try {
    const categories = await fetchCategories();
    categories.sort((firstName, secondName) =>
      firstName.list_name.localeCompare(secondName.list_name)
    );

    categories.map(category =>
      categoriesListEl.insertAdjacentHTML(
        'beforeend',
        `<li class="categories_list--item">${category.list_name}</li>`
      )
    );
  } catch (error) {
    console.log(error);
  }
}
