import Notiflix from 'notiflix';
import Authentication from './authentication';
import { removeSession } from './storage/saveUser';
import { checkSession } from './checkSession';

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
  try {
    const auth = new Authentication({
      name: 'some name',
      email: 'example@example.com',
      password: 'password123',
    });

    const isLogout = await auth.logout();
    if (isLogout) {
      Notiflix.Notify.success('You have successfully logout');

      removeSession();
      checkSession(); //check session, add remove class on header elements

      redirectAfterLogout();
    }
  } catch (err) {
    throw err;
  }
});

function redirectAfterLogout() {
  window.location.href = '/bookshelf-project/';
}
