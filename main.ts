export {};

const workButton = document.getElementById("work");
const breakButton = document.getElementById("break");
const longBreakbutton = document.getElementById("long-break");
const display = document.querySelector(".timer");
const tickAudio = new Audio("beep-04.mp3");

let countdown: number;

function timer(seconds: number) {
  const timeNowInSeconds: number = Date.now();
  const then: number = timeNowInSeconds + seconds * 1000;
  clearInterval(countdown);
  displayTimeLeft(seconds);
  startCountdown(then);
}

function startCountdown(then: number) {
  countdown = setInterval(() => {
    const secondsLeft: number = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      tickAudio.play();
      return;
    } else displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds: number) {
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;

  if (remainingSeconds < 10) {
    display.textContent = `${minutes} : 0${remainingSeconds}`;
  } else remainingSeconds > 10;
  display.textContent = `${minutes} : ${remainingSeconds}`;
  document.title = display.textContent;
}

workButton.addEventListener("click", function () {
  timer(1500);
});

breakButton.addEventListener("click", function () {
  timer(300);
});

longBreakbutton.addEventListener("click", function () {
  timer(1800);
});
