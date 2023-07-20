import Notiflix from 'notiflix';
import Authentication from '../../authentication';
import { saveSession } from '../../storage/saveUser';
import { checkSession } from '../../checkSession';
import { Modal } from '../modalWindow';

export const handleSignUpForm = async (event, signUpForm) => {
  const signUpModal = new Modal(document.querySelector('[data-modal-signUp]'));
  event.preventDefault();

  const name = signUpForm['singup-name'].value;
  const email = signUpForm['singup-email'].value;
  const password = signUpForm['singup-password'].value;

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
      signUpModal.backdropClose(); //close modal
      saveSession(registerUser); //save session to local storage

      checkSession(); //check session, add remove class on header elements
    }
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      Notiflix.Notify.failure('Sorry, email already in use. Try another email');
      event.target.reset();
    }
  }
};
