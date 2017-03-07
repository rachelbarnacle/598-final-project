var weights = [];
var colors = [];

function preload() {
  mushroom = loadImage("mushroom.png");
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
  fillWeightsArray();
  rectMode(RADIUS); // draws rectangles from center
}

function mouseDragged() {
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  if (mouseY < 500) {
    noStroke();
    fill(255, 0, 0);
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
}

function drawWeightButtons() {
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < weights.length; i++) {
    fill(225);
    rect(100 + 40 * i, 410, 16, 16);
    fill(0);
    ellipse(100 + 40 * i, 410, weights[i], weights[i]);
  }
}

function drawColorButtons() {
  noStroke();
  rectMode(RADIUS);
  for (i = 0; i < colors.length - 1; i++) {
    fill(colors[i]);
    rect(100 + 40 * i, 460, 16, 16)
  }
}

function fillWeightsArray() {
  for (i = 1; i <= 5; i++) {
    append(weights, i * 2);
  }
}