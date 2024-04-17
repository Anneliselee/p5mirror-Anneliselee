/*
Experimental Photography
Interactive Media Arts @ NYU
Ellen Nickles

NOTES:
After uploading images to the left, 
File > Save to access them in your sketch

REFERENCES:
https://p5js.org/reference/#/p5/image
https://p5js.org/reference/#/p5/preload
https://p5js.org/reference/#/p5/loadImage
https://p5js.org/reference/#/p5.Image/get
*/

let pic;
let x;
let y;
// let locationx = random (200-700)
// let locationy = random (500-1000)

function preload(){
  pic=loadImage("dog1.jpg")
  pic2=loadImage("dog2.jpg")
  pic3=loadImage("dog3.jpg")
}


function setup() {
  createCanvas(1000, 1000);
  x = random (0,width);
  y = random (0,height);
  
}

function draw() {
  background(220);
  
  image(pic,0,0, pic.width/2, pic.height/2)
  image(pic2, 450,50, pic2.width/6, pic2.height/6)
  
  // let x = random (0,width);
  // let y = random (0,height);
  image(pic3, x,y, pic3.width/8, pic3.height/8)
  // noLoop();
  
  
  let rightHalf = pic.get(pic.width/2,0,pic.width/2,pic.height)

  image (rightHalf, width/2, height/2)
}







