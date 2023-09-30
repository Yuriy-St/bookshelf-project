import { Modal } from './modalWindow';

const signUpHeaderEl = document.querySelector('#sign-up-header-button');

const signUpModal = new Modal(document.querySelector('[data-modal-signUp]'));
const signInModal = new Modal(document.querySelector('[data-modal-signIn]'));
const cardPopUpBackdrop = document.querySelector('.card-backdrop');

const signInButton = document.querySelector('#sign-in-button');
const signUpButton = document.querySelector('#sign-up-button');

// header sign-up button, open modal
signUpHeaderEl.addEventListener('click', event => {
  signUpModal.backdrop();
  signUpModal.open();
});

// close btn sign-up
signUpModal.modalElement.firstElementChild.children[0].addEventListener(
  'click',
  () => {
    signUpModal.backdrop();
    signUpModal.close();
  }
);

// close btn sign-in
signInModal.modalElement.firstElementChild.children[0].addEventListener(
  'click',
  () => {
    signUpModal.backdrop();
    signInModal.close();
  }
);

// close btn card-pop-up-modal || need fix
cardPopUpBackdrop.addEventListener('click', event => {
  const targetElement = event.target.closest('div');
  const cardPopUpModal = new Modal(document.querySelector('[data-modal-card]'));

  // get cross button
  if (
    targetElement &&
    targetElement.firstElementChild.classList.contains('close-button')
  ) {
    cardPopUpModal.close();
    cardPopUpModal.backdropClose();
  }

  return;
});

// open signIn from sign-up
signInButton.addEventListener('click', () => {
  signUpModal.close();
  signInModal.open();
});

// open signUp modal from sign-in
signUpButton.addEventListener('click', () => {
  signInModal.close();
  signUpModal.open();
});

// close modal to escape
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    signInModal.close();
    signUpModal.close();
    signUpModal.backdropClose();

    try {
      const cardPopUpModal = new Modal(
        document.querySelector('[data-modal-card]')
      );

      cardPopUpModal.backdropClose();
    } catch (err) {
      throw err;
    }
  }
});
