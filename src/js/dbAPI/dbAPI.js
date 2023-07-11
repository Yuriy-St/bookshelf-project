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

const auth = getAuth();
const db = getDatabase();

// add Book to list
export async function addBookToList(item) {
  const { _id, list_name, author, description, title, book_image, buy_links } =
    item;

  const userListRef = ref(db, `users/${auth.currentUser.uid}/list`);
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
    // add notify
    console.log('book was added ti the list');
  } catch (err) {
    console.error('Error adding book to the list:', err);
    // add notify
    throw err;
  }
}

// get List of books
export async function getListOfBooks() {
  try {
    const userListRef = ref(db, `users/${auth.currentUser.uid}/list`);
    const snapshot = await get(userListRef);

    if (snapshot !== null) {
      const userList = Object.values(snapshot.val());
      return userList;
    } else {
      return [];
    }
  } catch (err) {
    throw err;
    // add  notify .
  }
}

export async function deleteBookFromList(id) {
  try {
    const userListRef = ref(db, `users/${auth.currentUser.uid}/list`);
    const snapshot = await get(userListRef);

    snapshot.forEach(async el => {
      if (el.child('_id').val() === id) {
        const bookRef = child(userListRef, `${el.key}`);
        try {
          await remove(bookRef);
          console.log('Book was deleted');
        } catch (error) {
          console.error('Error removing book:', error);
        }
      }
    });
  } catch (err) {
    throw err;
  }
}
