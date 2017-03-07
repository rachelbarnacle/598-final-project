function preload() {
  mushroom = loadImage("mushroom.png");
}

function setup() {
  createCanvas(800, 600);
}

function mouseDragged() {
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
  
function draw() {

  image(mushroom, 200, 0);
  
}
