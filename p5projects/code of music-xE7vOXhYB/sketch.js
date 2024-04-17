let x = 0;
let s = 50;
let c;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  c = color(255,0,0);
}

function draw() {
  background(c);
  rect(x,200,s,s);
  x += 1;
}

function keyPressed(){
  s = random(10,100)
}

function mousePressed(){
  //change background color
  c - color(random(120,240),100,100)
}

