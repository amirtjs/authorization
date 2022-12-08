export function showError(el) {
  const parent = el.parentElement;
  if (parent.querySelector('.invalid-feedback')) return;
  const msg = el.dataset.invalidMessage || 'invalid input';
  const template = templete(msg);
  el.classList.add('is-invalid');

  parent.insertAdjacentHTML('beforeend', template);
}

function templete(msg) {
  const templete = `
  <div class="invalid-feedback">
    ${msg}
  </div>
  `;
  return templete;
}

export function removeError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback');
  if (!err) return;
  el.classList.remove('is-invalid');
  parent.removeChild(err);
}
