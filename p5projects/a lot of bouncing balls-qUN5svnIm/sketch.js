let circles = []

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 400; i++) {
    let thisCircle = new Circle();
    circles.push(thisCircle);
  }
}

function draw() {
  background(220,20);
  for(var i = 0; i < circles.length; i++) {
    let thisCircle = circles[i];
    thisCircle.move();
    thisCircle.check();
    thisCircle.display();
    }
}

class Circle{
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.xdir=random(-1,3);
    this.ydir = random(-1,1);
    this.size = random(10,40);
    this.color = random(5,255);
  }
  
  display() {
    fill(this.color);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move() {
    this.x =this.x - this.xdir;
    this.y = this.y - this.ydir;
  }
  
  check() {
    if(this.x > width || this.x <0){
      this.xdir = -this.xdir
    }
    if(this.y > width || this.y <0){
      this.ydir = -this.ydir
    } 
  }
}

class backgrounds{
  colors(){
    r = random(255); // r is a random number between 0 - 255
    g = random(100,200); // g is a random number betwen 100 - 200
    b = random(100); // b is a random number between 0 - 100
    a = random(200,255); // a is a random number between 200 - 255
    fillbackground(r,g,b,a);
  }
}

