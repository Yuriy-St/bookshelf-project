import { fetchBookById } from '../booksAPI/booksApi';
import {
  addBookToList,
  deleteBookFromList,
  getBookFromList,
} from '../dbAPI/dbAPI';
import Notiflix from 'notiflix';
import { getUserSession } from '../storage/saveUser';
import markupCardModal from './markupCardModal';
import openCardModal from './openCardModal';
import initCardButton from './initCardModalButtons';

const bookShelfEl = document.querySelector('#bookshelf');
const cardBackdrop = document.querySelector('.card-backdrop');

// check user auth before add card to shopping list
const checkUserAuth = async () => {
  const userSession = getUserSession();

  if (!userSession) {
    Notiflix.Notify.failure(
      'Please, sing-in to add the book to the shopping list'
    );
    return;
  }
};

// handle buttons
const handleButtons = book => {
  const buttonWrapperEl = document.querySelector('.card-button-wrapper');
  const { _id } = book;

  buttonWrapperEl.addEventListener('click', async event => {
    checkUserAuth();
    if (event.target.nodeName !== 'BUTTON') return;

    if (event.target.classList.contains('card-button-add')) {
      await addBookToList(book);
      reRenderButtons(_id);
      return;
    }

    if (event.target.classList.contains('card-button-remove')) {
      await deleteBookFromList(_id);
      reRenderButtons(_id);
      return;
    }
  });
};

// re-render buttons after actions
const reRenderButtons = async id => {
  const bookFromDB = await getBookFromList(id);
  initCardButton(bookFromDB);
};

// handle book-list
bookShelfEl.addEventListener('click', async event => {
  const targetElement = event.target.closest('li');
  const isQuickView = event.target.closest('.quick-view');

  if (isQuickView && targetElement.classList.contains('book_card')) {
    const book = await fetchBookById(targetElement.dataset.bookid);
    cardBackdrop.innerHTML = markupCardModal(book);

    // render buttons
    const bookFromDB = await getBookFromList(targetElement.dataset.bookid);
    initCardButton(bookFromDB);

    // open modal
    openCardModal();

    // handle buttons, add and remove
    handleButtons(book);
  }
});
