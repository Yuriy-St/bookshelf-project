import Notiflix from 'notiflix';
import Authentication from '../authentication';
import { saveSession } from '../storage/saveUser';
import { closeSignIn } from './modalWindow';
import { checkSession } from './checkSession';

const singupForm = document.querySelector('#singin-form');

singupForm.addEventListener('submit', async event => {
  event.preventDefault();

  const email = singupForm['singin-email'].value;
  const password = singupForm['singin-password'].value;

  try {
    const auth = new Authentication({
      email: email,
      password: password,
    });

    const singInUser = await auth.signInUser();
    if (singInUser) {
      Notiflix.Notify.success('You have successfully login!');
      event.target.reset();
      closeSignIn();

      saveSession(singInUser); //save session to localstorage
      checkSession(); //check session, add remove class on header elements
    }
  } catch (err) {
    if (err.code === 'auth/wrong-password') {
      Notiflix.Notify.failure('Password incorrect');
    } else if (err.code === 'auth/user-not-found') {
      Notiflix.Notify.failure('User not found');
      event.target.reset();
    }
  }
});
