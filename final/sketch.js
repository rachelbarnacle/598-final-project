var weights = [];
var colors = [];
var selectedColor;
var selectedStrokeWeight;

function preload() {
  owl = loadImage("owl.png");
}

function setup() {
  createCanvas(800, 600);
  selectedColor = color(0);
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
  fillWeightsArray();
  rectMode(RADIUS); // draws rectangles from center

}

// draws a white rectangle over what the user has colored
// but under the image to simulate a reset
function resetVariables() {
	noStroke();
	fill(255);
	rect(0, 0, 800, 400);
}

function mouseDragged() {
  noStroke();
  fill(selectedColor);
  ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  if (mouseY < 500) {
    noStroke();
    fill(selectedColor);
    ellipse(mouseX, mouseY, 10, 10);
  }
}

function draw() {
  image(owl, 180, 0);
  fill(255);
  rectMode(CORNER);
  rect(0, 400, 800, 200);
  drawColorButtons();
  drawResetButton();
  drawWeightButtons();
  drawEraserButtons();
  selectColor();

}

function drawColorButtons() {
  fill(0);
  text("COLORS", 125, 435);
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < colors.length - 1; i++) {
    fill(colors[i]);
    rect(140 + 40 * i, 460, 16, 16)
  }
}

function selectColor() {
  if (mouseX >= 132 && mouseX <= 148 && mouseY >= 452 && mouseY <= 468 && mouseIsPressed) {
    selectedColor = colors[0];
  } else {
    fill(0, 255, 0);
  }
}

function drawResetButton() {
	  if (mouseX > 125 && mouseX < 195 && mouseY > 514 && mouseY < 546 && mouseIsPressed) { // clicked state
    fill(181, 218, 252);
  } else	if (mouseX > 125 && mouseX < 195 && mouseY > 514 && mouseY < 546) { // hover state
    fill(200);
  }	else	{
    fill(225);
  }
  noStroke();
  rectMode(CORNER);
  rect(125, 514, 70, 32);
  fill(0);
  text("RESET", 140, 535);
}

function mouseReleased() {
  if (mouseX > 125 && mouseX < 195 && mouseY > 514 && mouseY < 546) {
    resetVariables();
  }
}

function drawWeightButtons() {
  fill(0);
  text("PEN WEIGHT", 485, 435);
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < weights.length; i++) {
    fill(225);
    rect(500 + 40 * i, 460, 16, 16);
    fill(selectedColor);
    ellipse(500 + 40 * i, 460, weights[i], weights[i]);
  }
}

function drawEraserButtons() {
  fill(0);
  text("ERASER", 485, 505);
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < weights.length; i++) {
    fill(225);
    rect(500 + 40 * i, 530, 16, 16);
    fill(255);
    ellipse(500 + 40 * i, 530, weights[i] * 2, weights[i] * 2);
  }
}

function fillWeightsArray() {
  for (i = 1; i <= 5; i++) {
    append(weights, i * 2);
  }
}