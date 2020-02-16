const workButton = document.getElementById("work");
const breakButton = document.getElementById("break");
const longBreakbutton = document.getElementById("long-break");
const display = document.querySelector(".timer");
const tickAudio = new Audio("beep-04.mp3");

let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(countdown);
      tickAudio.play();
      return;
    }
    displayTimeLeft(secondLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  if (remainderSeconds < 10) {
    display.textContent = [minutes + " : " + "0" + remainderSeconds];
  } else if (remainderSeconds > 10) {
    display.textContent = [minutes + " : " + remainderSeconds];
  }
  document.title = display.textContent;
}

workButton.addEventListener("click", function(e) {
  timer(1500);
});

breakButton.addEventListener("click", function(e) {
  timer(300);
});

longBreakbutton.addEventListener("click", function(e) {
  timer(1800);
});
