import { handleSignInForm } from './handleSignInForm';
import { handleSignUpForm } from './handleSignUpForm';

const signUpForm = document.querySelector('#registration-form');
const signInForm = document.querySelector('#singin-form');

// handle sign-up
signUpForm.addEventListener('submit', event => {
  handleSignUpForm(event, signUpForm);
});

// handle sing-in
signInForm.addEventListener('submit', event => {
  handleSignInForm(event, signInForm);
});
