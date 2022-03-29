const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startStop = document.getElementById("start-stop");
const initialTime = Number(minutes.innerHTML) * 60 + Number(seconds.innerHTML);

let time = initialTime;
let intervalID;

const startTimer = () => {
  intervalID = setInterval(updateTimer, 1000);
};

const stopTimer = () => {
  clearInterval(intervalID);
};

const updateTimer = () => {
  const minutesRemaining = Math.floor(time / 60) % 60;
  const secondsRemaining = time % 60;
  minutes.innerHTML =
    minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
  seconds.innerHTML =
    secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
  time--;
  if (time < 0) {
    stopTimer();
  }
};

startStop.addEventListener("click", () => {
  if (startStop.innerHTML === "Start") {
    startTimer();
    startStop.innerHTML = "Stop";
  } else if (startStop.innerHTML === "Stop") {
    stopTimer();
    startStop.innerHTML = "Start";
  }
});
