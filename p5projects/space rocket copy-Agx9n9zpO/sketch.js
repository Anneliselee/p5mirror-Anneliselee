var colo = {
  r: 0,
  g: 0,
  b: 0,
  h: 0,
  s: 0,
  b: 0,
  a: 0
};
let stars = [];
var rocket;
let bullets = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 150; i++) {
    stars[i] = new Stars(random(width), random(height), random(3));
  }
  rocket = loadImage('rocket.png');
  button = createButton('START GAME');
  button.position(width/2-30,height/2);
  button.size(100,50)
  button.mousePressed(game);
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
}


function draw() {
  colorMode(HSB);
  colo.h = mouseX % 360;
  colo.b = map(mouseY, 0, height, 0, 20);
  background(colo.h, 100, colo.b / 2);

  for (let i = 0; i < 150; i++) {
    stars[i].show();
    stars[i].move();
  }

  image(rocket,width/2-20,450,100,100)
  
}
  
function game(){
  button.hide()
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].shot();
  }
  
}
