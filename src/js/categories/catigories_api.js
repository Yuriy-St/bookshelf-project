import axios from 'axios';

const BASE_API = 'https://books-backend.p.goit.global/books/category-list';

export default async function fechCategories() {
  const response = await axios.get(BASE_API);

  return response.data;
}
