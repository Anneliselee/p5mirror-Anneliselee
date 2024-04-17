let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(200,100,50);
  noStroke();
  fill(200, 102,150);
}

function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 5;
    fill(100,200,255);
    ellipse(mouseX, mouseY, 20, 20);
  }
}
