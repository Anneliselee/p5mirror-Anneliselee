let bg;
let pics = [];
let randomizeButton;

function preload() {
  bg=loadImage("bg.png")
  
  for (let i = 0; i < 4; i++) {
    pics.push(loadImage(`images/${i}.png`))
  }
  
}

function setup() {
  createCanvas(bg.width/2, bg.height/2);
  randomizeButton = createButton("randomize");
  randomizeButton.mousePressed(randomize);
  
  
}

function draw() {
  background(220);
  image (bg, 0,0, bg.width/2, bg.height/2);
  
  let shuffledPics = shuffle(pics);
  // get the first image
  let pic = shuffledPics[0];
 
  // draw it on the canvas
  image(pic, 280, 160, pic.width/2, pic.height/2);
  
  
}

function randomize () {
  
  let shuffledPics = shuffle(pics);
  // get the first image
  let pic = shuffledPics[0];
 
  // draw it on the canvas
  image(pic, 280, 160, pic.width/2, pic.height/2);
  
}