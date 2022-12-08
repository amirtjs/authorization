function addToBodyContainer() {
  if (document.querySelector('.container-alert')) {
    return document.querySelector('.container-alert');
  }
  const template = `
  <div class="container-alert" style="position: fixed; top: 10px; right: 10px; z-index: 99;"></div>
  `;
  document.querySelector('body').insertAdjacentHTML('afterbegin', template);
  return document.querySelector('.container-alert');
}

function alertTemplate(msg, className, index) {
  return `
  <div class="alert ${className}"  data-index=${index} 
  role="alert">
    ${msg}
  </div>
  `;
}

function getAlertIndex() {
  const count = document.querySelectorAll('.alert').length;
  if (!count) {
    return 0;
  }

  return count;
}

export function deleteAlert(indexAlert) {
  const container = addToBodyContainer();
  let alert;
  if (indexAlert === undefined) {
    alert = document.querySelector('.alert');

    container.remove(alert);
    return;
  }

  alert = document.querySelector(`[data-index="${indexAlert}"]`);

  container.removeChild(alert);
}

export function alert(
  classList = 'alert-info',
  msg = 'info message',
  timeout = 1500
) {
  const container = addToBodyContainer();
  const index = getAlertIndex();

  const template = alertTemplate(msg, classList, index);
  container.insertAdjacentHTML('afterbegin', template);

  setTimeout(() => {
    deleteAlert(index);
  }, timeout);
}
