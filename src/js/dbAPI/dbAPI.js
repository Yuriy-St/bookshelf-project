import Notiflix from 'notiflix';
import { getUserSession } from '../storage/saveUser';
import { getAuth } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  remove,
  child,
} from 'firebase/database';
const userSession = getUserSession();
const db = getDatabase();
// add Book to list
export async function addBookToList(item) {
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
    console.error('Error adding book to the list:', err);
    throw err;
  }
}
// get List of books
export async function getListOfBooks() {
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
export async function deleteBookFromList(id) {
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
    console.log('Books were deleted');
  } catch (err) {
    Notiflix.Notify.success('Error removing books!');
    console.error('Error removing books:', err);
    throw err;
  }
}








