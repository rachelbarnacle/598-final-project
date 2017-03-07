function preload() {
  mushroom = loadImage("mushroom.png");
}

function setup() {
  createCanvas(600, 1000);
}

function mouseDragged() {
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
  
function draw() {
  // noStroke();
  // fill(255, 0, 0);
  // ellipse(mouseX, mouseY, 10, 10);
  image(mushroom, 0, 0);
}
