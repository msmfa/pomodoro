"use strict";
exports.__esModule = true;
var workButton = document.getElementById("work");
var breakButton = document.getElementById("break");
var longBreakbutton = document.getElementById("long-break");
var display = document.querySelector(".timer");
var tickAudio = new Audio("beep-04.mp3");
var countdown;
function timer(seconds) {
    var timeNowInSeconds = Date.now();
    var then = timeNowInSeconds + seconds * 1000;
    clearInterval(countdown);
    displayTimeLeft(seconds);
    startCountdown(then);
}
function startCountdown(then) {
    countdown = setInterval(function () {
        var secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            tickAudio.play();
            return;
        }
        else
            displayTimeLeft(secondsLeft);
    }, 1000);
}
function displayTimeLeft(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        display.textContent = minutes + " : 0" + remainingSeconds;
    }
    else
        remainingSeconds > 10;
    display.textContent = minutes + " : " + remainingSeconds;
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
