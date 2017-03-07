var weights = [];
var colors = [];
var selectedColor;
var selectedStrokeWeight;

function preload() {
  mushroom = loadImage("mushroom.png");
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
  image(mushroom, 200, 0);
  fill(255);
  rectMode(CORNER);
  rect(0, 400, 800, 200);
  drawWeightButtons();
  drawColorButtons();
  drawResetButton();
  selectColor();
}

function drawWeightButtons() {
  fill(0);
  text("PEN WEIGHT", 485, 430);
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < weights.length; i++) {
    fill(225);
    rect(500 + 40 * i, 460, 16, 16);
    fill(selectedColor);
    ellipse(500 + 40 * i, 460, weights[i], weights[i]);
  }
}



function drawColorButtons() {
  fill(0);
  text("COLORS", 85, 430);
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < colors.length - 1; i++) {
    fill(colors[i]);
    rect(100 + 40 * i, 460, 16, 16)
  }
}

function selectColor() {
  if (mouseX >= 92 && mouseX <= 108 && mouseY >= 452 && mouseY <= 468 && mouseIsPressed) {
    selectedColor = colors[0];
  } else {
    fill(0, 255, 0);
  }
}

function drawResetButton() {
  noStroke();
  fill(225);
  rectMode(CORNER);
  rect(85, 500, 70, 30);
  fill(0);
  text("RESET", 100, 520);
}

function fillWeightsArray() {
  for (i = 1; i <= 5; i++) {
    append(weights, i * 2);
  }
}