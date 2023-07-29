import { getUserSession } from './storage/saveUser';

const menuListEls = document.querySelectorAll('.menu-list');
const loginEls = document.querySelectorAll('#sign-up-header-button');
const loginWrapperEls = document.querySelectorAll('#login-wrapper');
const loginNameEls = document.querySelectorAll('.login-name');

export function checkSession() {
  const session = getUserSession();

  if (session) {
    [...loginNameEls].map(
      loginNameEl => (loginNameEl.textContent = session.user.displayName)
    );

    showUserMenu();
  } else {
    showLogin();
  }
}

function showUserMenu() {
  toggleEls(menuListEls, show);
  toggleEls(loginWrapperEls, show);
  toggleEls(loginEls, hide);
}

function showLogin() {
  toggleEls(menuListEls, hide);
  toggleEls(loginWrapperEls, hide);
  toggleEls(loginEls, show);
}

function hide(el) {
  el.classList.add('hidden');
}

function show(el) {
  el.classList.remove('hidden');
}

function toggleEls(elements, method) {
  [...elements].map(el => method(el));
}

checkSession();
