// heartbeat + bgmove2 by FantasticJun
//https://editor.p5js.org/FantasticJun/sketches/l4QnJNP4wy

// I utilized this code and modified it so that the sketch is able to resize to any screen, I added more animations to it and added in random colors for the ball animation to show more chaos when the heart is beating faster.

//variables to define width and height of canvas
let cWidth;
let cHeight;

// variables to 
var stars = [];
let HEART = [];
let index = 0;
let heartrate = 0;
let framenum = 0;

//mouse location
let d,c=0,r=0;

//speed for star/ellipse movement in the middle
let speed1,speed2,speed3,speed4,speed5,speed6,speed7,speed8,speed9;
let scale0,scale1,scale3,scale8,scale9;
let trans1,trans2,trans3;

let blur1;
let Hue1;

//let extraCanvas;
let balls = [];
let ballnum;
let R,G,B;
let rateAmount;
let mainrotate=0;
let autod=0, flowerloop1=0,flowerloop2=155;
let sounds = [];

function preload() {
  sounds[0] = loadSound("Heartbeat 1.wav");
  sounds[1]= loadSound("Noise.mp3");
  
  //heart movement animation
  for (let framenum = 0; framenum < 5; framenum++) {
    HEART[framenum] = loadImage("heart/heart_000" + framenum + ".png");
  }
}


function setup() {
  cWidth = windowWidth;
  cHeight = windowHeight;
  createCanvas(cWidth, cHeight);
  //createCanvas(800, 800);
  
  //createBg();
  //bgchanging()
  
  sounds[0].setVolume(0.3) // 0-1
  sounds[0].rate(1)
  sounds[0].loop();
  //colorMode(HSB,360,100,100,100);
  //extraCanvas =  createGraphics(800,800);
  //extraCanvas.clear();
  
  for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}
}

function windowResized() {
  cWidth = windowWidth;
  cHeight = windowHeight;
  createCanvas(cWidth, cHeight);
  resizeCanvas(cWidth, cHeight);
  
}



function draw() {
// mouse position = d
// control size of heartbeat, balls, tranparency of flowers
  d=map(mouseX,0,cWidth,0,cHeight);
  
  heartbeatsound();
  
  //for different sounds according to location of mouse
  if(d>650){
    sounds[1].setVolume(0.01)
    sounds[1].loop();
  } 
  else{
    //sounds[1].pause();
    sounds[1].setVolume(0);
  }

  //the following are all functions that bring up the individual elements for the project
  bgchanging()
  
  noFill();
  translate(cWidth/2, cHeight/2);
  
  star();
  
  noStroke();
   
  //animation of flower
  flower1();
  flower2(); 
 
  
  heartbeat(-149, -150);  
  blackwall();
  twodots();
 
  //blue star animation
  for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
  
}

