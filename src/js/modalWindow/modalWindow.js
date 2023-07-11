const signUpHeaderEl = document.querySelector('#sign-up-header');
const signUpModalEl = document.querySelector('[data-modal-signUp]');
const signUpCloseModalEl = document.querySelector('[data-close-modal-signUp]');
const signInModalEl = document.querySelector('[data-modal-signIn]');
const signInCloseModalEl = document.querySelector('[data-close-modal-signIn]');
const signUpButtonEl = document.querySelector('#sign-up-button');
const signInButtonEl = document.querySelector('#sign-in-button');
const signUpButton2El = document.querySelector('#sign-up-button-2');
const signInButton2El = document.querySelector('#sign-in-button-2');

export function openSignUp() {
  signUpModalEl.classList.add('active');
  signUpButtonEl.classList.add('active');
  signUpButton2El.classList.add('active');
}

export function closeSignUp() {
  signUpModalEl.classList.remove('active');
  signUpButtonEl.classList.remove('active');
  signUpButton2El.classList.remove('active');
}

export function openSignIn() {
  signInModalEl.classList.add('active');
  signInButtonEl.classList.add('active');
  signInButton2El.classList.add('active');
}

export function closeSignIn() {
  signInModalEl.classList.remove('active');
  signInButtonEl.classList.remove('active');
  signInButton2El.classList.remove('active');
}

signUpHeaderEl.addEventListener('click', () => {
  openSignUp();
});

signUpCloseModalEl.addEventListener('click', () => {
  closeSignUp();
});

signUpButtonEl.addEventListener('click', () => {
  closeSignIn();
  openSignUp();
});

signInButtonEl.addEventListener('click', () => {
  closeSignUp();
  openSignIn();
});

signInButton2El.addEventListener('click', () => {
  closeSignUp();
  openSignIn();
});

signInCloseModalEl.addEventListener('click', () => {
  closeSignIn();
});

signUpModalEl.addEventListener('click', event => {
  const isBackdrop = event.target === signUpModalEl;
  if (isBackdrop) {
    closeSignUp();
  }
});

signInModalEl.addEventListener('click', event => {
  const isBackdrop = event.target === signInModalEl;
  if (isBackdrop) {
    closeSignIn();
  }
});

signUpButton2El.addEventListener('click', () => {
  closeSignIn();
  openSignUp();
});

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeSignUp();
    closeSignIn();
  }
});
