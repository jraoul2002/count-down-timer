'use strict';

import {timer} from './timer.js';



export  let lolo = function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  }