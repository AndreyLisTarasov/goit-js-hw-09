function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', onClickStart);
stopBtnEl.addEventListener('click', onClickStop);

let timerId = null;
const PROMPT_DELAY = 1000;

function statusBtn(on, off) {
  stopBtnEl.disabled = on;
  startBtnEl.disabled = off;
}

function onClickStart() {
  statusBtn(false, true);
  timerId = setInterval(changeColor, PROMPT_DELAY);
}

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function onClickStop() {
  statusBtn(true, false);
  clearInterval(timerId);
}