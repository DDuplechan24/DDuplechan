// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify)
  applyFilterNoBackground(decreaseBlue)
  applyFilterNoBackground(increaseGreenByBlue)
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  filterFunction(rgbNumbers)
  rgbNumbers[RED] = 255
  for (var i = 0; i < image.length; i++){
    for (var j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j];
      rgbNumbers = rgbStringToArray(rgbString)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][j] = rgbString
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(backgroundColor){
  backgroundColor = keepInBounds(number);
  filterFunction(rgbNumbers)
  for (var i = 0; i < image.length; i++){
    for (var j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j]
      image[i][j] = rgbString
      if (backgroundColor !== keepInBounds(number)) {
        applyFilter();
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  if (number < 0) {
    number = 0
  }else if (number > 255) {
    number = 255
  }else{ number = number}

  return number
}

// TODO 3: Create reddify function
function rediffy(array) {
  rgbNumbers[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(list) {
  BLUE = keepInBounds(BLUE - 50);
}

function increaseGreenByBlue(arrayGreenToBlue) {
  GREEN = keepInBounds(BLUE + GREEN);
}

// CHALLENGE code goes below here
