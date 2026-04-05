const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInput);

function onInput(e) {
  const inputValue = e.currentTarget.value.trim() || 'Anonymous';

  refs.output.textContent = inputValue;
}
