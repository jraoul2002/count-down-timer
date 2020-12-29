'use strict';


//let countdown;
//const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
//const buttons = document.querySelectorAll('[data-time]');

export function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }