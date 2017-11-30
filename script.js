var workDuration = 20;
var breakDuration = 5;
var restDuration = 15;
var running = false;
var currentInterval = "Work";
var secondsRemaining = 0;
var breakCounter = 0;

// The getStatus function returns the current timer status.
function getStatus(){

	if(running){

		return "Running";

	}

	else{

		return "Stopped";

	}
}

// The startTimer function sets Running to true so the timer will count down.
function startTimer(){

	running = true;

}

// The pauseTimer function sets Running to false so the timer will stop counting down.
function pauseTimer(){

	running = false;

}

// The stopTimer function sets Running to false so the timer will stop counting down.
// It also resets the timer.
function stopTimer(){

	running = false;

	resetTimer();

}

// The decreaseInterval function decreases the interval length for the given interval
// Minimum interval length is 1
function decreaseInterval(interval){

switch (interval) {
    case "Work" :
      
      if(workDuration > 1){

      	workDuration--;

      }
      break;
      
    case "Break" :
      
      if(breakDuration > 1){

      	breakDuration--;

      }
      break;

    case "Rest" :
      
      if(restDuration > 1){

      	restDuration--;

      }
      break;

  }

}

// The increaseInterval function decreases the interval length for the given interval
// Maximum interval length is 60
function increaseInterval(interval){

switch (interval) {
    case "Work" :
      
      if(workDuration < 60){

      	workDuration++;

      }
      break;
      
    case "Break" :
      
      if(breakDuration < 60){

      	breakDuration++;

      }
      break;

    case "Rest" :
      
      if(restDuration < 60){

      	restDuration++;

      }
      break;

  }

}


// The resetTimer function changes currentInterval to "Work" and updates secondsRemaining and the display
function resetTimer(){

	currentInterval	= "Work"

	secondsRemaining = getIntervalLength(currentInterval);

	updateDisplay();

}


// getNextInterval returns the next interval in the sequence.
function getNextInterval(){

	switch (currentInterval) {
    case "Work" :
      
      if(breakCounter < 4){

      	breakCounter++;
      	return "Break";

      }
      else{

      	
      	breakCounter = 0;
      	return "Rest";

      }
      break;
      
    default :

      return "Work";
      break;

  }

}


// The getIntervalLength function returns the length of the given interval.
function getIntervalLength(interval){

	switch (interval) {
    case "Work" :
      
      return workDuration*60;
      
    case "Break" :

      return breakDuration*60;

    case "Rest" :

      return restDuration*60;

  }

}

// The getTimeString function returns the time remaining as a HH:MM formatted string.
function getTimeString(){

  var minutes = Math.floor(secondsRemaining / 60);
  var seconds = Math.floor(secondsRemaining % 60);

  timeString = minutes + ":" + seconds;

  return timeString;

}


// The updateDisplay function updates the clock element with the latest time.
function updateDisplay(){

	$("#clock").html(getTimeString());

}



$(document).ready(function(){

	secondsRemaining = getIntervalLength(currentInterval);
	updateDisplay();

	$("#play_button").click(function() {

    startTimer();

  });

  $("#pause_button").click(function() {

    pauseTimer();

  });

  $("#stop_button").click(function() {

    stopTimer();

  });

  $("#reset_button").click(function() {

    resetTimer();

  });

  $("#work_increase").click(function() {

    increaseInterval("Work");

  });

  $("#rest_increase").click(function() {

    increaseInterval("Rest");

  });

  $("#break_increase").click(function() {

    increaseInterval("Break");

  });

  $("#work_decrease").click(function() {

    decreaseInterval("Work");

  });

  $("#rest_decrease").click(function() {

    decreaseInterval("Rest");

  });

  $("#break_decrease").click(function() {

    decreaseInterval("Break");

  });

	// Make the timer count down each second.
  setInterval(function(){
  	if (running){

  		if (secondsRemaining == 0){

  				// When the timer reaches 0, get the length of the next interval 
  				// and update secondsRemaining.
  				currentInterval = getNextInterval()
  				secondsRemaining = getIntervalLength(currentInterval);

  		}

  		else{

  			// If there is time remaining, remove one second from secondsRemaining.
  			secondsRemaining--;

  		}

  		// Once changes are made, update the display
  		updateDisplay();

  	}
  }, 1000);

})

