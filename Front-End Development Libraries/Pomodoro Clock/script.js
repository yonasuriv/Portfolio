"use strict";

/**
 **
 ** logic for handling time settings for break and work sessions
 **
 **
 */
var increaseTime = document.getElementsByClassName('increase'),
  decreaseTime = document.getElementsByClassName('decrease'),
  breakDuration = document.getElementsByClassName('breakDuration')[0],
  sessionDuration = document.getElementsByClassName('sessionDuration')[0];

// adding event listener to + and - buttons.
// increasing/decreasing number by 1 and keeping it between 0 and 50
for (var i = 0; i < increaseTime.length; i++) {
  increaseTime[i].addEventListener('click', function(e) {
    var lastNumber = e.target.previousSibling.previousSibling.innerHTML;
    if (lastNumber >= 0 && lastNumber < 50) {
      e.target.previousSibling.previousSibling.innerHTML = parseInt(lastNumber) + 1;
    } else {
      e.target.previousSibling.previousSibling.innerHTML = 0;
    }
  });
}

for (var i = 0; i < decreaseTime.length; i++) {
  decreaseTime[i].addEventListener('click', function(e) {
    var lastNumber = e.target.nextSibling.nextSibling.innerHTML;
    if (lastNumber > 0) {
      e.target.nextSibling.nextSibling.innerHTML = parseInt(lastNumber) - 1;
    } else {
      e.target.nextSibling.nextSibling.innerHTML = 0;
    }
  });
}

/**
 **
 ** logic for handling the display - timer and status(break or working session)
 **
 **
 */
var timer = document.getElementsByClassName('timer')[0],
  statusDiv = document.getElementsByClassName('status')[0],
  timeRemaining = document.getElementsByClassName('timeRemaining')[0],
  icon = document.getElementById('icon'),
  timeRemaining = document.getElementsByClassName('timeRemaining')[0],
  timerOn = false, // flag for tracking if timer is running or not
  a, b; //variables for storing setInterval ids - later used to clear the timers

// displaying play button on hover over time area and fading out the background
timer.addEventListener("mouseover", function(e) {
  if (timerOn === false) {
    statusDiv.style.opacity = "0.2";
    timeRemaining.style.opacity = "0.2";
    timer.style.borderColor = "#83EDA0";
    icon.classList.remove("play-hidden");
    icon.classList.add("play-display");
  }
});

// reversing above effect on mouseout
timer.addEventListener("mouseout", function(e) {
  statusDiv.style.opacity = "1";
  timeRemaining.style.opacity = "1";
  timer.style.borderColor = "#CCC";
  icon.classList.remove("play-display");
  icon.classList.add("play-hidden");
});

// this is the core of the app
// on click in the timer area, the timer should start
timer.addEventListener('click', displayTime);

function displayTime() {

  timerOn = true; // turning the flag on
  timer.removeEventListener('click', displayTime); // removing click handler to prevent further clicking
  timer.style.cursor = "default"; // changing cursor style from pointer to default

  statusDiv.innerHTML = "Work"; // every pomodoro starts with work mode

  // parsing the input values for work and break sessions
  var sessionLength = parseInt(sessionDuration.innerHTML);
  var breakLength = parseInt(breakDuration.innerHTML)

  // setting starting and ending times based on above inputs
  var sessionStarts = new Date();
  var sessionEnds = new Date(sessionStarts.getTime() + sessionLength * 1000 * 60); // work session ending time

  calculateTime(sessionLength * 60); // this immediately displays the session length and then the  setInterval takes over.

  // starting work session
  a = setInterval(function() {

    // calculating seconds remaining to pass to calculateTime function
    var secondsRemaining = Math.round((sessionEnds - Date.now()) / 1000);

    if (secondsRemaining >= 0) {
      calculateTime(secondsRemaining);
    } else {
      // once work session ends clear the interval and move to break session
      clearInterval(a);

      // break session starts now - logic same as above
      statusDiv.innerHTML = "Break";
      calculateTime(breakLength * 60);
      var breakSessionEnds = new Date(sessionEnds.getTime() + breakLength * 1000 * 60);
      b = setInterval(function() {
        var breakSecondsRemaining = Math.round((breakSessionEnds - Date.now()) / 1000) + 1;
        if (breakSecondsRemaining >= 0) {
          calculateTime(breakSecondsRemaining);
        } else {
          clearInterval(b);
          timerOn = false; // turning flag off since both the sessions have ended
          timer.addEventListener('click', displayTime); // adding click handler after everything is done so that user can start next round
          statusDiv.innerHTML = "Let's start another!"
        }
      }, 1000);
    }
  }, 1000);

}

// this function takes remaining nuber of seconds as arguments
// and updates the display timer accrodingly
function calculateTime(secondsRemaining) {

  var minutesDisplay = parseInt(secondsRemaining / 60); // 170s will give 2mins
  var secondDisplay = secondsRemaining - minutesDisplay * 60;

  timeRemaining.innerHTML = pad(minutesDisplay) + ":" + pad(secondDisplay);
}

// padding zero to the left if number is less than 10 - 9 will become "09".
function pad(num) {
  return num < 10 ? "0" + num : num;
}

/**
 **
 ** reseting timer and break & session time settings on click of reset
 **
 **
 */
var reset = document.getElementsByClassName('reset')[0];
reset.addEventListener('click', function() {
  statusDiv.innerHTML = "Let's get some shit done!"
  timeRemaining.innerHTML = "25:00";
  breakDuration.innerHTML = "5";
  sessionDuration.innerHTML = "25";
  clearInterval(a); // clearing work timer
  clearInterval(b); // clearing session timer
  timer.addEventListener('click', displayTime); // adding event listener back to timer area
  timerOn = false; // setting status flag to false
});