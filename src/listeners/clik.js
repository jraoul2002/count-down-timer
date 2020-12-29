'use strict';

import { startTimer } from '../handlers/startTimer.js';


//let countdown;
//const timerDisplay = document.querySelector('.display__time-left');
//const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

buttons.forEach(button => button.addEventListener('click', startTimer));
