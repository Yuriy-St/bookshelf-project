import Notiflix from 'notiflix';
import { getUserSession } from '../storage/saveUser';
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  remove,
  child,
} from 'firebase/database';
const db = getDatabase();

// add Book to list
export async function addBookToList(item) {
  const userSession = getUserSession();
  if (!userSession) return;
  const { _id, list_name, author, description, title, book_image, buy_links } =
    item;
  const userListRef = ref(db, `users/${userSession.user.uid}/list`);
  const newBookRef = push(userListRef);
  try {
    await set(newBookRef, {
      _id,
      list_name,
      author,
      description,
      title,
      book_image,
      buy_links,
    });
    Notiflix.Notify.success('Book was added ti the list.');
  } catch (err) {
    Notiflix.Notify.success('Error adding book to the list!');
    throw err;
  }
}
// get List of books
export async function getListOfBooks() {
  const userSession = getUserSession();
  try {
    const userListRef = ref(db, `users/${userSession.user.uid}/list`);
    const snapshot = await get(userListRef);
    if (snapshot !== null) {
      const userList = Object.values(snapshot.val());
      return userList;
    } else {
      return [];
    }
  } catch (err) {
    Notiflix.Notify.success('The shopping list is empty!');
    throw err;
  }
}

// delete book from list
export async function deleteBookFromList(id) {
  const userSession = getUserSession();
  try {
    const userListRef = ref(db, `users/${userSession.user.uid}/list`);
    const snapshot = await get(userListRef);
    const deletePromises = [];
    snapshot.forEach(el => {
      if (el.child('_id').val() === id) {
        const bookRef = child(userListRef, `${el.key}`);
        const deletePromise = remove(bookRef);
        deletePromises.push(deletePromise);
      }
    });
    await Promise.all(deletePromises);
    Notiflix.Notify.success('Books were deleted.');
  } catch (err) {
    Notiflix.Notify.failure('Error removing books!');
    throw err;
  }
}

export async function getBookFromList(id) {
  const userSession = getUserSession();
  if (!userSession) return;
  try {
    const userListRef = ref(db, `users/${userSession.user.uid}/list`);

    const snapshot = await get(userListRef);
    if (snapshot.val() !== null) {
      const foundBook = Object.values(snapshot.val()).find(el => el._id === id);
      return foundBook ? foundBook : null;
    }
    return null;
  } catch (err) {
    Notiflix.Notify.failure('Error getting book');
    throw err;
  }
}
