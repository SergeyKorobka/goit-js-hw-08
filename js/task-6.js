const refs = {
  squareOutput: document.querySelector('.square-output'),
  inputSquare: document.querySelector('.input-square'),
  btnCreate: document.querySelector('.create-square'),
  btnDestroy: document.querySelector('.destroy-square'),
};
let size = 30;

refs.btnCreate.addEventListener('click', onBtnCreate);
refs.btnDestroy.addEventListener('click', onBtnDestroy);

function onBtnCreate() {
  const qty = Number(refs.inputSquare.value);

  if (qty <= 0) {
    alert('Quantity Must Be Greater Than 0');
    return;
  }

  const arr = [];

  for (let i = 1; i <= qty; i += 1) {
    arr.push(createSquare(size));
    size += 10;
  }

  refs.squareOutput.append(...arr);
}

function onBtnDestroy() {
  refs.squareOutput.innerHTML = '';
  size = 30;
}

function createSquare(size) {
  const div = document.createElement('div');
  div.style.width = div.style.height = size + 'px';
  div.style.backgroundColor = getRandomHexColor();
  return div;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
