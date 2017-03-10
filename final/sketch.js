// Created by: Rachel Barnecut & Layne Soike
// Last edited: 3/9/17
// Description

var weights = []; // array of numbers used for stroke weights
var colors = []; // array of colors
var selectedColor; // current color selected by user
var selectedStrokeWeight; // current stroke weight selected by user
var squareButtonSize = 32; // size of square buttons
var firstRowButtonTop = 444; // where the first row of buttons aligns (top)
var firstRowButtonBottom = firstRowButtonTop + squareButtonSize; // where the first row of buttons aligns (bottom)
var secondRowButtonTop = 514; // where the second row of buttons aligns (top)
var secondRowButtonBottom = secondRowButtonTop + squareButtonSize; // where the second row of buttons aligns (bottom)
var dashboardColumnLeft = 125; // where x-position of left column starts
var dashboardColumnRight = 485; // where x-position of right column starts
var drawOrErase = 0; // 0 == drawing with color, 1 == erasing
var previousColor; // stores last color selected
var previousStrokeWeight; // stores last stroke weight selected (color)

function preload() {
  owl = loadImage("images/owl.png");
}

function setup() {
  createCanvas(800, 600);
  colors = [ // creates array of colors
    (color(255, 0, 0)), // red
    (color(255, 119, 0)), // orange
    (color(255, 221, 0)), // yellow
    (color(8, 175, 8)), // green
    (color(0, 0, 255)), // blue
    (color(163, 10, 252)), // purple
    (color(122, 70, 2)), // brown
    (color(0)), // black
    (color(255)) // white
  ];
  selectedColor = colors[0]; // default selected color is black
  fillWeightsArray(); // 
  selectedStrokeWeight = weights[2]; // default selected color is middle-sized stroke
}

function draw() {
  image(owl, 180, 0);
  noStroke();
  fill(255);
  rect(0, 400, 800, 200);
  drawColorButtons();
  drawResetButton();
  drawSaveButton();
  drawWeightButtons();
  drawEraserButtons();
  selectColor();
  selectWeight();
  highlightSelected();
  erase();
}

function mouseDragged() {
  stroke(selectedColor);
  strokeWeight(selectedStrokeWeight);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  if (mouseY < 500) {
    noStroke();
    fill(selectedColor);
    ellipse(mouseX, mouseY, selectedStrokeWeight, selectedStrokeWeight);
  }
}

function mouseReleased() {
  if (mouseX > dashboardColumnLeft && mouseX < 195 && mouseY > secondRowButtonTop && mouseY < 546) {
    resetVariables();
  } else if (mouseX > dashboardColumnLeft + 90 && mouseX < 285 && mouseY > secondRowButtonTop && mouseY < 546) {
		save("myColoring.png");
  }
}

// fills weights array with values that increase by a multiple of 2
function fillWeightsArray() {
  for (i = 1; i <= 5; i++) {
    append(weights, i * 2);
  }
}

// draws a label for Color buttons and a square button for each index 
// of the colors array (except the last item, white)
function drawColorButtons() {
  fill(0);
  noStroke();
  text("COLORS", dashboardColumnLeft, 435);
  for (i = 0; i < colors.length - 1; i++) {
    fill(colors[i]);
    rect(dashboardColumnLeft + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize);
  }
}

function highlightSelected() {
  if (drawOrErase === 0) {
    for (i = 0; i < colors.length - 1; i++) {
      if (colors[i] == selectedColor) {
        outline(dashboardColumnLeft + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize);
      }
    }
    for (i = 0; i < weights.length; i++) {
      if (weights[i] == selectedStrokeWeight) {
        outline(dashboardColumnRight + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize);
      }
    }
  } else {
    for (i = 0; i < weights.length; i++) {
      if (weights[i] * 2 == selectedStrokeWeight) {
        outline(dashboardColumnRight + 40 * i, secondRowButtonTop, squareButtonSize, squareButtonSize);
      }
    }
  }
}

// draws a black outline around the button passed
function outline(x, y, w, h) {
  noFill();
  strokeWeight(3);
  stroke(0);
  rect(x, y, w, h);
  noStroke();
}

