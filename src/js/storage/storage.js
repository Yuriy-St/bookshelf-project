// get initial values
let list = [];

// check data from localSrotage
if (localStorage.getItem('list')) {
  list = JSON.parse(localStorage.getItem('list'));
}

// add list of books to localStorage
export function addListToLocalStorage(item) {
  const { _id, list_name, author, description, book_image, buy_links } = item;

  // check dublicate item in localStorage
  if (list.some(el => el._id === _id)) {
    return;
  }

  list.push({ _id, list_name, author, description, book_image, buy_links });
  localStorage.setItem('list', JSON.stringify(list));
}

// get data from localStorage
export function getListFromLocalStorage() {
  try {
    const list = localStorage.getItem('list');
    return list ? JSON.parse(list) : [];
  } catch (err) {
    console.log(err);
  }
}

// remove item from localStorage
export function removeItemFromLocalStorage(id) {
  try {
    list = list.filter(el => el._id !== id);
    localStorage.setItem('list', JSON.stringify(list));
  } catch (err) {
    console.log(err);
  }
}
