const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startStop = document.getElementById("start-stop");
const edit = document.getElementById("edit");
const editIcon = document.getElementById("edit-icon");
const border = document.getElementById("border");
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

edit.addEventListener("click", () => {
  if (editIcon.src.includes("gear")) {
    editIcon.src = "/assets/images/check.svg";
    minutes.contentEditable = true;
    seconds.contentEditable = true;
    minutes.classList.add("edit-time");
    seconds.classList.add("edit-time");
    startStop.classList.add("hide-button");
    border.classList.add("edit-time-border");
    startStop.disabled = true;
  } else if (
    editIcon.src.includes("check") &&
    Number(minutes.innerHTML) < 60 &&
    Number(seconds.innerHTML) < 60
  ) {
    editIcon.src = "/assets/images/gear.svg";
    minutes.contentEditable = false;
    seconds.contentEditable = false;
    minutes.classList.remove("edit-time");
    seconds.classList.remove("edit-time");
    startStop.classList.remove("hide-button");
    border.classList.remove("edit-time-border");
    startStop.disabled = false;
    time = Number(minutes.innerHTML) * 60 + Number(seconds.innerHTML);
  }
});
