import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
require("flatpickr/dist/themes/dark.css");


const startBtnEl = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const leftDays = document.querySelector('[data-days]');
const leftHours = document.querySelector('[data-hours]');
const leftMinutes = document.querySelector('[data-minutes]');
const leftSeconds = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', onStartClick);

startBtnEl.disabled = true;
const PROMPT_DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates < Date.now()) {      
      startBtnEl.disabled = true;
      contentTimeLasted();
      return alert('Please choose a date in the future');
    }
      startBtnEl.disabled = false;
  },
};

flatpickr(input, options);
const timeFlat = new flatpickr(input, options); 

function contentTimeLasted({
  days = '00',
  hours = '00',
  minutes = '00',
  seconds = '00',
} = {}) {
  leftDays.textContent = days;
  leftHours.textContent = hours;
  leftMinutes.textContent = minutes;
  leftSeconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onStartClick() {
  const  intervalId = setInterval(() => {
    const timeValue = timeFlat.selectedDates[0].getTime() - Date.now();

    if (timeValue <= 500) {
      clearInterval(intervalId);
      return;
    }

    const timeObject = convertMs(timeValue);    
    contentTimeLasted(timeObject, addLeadingZero);
  }, PROMPT_DELAY);
}