//blue star animation
class Star {
	constructor() {
		this.x = random(cWidth);
		this.y = random(cHeight);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}


function heartbeat(x, y) {
  // size and transparency of heartbeat based on mouse location
  imageMode(CORNER);
   if(d<=250){
      scale0=map(d,0,250,0,130);
  } else{
      scale0=130;
  }
  
  push();
  rotate(d * 0.005);
  fill(77, 11, 238, 100);
  drawingContext.shadowBlur = 40;
  drawingContext.shadowColor = color(0, 102, 255,80);
  polarTriangle(0, scale0, 0);
  rotate(d * 0.005);
  fill(77, 11, 83, 100);
  polarTriangle(180, scale0, 0);
  pop();
  
   push();
  //fill(34, 222, 222,100);
    radialGradient(
    -20,-20, 0,//Start pX, pY, start circle radius
    -40, -40, 150,//End pX, pY, End circle radius
    color(24,188,207,150), //Start color
    color(179, 19, 124,150) //End color
  );
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = color(195, 27, 173,80);
  circle(0,0,180);
   pop();
  
  //heartrate = 0.2;
  heartrate = map(mouseX, 0, 800, 0.2, 1);
  framenum = floor(index) % HEART.length;
  image(HEART[framenum], x, y, 300, 300);
  index = index + heartrate;
  //console.log(index);
  //console.log(speed);
  //console.log(flowerloop2);
}

function flower1() {
  //animation of flower
  push();
  if(d<200){
      flowerloop1=0;
  } else{
      flowerloop1++;
      flowerloop1=flowerloop1%310;
  }
  
  autod=flowerloop1+350;
  
  //speed of ellipse that creates the flower shape slows down depending on mouse location
  speed1=map(autod,400,620,0,800);
  scale1=map(autod,400,700,100,250);
  trans1=map(autod,400,480,0,70);
  
  speed2=map(autod,410,660,0,800);
  
  speed3=map(autod,430,670,0,800);
  scale3=map(autod,400,700,2,200);
  
  speed4=map(autod,450,680,0,800);
  
  speed5=map(autod,480,680,0,800);
  trans2=map(autod,450,520,0,150);
  
  speed6=map(autod,490,680,0,800);
  
  speed7=map(autod,500,690,0,800);
  
  speed8=map(autod,520,700,0,800);
  scale8=map(autod,520,700,2,150);
  scale9=map(autod,520,700,2,200);
  Hue1=map(autod,520,700,108,229);
  
  speed9=map(autod,510,710,0,800);
  
  
  if(autod<=580){
     trans3=map(autod,520,580,0,90);
  } else{
     trans3=map(autod,580,630,90,0);
  }
  
  
  blur1=map(autod,600,650,5,10);
  
  rotate(autod * 0.005);
  fill(255, 17, 215, trans1);
  polarEllipses(13, 100, scale1, speed1);
  
  push();
  fill(157, 0, 215, trans1);
  //rotate(mouseX * 0.005);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(188, 20, 83);
  polarEllipses(10, 40, 120, speed4);
  pop();
  
  push();
  drawingContext.filter = 'blur(8px)';
  fill(0, 246, 255,trans1);
  rotate(autod * 0.005);
  polarEllipses(12, 5, scale3, speed3);
  pop();
  
  rotate(autod * 0.005);
  fill(147, 8, 47, trans2);
  polarEllipses(8, 10, 50, speed5);
  
  rotate(autod * 0.005);
  fill(0, 254, 181,trans2);
  //rotate(mouseX * 0.005);
  polarEllipses(9, 5, 25, speed6);
  
  fill(218, 29, 0,trans1);
  rotate(autod * 0.005);
  polarEllipses(10, 5, 10, speed7);
  
  push();
  drawingContext.filter = 'blur( '+blur1+'px)';
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(188, 20, 83);
  fill(255, 53, Hue1, trans3);
  polarEllipses(12, scale8, scale9, speed8);
  pop();

  noFill();
  strokeWeight(1.5);
  stroke(255, 204, 0,trans1);
  polarEllipses(13, 100, 220, speed2);
  
  push();
  drawingContext.filter = 'blur( '+blur1+'px)';
  rotate(autod * 0.015);
  stroke(255, 193, 163,trans2);
  polarEllipses(16, 20, scale8, speed9);
  pop();
  
  fill(255, 193, 163,trans2);
  polarEllipses(16, 3, 3, speed8);
  pop();
}

function flower2() {
  push();
  
  
  autod=flowerloop2+350;
  //flowerloop2++;
  if(d<200){
      flowerloop2=-155;
  }
  
  else if(flowerloop1<155&&flowerloop2==-155){
      flowerloop2=-155;
  }
  
  else{
    flowerloop2=(flowerloop1+155)%310;
  }
  
  speed1=map(autod,400,620,0,800);
  scale1=map(autod,400,700,100,250);
  trans1=map(autod,400,480,0,70);
  
  speed2=map(autod,410,660,0,800);
  
  speed3=map(autod,430,670,0,800);
  scale3=map(autod,400,700,2,200);
  
  speed4=map(autod,450,680,0,800);
  
  speed5=map(autod,480,680,0,800);
  trans2=map(autod,450,520,0,150);
  
  speed6=map(autod,490,680,0,800);
  
  speed7=map(autod,500,690,0,800);
  
  speed8=map(autod,520,700,0,800);
  scale8=map(autod,520,700,2,150);
  scale9=map(autod,520,700,2,200);
  Hue1=map(autod,520,700,108,229);
  
  speed9=map(autod,510,710,0,800);
  
  
  if(autod<=580){
     trans3=map(autod,520,580,0,90);
  } else{
     trans3=map(autod,580,630,90,0);
  }
  
  
  blur1=map(autod,600,650,5,10);
  
  rotate(autod * 0.005);
  fill(180, 18, 255, trans1);
  polarEllipses(13, 100, scale1, speed1);
  
  push();
  fill(157, 0, 215, trans1);
  //rotate(mouseX * 0.005);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(188, 20, 83);
  polarEllipses(10, 40, 120, speed4);
  pop();
  
  push();
  drawingContext.filter = 'blur(8px)';
  fill(0, 246, 255,trans1);
  rotate(autod * 0.005);
  polarEllipses(12, 5, scale3, speed3);
  pop();
  
  rotate(autod * 0.005);
  fill(147, 8, 47, trans2);
  polarEllipses(8, 10, 50, speed5);
  
  rotate(autod * 0.005);
  fill(0, 254, 181,trans2);
  //rotate(mouseX * 0.005);
  polarEllipses(9, 5, 25, speed6);
  
  fill(218, 29, 0,trans1);
  rotate(autod * 0.005);
  polarEllipses(10, 5, 10, speed7);
  
  push();
  drawingContext.filter = 'blur( '+blur1+'px)';
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(188, 20, 83);
  fill(53, 143, 255, trans3);
  polarEllipses(12, scale8, scale9, speed8);
  pop();

  noFill();
  strokeWeight(1.5);
  stroke(255, 204, 0,trans1);
  polarEllipses(13, 100, 220, speed2);
  
  push();
  drawingContext.filter = 'blur( '+blur1+'px)';
  rotate(autod * 0.015);
  stroke(255, 193, 163,trans2);
  polarEllipses(16, 20, scale8, speed9);
  pop();
  
  fill(255, 193, 163,trans2);
  polarEllipses(16, 3, 3, speed8);
  pop();
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}

function star(){
  //r=map(d,0,740,0,500);
  if(d<=580){
     r=map(d,0,580,0,400);
  } else{
     r=map(d,0,580,0,1000);
  }
  
  push();
  stroke(255,15);
  circle( 0, 0, 220+r);
  stroke(255,10);
  circle( 0, 0, 430+r);
  stroke(255,8);
  circle( 0, 0, 710+r);
  stroke(255,5);
  circle( 0, 0, 1000+r);
  
  noStroke();
  fill(85, 51, 126);
  rotate(frameCount/350);
  circle( -500-r/2, 0, 20);
  circle( 355+r/2, 0, 20);
  rotate(frameCount/345);
  circle( -355-r/2, 0, 15);
  rotate(frameCount/340);
  circle( 215+r/2, 0, 10);
  rotate(frameCount/335);
  circle( -110-r/2, 0, 7);
  pop();
}

function blackwall(){
  //fill(0,150);
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  
  fill(r,g,b,a);
  strokeWeight(3);
  stroke(60,150);
  if(d<650){
    ballnum=0;
  } else{
    ballnum=map(d,650,740,0,200);
  }

//displaying balls randomly
   for (let i = 0; i < int(ballnum); i += 1) {
    let ball = new Ball(random(-cWidth, cWidth), random(-cHeight, cHeight));
    balls.push(ball)
  }
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
  }
  while (balls.length > int(ballnum)) {
     balls.splice(int(random(0, balls.length)), 1);
   
  } 
  
