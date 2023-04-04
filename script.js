const timerEl = document.querySelector('.timer');
let intervalId;
let timerPaused = true;
let minutes = 0;
let seconds = 0;

function startTimer() {
  if (timerPaused) {
    timerPaused = false;
    intervalId = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  if (!timerPaused) {
    timerPaused = true;
    clearInterval(intervalId);
  }
}

function stopTimer() {
  timerPaused = true;
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  if (minutes === 99 && seconds === 59) {
    stopTimer();
  } else {
    if (seconds === 59) {
      seconds = 0;
      minutes++;
    } else {
      seconds++;
    }
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  const displayMinutes = String(minutes).padStart(2, '0');
  const displaySeconds = String(seconds).padStart(2, '0');
  timerEl.textContent = `${displayMinutes}:${displaySeconds}`;
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service worker registered:', registration);
      })
      .catch(error => {
        console.log('Service worker registration failed:', error);
      });
  });
}
//const eventSource = new EventSource('http://localhost:5000');

/*
document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyS') {
    startTimer();
  } else if (event.code === 'KeyP') {
    pauseTimer();
  } else if (event.code === 'KeyT') {
    stopTimer();
  }
});

source.addEventListener('start', function(event) {
  startTimer(); // вызываем функцию startTimer при получении события
});

source.addEventListener('stop', function(event) {
  stopTimer(); // вызываем функцию startTimer при получении события
});

source.addEventListener('pause', function(event) {
  pauseTimer(); // вызываем функцию startTimer при получении события
});

source.addEventListener('error', function(event) {
console.error('SSE Error', event);
});
*/

// Connect to the WebSocket server
//const socket = new WebSocket('ws://192.168.1.69:4000');
/*
socket.addEventListener('open', () => {
  console.log('WebSocket connection established.');
});

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);

  // Handle incoming OSC commands
  switch (message.address) {
    case '/timer/start':
      startTimer();
      break;
    case '/timer/pause':
      pauseTimer();
      break;
    case '/timer/stop':
      stopTimer();
      break;
    default:
      console.log(`Unknown OSC command received: ${message.address}`);
      break;
  }
});

socket.addEventListener('close', () => {
  console.log('WebSocket connection closed.');
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});
*/