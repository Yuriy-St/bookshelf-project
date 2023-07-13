import Notiflix from 'notiflix';
import Authentication from '../authentication';
import { closeSignUp } from './modalWindow';
import { saveSession } from '../storage/saveUser';
import { checkSession } from './checkSession';

const singUpForm = document.querySelector('#registration-form');

singUpForm.addEventListener('submit', async event => {
  event.preventDefault();

  const name = singUpForm['singup-name'].value;
  const email = singUpForm['singup-email'].value;
  const password = singUpForm['singup-password'].value;

  try {
    const auth = new Authentication({
      name: name,
      email: email,
      password: password,
    });

    const registerUser = await auth.registerUser();
    if (registerUser) {
      Notiflix.Notify.success('You have successfully registered!');
      event.target.reset();
      closeSignUp();
      saveSession(registerUser); //save session to localstorage

      checkSession(); //check session, add remove class on header elements
    }
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      Notiflix.Notify.failure('Sorry, email already in use. Try another email');
      event.target.reset();
    }
  }
});
