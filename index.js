// Don't forget .js file extension

import Timer from './timer.js';

const durationInput = document.querySelector('#duration_input');
const startButton = document.querySelector('#start_btn');
const pauseButton = document.querySelector('#pause_btn');
const watch = document.querySelector('#watch');

const watchRadius = parseFloat(watch.getAttribute('r'));
const watchPerimeter = 2 * watchRadius * Math.PI;
watch.setAttribute('stroke-dasharray', watchPerimeter);

let counter = 0;
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log('onStart: ');
    duration = totalDuration;
  },
  onTick() {
    console.log('onTick: ');
    watch.setAttribute(
      'stroke-dashoffset',
      (-watchPerimeter / (duration * 10)) * counter
    );
    counter++;
  },
  onComplete() {
    console.log('onComplete: ');
  },
});
