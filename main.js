"use strict";
exports.__esModule = true;
var workButton = document.getElementById("work");
var breakButton = document.getElementById("break");
var longBreakbutton = document.getElementById("long-break");
var display = document.querySelector(".timer");
var tickAudio = new Audio("beep-04.mp3");
var countdown;
function timer(seconds) {
    clearInterval(countdown);
    var now = Date.now();
    var then = now + seconds * 1000;
    displayTimeLeft(seconds);
    countdown = setInterval(function () {
        var secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft < 0) {
            clearInterval(countdown);
            tickAudio.play();
            return;
        }
        displayTimeLeft(secondLeft);
    }, 1000);
}
function displayTimeLeft(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainderSeconds = seconds % 60;
    if (remainderSeconds < 10) {
        display.textContent = minutes + " : 0" + remainderSeconds;
    }
    else if (remainderSeconds > 10) {
        display.textContent = minutes + " : " + remainderSeconds;
    }
    document.title = display.textContent;
}
workButton.addEventListener("click", function (e) {
    timer(1500);
});
breakButton.addEventListener("click", function (e) {
    timer(300);
});
longBreakbutton.addEventListener("click", function (e) {
    timer(1800);
});
