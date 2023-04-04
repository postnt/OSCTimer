const udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 5000,
});

udpPort.on("message", (oscMsg) => {
  const address = oscMsg.address;

  switch (address) {
    case "/timer/start":
      startTimer();
      break;
    case "/timer/pause":
      pauseTimer();
      break;
    case "/timer/stop":
      stopTimer();
      break;
    default:
      console.log("Unknown OSC message received: ", address);
  }
});

udpPort.open();

function startTimer() {
  console.log("Timer started");
  // выполнить действия для запуска таймера
}

function pauseTimer() {
  console.log("Timer paused");
  // выполнить действия для остановки таймера
}

function stopTimer() {
  console.log("Timer stopped");
  // выполнить действия для паузы таймера
}
