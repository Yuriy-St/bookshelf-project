import axios from 'axios';

const BASE_API = 'https://books-backend.p.goit.global/books/';

export async function fetchCategories() {
  try {
    const response = await axios.get(`${BASE_API}/category-list`);
    return processResponse(response);
  } catch (err) {
    processError(err);
  }
}

export async function fetchTopBooks() {
  try {
    const response = await axios.get(`${BASE_API}/top-books`);
    return processResponse(response);
  } catch (err) {
    processError(err);
  }
}

export async function fetchBookCategory(category) {
  try {
    const response = await axios.get(
      `${BASE_API}/category?category=${category}`
    );
    return processResponse(response);
  } catch (err) {
    processError(err);
  }
}

export async function fetchBook(bookId) {
  try {
    const response = await axios.get(`${BASE_API}/${bookId}`);
    return processResponse(response);
  } catch (err) {
    processError(err);
  }
}

function processResponse(response) {
  try {
    if (response.status !== 200) throw response.data;
    return response.data;
  } catch (err) {
    processError(err);
  }
}

function processError(err) {
  const { response } = err;
  if (response?.data) throw { message: response.data };
  throw response || err;
}
