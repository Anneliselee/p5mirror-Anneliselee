let xPos = 80;
let yPos = 200;
let xDir = 1;
let yDir = -1;

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(120,50,220);
  drawIt(100);
  drawIt(70);
  drawIt(300);
  drawit2();
  changeIt();
  
  drawit2();
  changeIt2();
  checkIt();
}

function drawIt(offset){
  fill(255,0,0)
  ellipse(xPos+offset,yPos+offset,80,80)
}

function drawit2(){
  fill(200,40,100)
  rect(xPos,yPos,80,60)
}

function changeIt(){
  xPos = xPos+xDir;
  yPos = yPos+yDir;
}
 
function changeIt2(){
  xPos = xPos+xDir;
  yPos = yPos*yDir;
}

function checkIt(){
  if(xPos>width || xPos<0){
     xDir = -xDir
     }
  if(yPos>width || yPos<0){
     yDir = -yDir
  }
}
