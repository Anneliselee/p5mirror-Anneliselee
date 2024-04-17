var colo = {
  r: 0,
  g: 0,
  b: 0,
  h: 0,
  s: 0,
  b: 0,
  a: 0,
};
let stars = [];
var rocket;
let bullets = [];
let video;
let poses;
var lives;
let rocketX = 300;
let buttonPressed = false;
let x, y;
let bullet;
let imgs = []
let alien;
let multipleAliens = []
let multipleBullets = []

function preload(){
  imgs [0] = loadImage("alien1.png")
  imgs [1] = loadImage("alien2.png")
  imgs [2] = loadImage("alien3.png")
  imgs [3] = loadImage("alien4.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 150; i++) {
    stars[i] = new Stars(random(width), random(height), random(3));
  }
  lives = loadImage("lives.png");
  rocket = loadImage("rocket.png");
  button = createButton("START GAME");
  button.position(width / 2 - 30, height / 2);
  button.size(100, 50);
  button.mousePressed(checkButton);
  video = createCapture(VIDEO);
  video.size(width, height);
  
  x = rocketX+20;
  y = height - 150;
  multipleBullets.push(new Bullets(x, y));
  
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    //poses = results;
    //rocketX = poses[0].pose.nose.x;
    
    
    //console.log('here' + poses[0])
  });
  // Hide the video element, and just show the canvas
  video.hide();
  
  multipleAliens.push(new aliens(0,0));
  
}

function modelReady() {
  print("Model Loaded");
}

function draw() {
  //if (poses) print(poses[0].pose.nose.x);

  colorMode(HSB);
  colo.h = mouseX % 360;
  colo.b = map(mouseY, 0, height, 0, 40);
  background(colo.h, 100, colo.b / 2);

  for (let i = 0; i < 150; i++) {
    stars[i].show();
    stars[i].move();
  }

  image(rocket, rocketX, height - 150, 100, 100);
  image(lives, 20, 20, 40, 40);
  image(lives, 60, 20, 40, 40);
  image(lives, 100, 20, 40, 40);

  if (buttonPressed) {
    game();
    
  }
}


function game() {
  //button.hide()
  let generatedNew = true;

  if (generatedNew) {
    for (let i = 0; i < multipleBullets.length; i += 1){
      multipleBullets[i].generate();
      multipleBullets[i].shot();
    }
  
  for (let i = 0; i < multipleAliens.length; i += 1){
    multipleAliens[i].generate();
    multipleAliens[i].move();
  }
  }
  
  if (frameCount % 30 == 0) multipleBullets.push(new Bullets(x, y));
  
  if(frameCount % 80 == 0){
    multipleAliens.push(new aliens(random(width),-20));
  }
}


function checkButton() {
  buttonPressed = true;
  button.hide();
}

class aliens{
  
  constructor(x,y){
    this.x = x
    this.y = y
    this.img = random(imgs)
  }
  
  generate(){
    image(this.img, this.x, this.y,110,110)
    
  }
  
  move(){
    this.y = this.y + 0.8
  }
}