    //console.log(ballnum);
   //console.log(d);
  
}

function heartbeatsound(){
  if(d<=550){
    rateAmount = map(d, 0, 650, 0.5, 2);
  } else if(d>550&&d<650){
    rateAmount = 2;
  } else{
    rateAmount = map(d, 650, 740, 2, 0);
  }
  sounds[0].rate(rateAmount);
}

function bgchanging(){
 if(d<=250){
    R=map(d,0,250,0,39);
    G=map(d,0,250,0,8);
    B=map(d,0,250,0,78);
  } else{
     R=39;
     G=60;
     B=78;
    //2nd background depending on mouse location
  }
  
  background(R, G, B, 48);
}

function twodots (){
  //size and transparency of dot changes based on mouse location
 rotate(mainrotate);
  if(d<=660){
   fill(255,0,246,180); 
  } else{
   fill(120,180); 
  }
  strokeWeight(2);
  stroke(0,211,255,180);
  circle(400-d/2,0,50);
  stroke(255,0,246,180);
  if(d<=660){
   fill(0,211,255,180); 
  } else{
   fill(120,180); 
  }
  circle(d/2-400,0,50);
  mainrotate=mainrotate+1/100;
}

class Ball {
  // properties, aka variables
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 100;
  }
  
  display() {
    circle(this.x, this.y, this.size);
  } 
}

