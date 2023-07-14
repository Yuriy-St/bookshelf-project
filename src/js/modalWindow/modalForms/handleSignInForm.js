import Notiflix from 'notiflix';
import Authentication from '../../authentication';
import { saveSession } from '../../storage/saveUser';
import { checkSession } from '../../checkSession';
import { Modal } from '../modalWindow';

export const handleSignInForm = async (event, signInForm) => {
  const signInModal = new Modal(document.querySelector('[data-modal-signIn]'));
  event.preventDefault();

  const email = signInForm['singin-email'].value;
  const password = signInForm['singin-password'].value;

  try {
    const auth = new Authentication({
      email: email,
      password: password,
    });

    const singInUser = await auth.signInUser();
    if (singInUser) {
      Notiflix.Notify.success('You have successfully login!');
      event.target.reset();
      signInModal.close();

      saveSession(singInUser);
      checkSession();
    }
  } catch (err) {
    if (err.code === 'auth/wrong-password') {
      Notiflix.Notify.failure('Password incorrect');
    } else if (err.code === 'auth/user-not-found') {
      Notiflix.Notify.failure('User not found');
      event.target.reset();
    }
  }
};
