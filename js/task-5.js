const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  outputColor: document.querySelector('.color'),
  body: document.body,
};

refs.changeColorBtn.addEventListener('click', onchangeColorBtn);

function onchangeColorBtn() {
  refs.body.style.backgroundColor = refs.outputColor.textContent =
    getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
