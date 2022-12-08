import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

import form from './config/ui';
import { validation } from './helpers/validait';
import { showError, removeError } from './views/form';
import { login } from './services/auth.service';
import { alert, deleteAlert } from './views/notification';

const { email, password, btn, formLogin } = form;
const inputs = [email, password];

inputs.forEach((el) => {
  el.addEventListener('focus', function (e) {
    removeError(el);
  });
});

formLogin.addEventListener('submit', function (e) {
  e.preventDefault();

  try {
    submit();
  } catch (e) {
    console.log(e);
  }
});

async function submit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validation(el);
    if (!isValidInput) showError(el);
    return isValidInput;
  });
  if (!isValidForm) return;

  try {
    const data = await login(email.value, password.value);

    if (!data) {
      alert('alert-danger', 'Login faild', 3000);
    }
    alert('alert-success', 'Login success', 1500);
    email.value = '';
    password.value = '';
  } catch (err) {
    alert('alert-danger', 'Login faild', 2000);
    console.log('err', err);
  }
}
