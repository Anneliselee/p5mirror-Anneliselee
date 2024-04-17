let circleX;
let circleRedness = 0;
let speed;
let directionX;
let size = 80;
let colorDirection;

function setup() {
  createCanvas(600, 600);
  circleX = width/2;
  circleRedness = 0;
  speed = 5
  directionX = 1;
}

function draw() {
  background(20,200,210,20);
  stroke(255,255,255,150)
  fill(circleRedness,0,0);
  ellipse(circleX,100,size,size)
  circleX = circleX + directionX*speed;
  circleRedness = circleRedness + colorDirection;
  if(circleX > width - size/2 || circleX <size/2){
    directionX = -directionX;
  }
  if(circleRedness == 0||circleRedness == 255){
    colorDirection = - colorDirection
  }
}