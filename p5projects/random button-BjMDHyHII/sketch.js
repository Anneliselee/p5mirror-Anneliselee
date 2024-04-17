let myButton;

function setup() {
  createCanvas(500, 500);
  myButton=createButton("Random");
  myButton.position(190,200);
  myButton.style("font-size","30px");
  myButton.mousePressed(changeBgShapes);
  background(20,200,180);
}

function changeBgShapes(){
  background(random(255),random(255),random(255))
  fill(random(255),random(255),random(255))
  ellipse(random(500),random(500),random(150))
}