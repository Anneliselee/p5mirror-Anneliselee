let slider
let currSpeed = 100;
var kick = new Tone.Player("hihat.mp3");
kick.toMaster();
Tone.Transport.bpm.value = 120;
Tone.Transport.scheduleRepeat(onBeat, "4n");

let button;
let beatPlaying = true;

var button1;
var button2;
var button3;
var button4;

//let sound1 = false;
const cchord = new Tone.Player("/chords/cchord.wav", () => {console.log("done loading")});
cchord.toDestination();
const dchord = new Tone.Player("/chords/dchord.wav", () => {console.log("done loading")});
dchord.toDestination();
const fchord = new Tone.Player("/chords/fchord.wav", () => {console.log("done loading")});
fchord.toDestination();
const fmchord = new Tone.Player("/chords/fmchord.wav", () => {console.log("done loading")});
fmchord.toDestination();

function preload() {
  flower1 = loadImage('flower1.png');
  flower2 = loadImage('flower2.png');
  flower3 = loadImage('flower3.png');
  flower4 = loadImage('flower4.png');
}

function setup() {
  createCanvas(450, 450);
  background (255,188,217);
  slider = createSlider(0, 255, 100);
  slider.position(10,418);
  slider.style('width', '140px');
  button = createButton('Play/Pause');
  button.position(20, 20);
  button.mousePressed(playStop);
 
  button1 = createImg('flower1.png');
  button1.size(200,200)
  button1.position(10, 50);
  button1.mousePressed(chord1);
  
  button2 = createImg('flower2.png');
  button2.size(170,170)
  button2.position(190,90);
  button2.mousePressed(chord2);
  
  button3 = createImg('flower3.png');
  button3.size(220,220)
  button3.position(58,170);
  button3.mousePressed(chord3);
  
  button4 = createImg('flower4.png');
  button4.size(259,259)
  button4.position(190,195);
  button4.mousePressed(chord4);
  
  
}

function draw() {
  let speed = slider.value();
  // speed = constrain(speed, 0.01, 4);
  if (speed != currSpeed) {
    Tone.Transport.bpm.value = speed;
  }
  currSpeed = speed;
  // kick.rate(speed);
}


function playStop() {
  if (beatPlaying) {
    Tone.Transport.stop();
    beatPlaying = false;
  } else {
    Tone.Transport.start();
    beatPlaying = true;
  }

}

function onBeat(time) {
  kick.start(time);
}


function chord1() {
  cchord.start();
}
function chord2() {
  dchord.start();
}
function chord3() {
  fchord.start();
}
function chord4() {
  fmchord.start();
}


//Tone.Buffer.on('load', start);

function start() {
  Tone.Transport.start();
}

	
