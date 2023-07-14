import { Modal } from './modalWindow';

const signUpHeaderEl = document.querySelector('#sign-up-header-button');

const signUpModal = new Modal(document.querySelector('[data-modal-signUp]'));
const signInModal = new Modal(document.querySelector('[data-modal-signIn]'));

// header sign-up button, open modal
signUpHeaderEl.addEventListener('click', event => {
  signUpModal.open();
});

// close btn sign-up
signUpModal.modalElement.firstElementChild.children[0].addEventListener(
  'click',
  () => {
    signUpModal.close();
  }
);

// close btn sign-in
signInModal.modalElement.firstElementChild.children[0].addEventListener(
  'click',
  () => {
    signInModal.close();
  }
);

// open signIn from sign-up
signUpModal.modalElement.lastElementChild.children[1][5].addEventListener(
  'click',
  () => {
    signUpModal.close();
    signInModal.open();
  }
);

// open signUp modal from sign-in
console.dir(signInModal.modalElement.lastElementChild.children[1][3]);
signInModal.modalElement.lastElementChild.children[1][3].addEventListener(
  'click',
  () => {
    signInModal.close();
    signUpModal.open();
  }
);

// close modal to escape
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    signInModal.close();
    signUpModal.close();
  }
});
