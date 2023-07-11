import Notiflix from 'notiflix';
import Authentication from '../authentication';
import { closeModal } from './modalWindow';

const singupForm = document.querySelector('#registration-form');

singupForm.addEventListener('submit', async event => {
  event.preventDefault();

  const name = singupForm['singup-name'].value;
  const email = singupForm['singup-email'].value;
  const password = singupForm['singup-password'].value;

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
      closeModal();
    }
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      Notiflix.Notify.failure('Sorry, email already in use. Try another email');
      event.target.reset();
    }
  }
});
