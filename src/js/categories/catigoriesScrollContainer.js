import * as booksAPI from '../booksAPI/booksApi';

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

export default async function renderListCategoriesMurkup() {
  const categoriesListEl = document.querySelector('.categories_list');
  categoriesListEl.innerHTML = '';
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
