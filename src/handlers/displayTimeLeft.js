'use strict';

//let countdown;
const timerDisplay = document.querySelector('.display__time-left');
//const endTime = document.querySelector('.display__end-time');
//const buttons = document.querySelectorAll('[data-time]');



 export function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