// draws a label for Pen Weight buttons and a square button with an
// ellipse in the middle to indicate stroke weight, for each index 
// of the weights array
function drawWeightButtons() {
  fill(0);
  text("PEN WEIGHT", dashboardColumnRight, 435);
  noStroke();
  for (i = 0; i < weights.length; i++) {
    fill(225);
    rect(dashboardColumnRight + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize);
    if (drawOrErase === 0) {
      fill(selectedColor);  
    } else {
      fill(previousColor);
    }
    ellipse(501 + 40 * i, 460, weights[i], weights[i]);
  }
}

// draws a label for Eraser buttons and a square button with an 
// ellipse in the middle to indicate stroke weight, for each index
// of the weights array (stroke weights doubled for erasing)
function drawEraserButtons() {
  fill(0);
  text("ERASER", dashboardColumnRight, 505);
  noStroke();
  for (i = 0; i < weights.length; i++) {
    fill(225);
    rect(dashboardColumnRight + 40 * i, secondRowButtonTop, squareButtonSize, squareButtonSize);
    fill(255);
    ellipse(501 + 40 * i, 530, weights[i] * 2, weights[i] * 2);
  }
}

// draws the reset button
function drawResetButton() {
  if (mouseX > dashboardColumnLeft && mouseX < 195 && mouseY > secondRowButtonTop && mouseY < 546 && mouseIsPressed) { // clicked state
    fill(181, 218, 252);
  } else if (mouseX > dashboardColumnLeft && mouseX < 195 && mouseY > secondRowButtonTop && mouseY < 546) { // hover state
    fill(200);
  } else {
    fill(225);
  }
  noStroke();
  rect(dashboardColumnLeft, secondRowButtonTop, 70, 32);
  fill(0);
  text("RESET", 140, 535);
}

// draws a white rectangle over what the user has colored
// but under the image to simulate a reset
function resetVariables() {
  noStroke();
  fill(255);
  rect(0, 0, 800, 400);
}

// draws the save button
function drawSaveButton() {
  if (mouseX > dashboardColumnLeft + 90 && mouseX < 285 && mouseY > secondRowButtonTop && mouseY < 546 && mouseIsPressed) { // clicked state
    fill(181, 218, 252);
  } else if (mouseX > dashboardColumnLeft + 90 && mouseX < 285 && mouseY > secondRowButtonTop && mouseY < 546) { // hover state
    fill(200);
  } else {
    fill(225);
  }
  noStroke();
  rect(dashboardColumnLeft + 90, secondRowButtonTop, 70, 32);
  fill(0);
  text("SAVE", 235, 535);
}

function selectColor() {
  for (i = 0; i < colors.length - 1; i++) {
    if (mouseX >= dashboardColumnLeft + 40 * i && mouseX <= dashboardColumnLeft + squareButtonSize + 40 * i && mouseY >= firstRowButtonTop && mouseY <= firstRowButtonBottom && mouseIsPressed) {
      previousColor = selectedColor;
      selectedColor = colors[i];
      selectedStrokeWeight = previousStrokeWeight;
      drawOrErase = 0;
    }
  }
}

function selectWeight() {
  for (i = 0; i < weights.length; i++) {
    if (mouseX >= dashboardColumnRight + 40 * i && mouseX <= dashboardColumnRight + squareButtonSize + 40 * i && mouseY >= firstRowButtonTop && mouseY <= firstRowButtonBottom && mouseIsPressed) {
      if (drawOrErase == 1) { // user previously erasing, just clicked a pen weight button
        selectedColor = previousColor;
        drawOrErase = 0;
      }
      
      
      selectedStrokeWeight = weights[i];
    }
  }
}

function erase() {
  if (drawOrErase === 0) {
    previousStrokeWeight = selectedStrokeWeight
  }
  for (i = 0; i < weights.length; i++) {
    if (mouseX >= dashboardColumnRight + 40 * i && mouseX <= dashboardColumnRight + squareButtonSize + 40 * i && mouseY >= secondRowButtonTop && mouseY <= secondRowButtonBottom && mouseIsPressed) {
      selectedStrokeWeight = weights[i] * 2;
      selectedColor = colors[8];
      drawOrErase = 1; // user is erasing
    }
  }
}