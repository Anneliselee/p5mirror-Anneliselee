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
  
  bullet = new Bullets(x, y);
  
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
    rocketX = poses[0].pose.nose.x;

    x = rocketX+20;
    y = height - 150;
    
    //console.log('here' + poses[0])
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  print("Model Loaded");
}

function draw() {
  if (poses) print(poses[0].pose.nose.x);

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

let i = 0;

function game() {
  //button.hide()
  let generatedNew = true;

  if (generatedNew) {
    bullet.generate();
    generatedNew = false;

    if (bullet.y > 0) {
      bullet.shot();
    }
  }

  if (bullet.y < 20) {
    generatedNew = true;
    //bullet = new Bullets(x, y);
  }
}

function checkButton() {
  buttonPressed = true;
  button.hide();
}
