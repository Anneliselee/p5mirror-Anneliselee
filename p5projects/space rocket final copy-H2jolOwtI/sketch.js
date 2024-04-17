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
let lifeNumber = 3;
let time = 1500;

function preload(){
  imgs [0] = loadImage("alien1.png")
  imgs [1] = loadImage("alien2.png")
  imgs [2] = loadImage("alien3.png")
  imgs [3] = loadImage("alien4.png")
  bgMusic = loadSound("retroMusic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Stars for the background
  for (let i = 0; i < 150; i++) {
    stars[i] = new Stars(random(width), random(height), random(3));
  }
  //loading all images, buttons, sound effects
  lives = loadImage("lives.png");
  rocket = loadImage("rocket.png");
  button2 = createButton("Your face location is invertedly aligned with the space rocket,bullets will kill the aliens, and avoid the aliens that are coming for you! ")
  button2.position(width/2 - 100, height/2 - 100)
  button2.size(290,80)
  button = createButton("START GAME");
  button.position(width / 2 - 40, height / 2);
  button.size(100, 50);
  button.mousePressed(checkButton);
  video = createCapture(VIDEO);
  video.size(width, height);
  effect = loadSound("bomb.mp3");
  //aliens + bullets spawning
  multipleBullets.push(new Bullets(x, y));
  multipleAliens.push(new aliens(0,0));
  
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
    poseNet.on("pose", function (results) {
    poses = results;
    rocketX = poses[0].pose.nose.x;
  //console.log('here' + poses[0])
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  print("Model Loaded");
  bgMusic.play();
}

function draw() {
  //if (poses) print(poses[0].pose.nose.x);
  //background
  colorMode(HSB);
  colo.h = mouseX % 360;
  colo.b = map(mouseY, 0, height, 0, 40);
  background(colo.h, 100, colo.b / 2);
  // stars
  for (let i = 0; i < 150; i++) {
    stars[i].show();
    stars[i].move();
  }
  //main rocket character
  image(rocket, rocketX, height - 150, 100, 100);
  // heart images for number of lives
  for (let i = 0; i < lifeNumber; i++){
    image(lives, 20 + (40*i) , 20, 40, 40);
  }
  // start game button
  if (buttonPressed) {
    game();
    keyboardInput();
  }
}
//control with keys when posenet doesn't work
function keyboardInput() {
  if (keyIsDown(LEFT_ARROW)) {
    // Move left
    rocketX -= 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    // Move right
    rocketX += 10;
  }
}


function game() {
  let generatedNew = true;
  //generating + shooting bullets
  if (generatedNew) {
    for (let i = 0; i < multipleBullets.length; i += 1){
      multipleBullets[i].generate();
      multipleBullets[i].shot();
    }
  //for loop for aliens
    for (let i = 0; i < multipleAliens.length; i += 1) {
      let alienCollided = false
      
      multipleAliens[i].generate();
      multipleAliens[i].move();
      
      // checking the collisions
      let collided = multipleAliens[i].checkCollision(multipleBullets);
      if(collided) {
        alienCollided = true;
        effect.play();
      }
      
      let collided2 = multipleAliens[i].checkCollision2(rocketX);
      if (collided2){
        alienCollided = true;
        lifeNumber --
      }
      
      if (alienCollided == true){
        multipleAliens.splice(i, 1);
      }
    }
  }
  
  bulletX = rocketX + 40;
  bulletY = height - 150;
  
  if (frameCount % 30 == 0) multipleBullets.push(new Bullets(bulletX, bulletY));
  
  time -= 0.5

  if (lifeNumber == 0){
    endGame();
  }
}

function generateAlien(){
  multipleAliens.push(new aliens(random(width),-20));
  setTimeout(generateAlien,time);
}

function checkButton() {
  buttonPressed = true;
  button.hide();
  button2.hide();
  generateAlien();
}

function endGame(){
  textSize(70)
  text ("GAME OVER", windowWidth/2-160, windowHeight/2)
}

class aliens{
  
  constructor(x,y){
    this.x = x
    this.y = y
    this.speed = 0.7
    this.img = random(imgs)
  }
  
  generate(){
    image(this.img, this.x, this.y,110,110) 
  }
  
  checkCollision(bullets) {
    for (let i = 0; i < bullets.length; i += 1) {
      if (dist(this.x, this.y, bullets[i].x, bullets[i].y) < 60) {
        return true;
      }
    }
    return false;
  }
  
  checkCollision2(rocketX){
    if (dist(this.x, this.y, rocketX, height-150) < 60) {
        return true;
      }
    return false;
  }
  
  move(){
    this.speed += 0.04
    this.y = this.y + this.speed
  }
}
