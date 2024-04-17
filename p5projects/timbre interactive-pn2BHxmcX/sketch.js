let sampler = new Tone.Sampler({
	"A1": "samples/casio/A1.mp3", 
  "D2": "samples/casio/D2.mp3"
});

sampler.envelope = {
  attack: 0.2,
  decay: 0,
  sustain: 1,
  release: 0.1
}
sampler.toMaster();


let button;


function setup() {
  createCanvas(430,400);
  background (100,100,100);
}

function draw() {
  
  
  textSize(18)
  text('TIMBRE COLORING BOOK', 105, 355);
  
  textSize(13)
  text('COLOR PALETTE:', 30,29)
  
  beginShape();
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);
  let red = color(255,0,0);
  button = createButton('Red');
  button.position(30, 40);
  button.style('background-color', red)
  button.mousePressed(redPressed);
  
  let orange = color(255,165,0);
  button2 = createButton('Orange');
  button2.style('background-color', orange)
  button2.position(100, 40);
  button2.mousePressed(orangePressed);
  
  let yellow = color(255,255,51);
  button3 = createButton('yellow');
  button3.style('background-color', yellow)
  button3.position(190, 40);
  button3.mousePressed(yellowPressed);
  
  let green = color(0,255,0);
  button4 = createButton('Green');
  button4.style('background-color', green)
  button4.position(270, 40);
  button4.mousePressed(greenPressed);
  
  let blue = color(0,0,255);
  button5 = createButton('Blue');
  button5.style('background-color', blue)
  button5.position(350, 40);
  button5.mousePressed(bluePressed);
}

function redPressed() {
  let pitch;
  pitch="A1";
  beginShape();
  fill(255,0,0)
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);
  
  if(pitch && sampler.loaded){
    // Sampler will repitch the closest sample
  	sampler.triggerAttack(pitch);
  }
}

function orangePressed() {
  let pitch;
  pitch="B1";
  fill(255,165,0)
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  
  if(pitch && sampler.loaded){
    // Sampler will repitch the closest sample
  	sampler.triggerAttack(pitch);
  }
}

function yellowPressed() {
  let pitch;
  pitch="C2";
  fill(255,255,51)
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  
  if(pitch && sampler.loaded){
    // Sampler will repitch the closest sample
  	sampler.triggerAttack(pitch);
  }
}

function greenPressed() {
  let pitch;
  pitch="D2";
  fill(0,255,0)
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  
  if(pitch && sampler.loaded){
    // Sampler will repitch the closest sample
  	sampler.triggerAttack(pitch);
  }
}

function bluePressed() {
  let pitch;
  pitch="E2";
  fill(0,0,255)
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  
  if(pitch && sampler.loaded){
    // Sampler will repitch the closest sample
  	sampler.triggerAttack(pitch);
  }
}



function buttonReleased() {
  sampler.triggerRelease();
}
