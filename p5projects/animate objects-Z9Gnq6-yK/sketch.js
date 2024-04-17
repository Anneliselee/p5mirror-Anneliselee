function setup() {
  createCanvas(400, 400);
  background(32);
}

function draw() {
  background(220,100,200);
  var circleX = random(width);
  var circleY = random(height);
  var circleSize = random(10, 100);
  fill(random(255), random(255), random(255));
  ellipse(circleX, circleY, circleSize)
}