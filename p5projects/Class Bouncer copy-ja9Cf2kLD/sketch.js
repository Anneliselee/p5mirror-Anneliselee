let circles=[];
let song;
let amp;
let vol;
let invert = true;

function preload() {
  song = loadSound('IGOR.mp3');
  // song = loadSound('IGOR.mp3'); 
  //song = loadSound('Footsteps.mp3');
  // song = loadSound('EndorsToi.mp3');
}

function mousePressed(){
  invert=!invert;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<200;i++){
    let thisCircle = new Circle();
    circles.push(thisCircle);
  }
  amp = new p5.Amplitude();
  song.play()
}

function draw() {
  vol = amp.getLevel();
  let bgcolor = map(vol,0,1,100,255)
  background(bgcolor,bgcolor,bgcolor,20);
  noStroke()
  for(var i=0;i<circles.length;i++){
    let thisCircle = circles[i];
    thisCircle.move();
    thisCircle.check();
    thisCircle.display();
    
    //COLLISION CODE
    
    // for(var j=0;j<circles.length;j++){
    //   let checkCircle=circles[j];
    //   var d = dist(thisCircle.x,thisCircle.y,checkCircle.x,checkCircle.y);
    //   if(i!=j&&d<vol*200){
    //     checkCircle.xdir*=-1;
    //     checkCircle.ydir*=-1;
    //     thisCircle.xdir*=1;
    //     thisCircle.ydir*=-1;
    //   }
    // }
  }
}

class Circle {
  constructor(){
    this.x=random(0,width);
    this.y=random(0,height);
    this.xdir=random(-1,1);
    this.ydir=random(-1,1);
    this.size=20;
    this.color=255;
  }
  
  display(){
    if(invert){
             fill(map(this.y,0,width,0,255),map(vol,0,1,0,255),map(this.x,0,height,0,255))
    }
    else{
       fill(map(this.x,0,width,0,255),map(this.y,0,height,0,255),map(vol,0,1,10,255))
    }
    ellipse(this.x,this.y,vol*200,vol*200);
  }
  
  move(){
    if(this.xdir<0){
      this.x+=this.xdir-(vol*5)
    }
    else{
      this.x+=this.xdir+vol*5;
    }
    if(this.ydir<0){
      this.y+=this.ydir-(vol*5)
    }
    else{
      this.y+=this.ydir+vol*5;
    }
  }
  
  check(){
    if(this.x>width||this.x<0){
      this.xdir*=-1;
    }
    if(this.y>height||this.y<0){
      this.ydir*=-1;
    }
  }}
