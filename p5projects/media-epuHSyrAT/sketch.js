let button;
var img;

function setup() {
  createCanvas(400, 400);
  background(100,200,130);
  button = createButton('bark');
  button.position(100, 185);
  button.mousePressed(begin); 
  button.mouseReleased(end); 
  img = loadImage("Yellow-Lab-Puppy-Barking-500x500.jpg");
  song = loadSound("Sound Effect - Dog Bark.mp3");
}

function draw(){
  image(img, 25, 25,350,350);
}

function begin() {
    song.play(); // .play() will resume from .pause() position
}

function end() {
    song.pause(); // .play() will resume from .pause() position
}