const rex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  password: /^[0-9a-zA-Z]{4,}$/,
};

export function validation(el) {
  const nameForRex = el.dataset.required;
  if (!nameForRex) return true;

  return rex[nameForRex].test(el.value);
}
