class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    console.log('Starting Timer');
    console.log(this);
    this.intervalId = setInterval(this.tick, 1000);
    console.log(this.intervalId);
  };

  pause = () => {
    console.log('Pausing the Timer');
    clearInterval(this.intervalId);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  get timeRemaining() {
    return parseInt(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration_input');
const startButton = document.querySelector('#start_btn');
const pauseButton = document.querySelector('#pause_btn');

const timer = new Timer(durationInput, startButton, pauseButton);
