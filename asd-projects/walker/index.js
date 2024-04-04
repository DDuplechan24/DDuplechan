/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 13,
    RIGHT: 13,
    UP: 13,
    DOWN: 13,
  };
  // Game Item Objects
  var walker = {
    XPOSITION : 0,
    YPOSITION : 0,
    XSPEED : 0,
    YSPEED : 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    handleKeyDown()
    repositionGameItem()
    redrawGameItem()
    
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      event = KEY.LEFT
      walker.XSPEED = -5;
    }else if (event.which === KEY.RIGHT) {
      event = KEY.RIGHT
      walker.XSPEED = 5;
    }else if (event.which === KEY.UP){
      event = KEY.UP
      walker.YSPEED = 5;
    }else if (event.which === KEY.DOWN) {
      event = KEY.DOWN
      walker.YSPEED = -5;
    }
    console.log(event);
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    XPOSITION += XSPEED;
    YPOSITION += YSPEED;
  }
  
  function redrawGameItem() {
    $("#walker").css(handleKeyDown, XPOSITION);
    $("#walker").css("top", YPOSITION);
    $("#walker").css(handleKeyDown, YPOSITION);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
