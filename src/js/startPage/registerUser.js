import Authentication from './authentication';

const singupForm = document.querySelector('#registration-form');

singupForm.addEventListener('submit', async event => {
  event.preventDefault();

  const name = singupForm['singup-name'].value;
  const email = singupForm['singup-email'].value;
  const password = singupForm['singup-password'].value;

  const auth = new Authentication({
    name: name,
    email: email,
    password: password,
  });

  const registerUser = await auth.registerUser();
  if (registerUser) {
    // console.log(registerUser);
    // Обработать Notify
  }
});
