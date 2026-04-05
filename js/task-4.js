const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value.trim();
  const password = e.currentTarget.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log({ email, password });
  e.currentTarget.reset();
}
