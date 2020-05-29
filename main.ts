export {};
const workButton = document.getElementById("work");
const breakButton = document.getElementById("break");
const longBreakbutton = document.getElementById("long-break");
const display = document.querySelector(".timer");
const tickAudio = new Audio("beep-04.mp3");

let countdown: number;

function timer(seconds: number) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondLeft: number = Math.round((then - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(countdown);
      tickAudio.play();
      return;
    }
    displayTimeLeft(secondLeft);
  }, 1000);
}

function displayTimeLeft(seconds: number) {
  const minutes: number = Math.floor(seconds / 60);
  const remainderSeconds: number = seconds % 60;
  if (remainderSeconds < 10) {
    display.textContent = `${minutes} : 0${remainderSeconds}`;
  } else if (remainderSeconds > 10) {
    display.textContent = `${minutes} : ${remainderSeconds}`;
  }
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
