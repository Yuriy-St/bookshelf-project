import axios from 'axios';

const BASE_API = 'https://books-backend.p.goit.global/books/';

export async function fetchCategories() {
  const response = await axios.get(`${BASE_API}/category-list`);

  return response.data;
}

export async function fetchTopBooks() {
  const response = await axios.get(`${BASE_API}/top-books`);

  return response.data;
}

export async function fetchBookCategory(category) {
  const response = await axios.get(`${BASE_API}/category?category=${category}`);

  return response.data;
}

export async function fetchBook(bookId) {
  const response = await axios.get(`${BASE_API}/${bookId}`);

  return response.data;
}
