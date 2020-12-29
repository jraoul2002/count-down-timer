'use strict';

import {timer} from './timer.js'

//let countdown;
//const timerDisplay = document.querySelector('.display__time-left');
//const endTime = document.querySelector('.display__end-time');
//const buttons = document.querySelectorAll('[data-time]');



export  function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  }