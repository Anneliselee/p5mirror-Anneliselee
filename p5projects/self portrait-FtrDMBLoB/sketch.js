function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150,50,150);
  
  //rectMode(CENTER);
  //fill(200,20,100);
  //stroke(200,20,100);
  //rect(200, 200, 150, 150);
  
  //hair
  fill(32, 19, 19);
  arc(200, 200, 200, 300, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  
   //neck
  fill(230,170,150);
  quad(180, 250, 220, 250, 230, 310, 170, 310);
  
  //Ears
  arc(123, 180, 30, 50, 0, PI + HALF_PI, OPEN);
  arc(280, 180, 30, 50, 130, QUARTER_PI+ QUARTER_PI+ QUARTER_PI, OPEN)
  
  //face
  strokeWeight (2);
  fill(230,170,150);
  ellipse(200,170,140,180);
  
  //nose
  strokeWeight(0)
  fill(240, 190, 165)
  triangle(200, 170, 190, 210, 210, 210);
  
  //eyebrow
  noFill()
  strokeWeight (2);
  arc(168, 146, 40, 12, PI, TWO_PI, OPEN);
  arc(232, 146, 40, 12, PI, TWO_PI, OPEN);
  
  //eye shape
  fill (240,230,230);
  strokeWeight(3);
  arc(170, 160, 40, 25, PI, PI/20,OPEN);
  arc(230, 160, 40, 25, PI, PI/20,OPEN);
  
  //eyeball
  fill (0,0,0);
  circle (170, 158,10);
  circle (230, 158,10);
  
  //body
  fill (40,80,160)
  rect (130,295,140,120,20);
  fill(50,85,160)
  ellipse (120,373,35,150)
  ellipse (284,373,35,150);
  
  //lips
  //top
  push();
  translate(0,-100);
  fill("#e38fab");
  noStroke();
  arc(190,330,20,10,PI,0);
  arc(210,330,20,10,PI,0);
  
  //bottom
  fill("#DB7093");
  noStroke()
  arc(200,330,40,20,0,PI);
  pop();
  
 
}