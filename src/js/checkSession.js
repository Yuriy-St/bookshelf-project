import { getUserSession } from './storage/saveUser';

const menuListEl = document.querySelector('.menu-list');
const loginEl = document.querySelector('#sign-up-header-button');
const loginWrapperEl = document.querySelector('#login-wrapper');
const loginNameEl = document.querySelector('.login-name');

export function checkSession() {
  const session = getUserSession();

  if (session) {
    loginNameEl.textContent = session.user.displayName;

    menuListEl.classList.remove('hidden');
    loginWrapperEl.classList.remove('hidden');
    loginEl.classList.add('hidden');
  } else {
    menuListEl.classList.add('hidden');
    loginWrapperEl.classList.add('hidden');
    loginEl.classList.remove('hidden');
  }
}

checkSession();
