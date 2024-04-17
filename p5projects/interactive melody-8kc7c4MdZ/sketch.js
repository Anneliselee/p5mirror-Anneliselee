var angle = 0;

let synth = new Tone.Synth();
synth.toDestination();

// 0 is C-1: five octaves below C4 or Middle C
let root = 0;
// we are using the intervals present on a major scale:
// unison, major second, major third, perfect fourth, perfect fifth, major sixth, major seventh
let major = [0, 2, 4, 5, 7, 9, 11];
let scale2 = major;
let pos = 0;
let octave = 5;


let r=10
let g=10
let b=10

function setup() {
  createCanvas(600, 600);
  strokeWeight(40);
  stroke(10, 15);
  
  pos = scale2.length*octave;  
  
}
 
function draw() {
  background(r,g,b);
  
  translate(width/2,height/2);
  for (var i=0; i<200; i++){
	rotate(angle);
    scale(0.95);
		if(i%2==0) fill(155, 194, 178)
			else if(i%3==0) fill(197, 214, 186)
			else fill(242, 233, 211)
		
    rectMode(CENTER);
    rect(0, 0, 420, 420);
  }
	 angle += 0.001;
}

function keyPressed() {
  // The key determines the interval - the distance of the jump, in scale degrees:
  let interval = parseInt(key) % scale2.length;
  
  // Pick a random direction (-1 is down; 1 is up)
  let direction = random() > 0.5 ? 1 : -1;
  
  pos = pos + interval*direction;    
  if (pos < 0) pos = 0;  
  let scale2Degree = pos % scale2.length;
  octave = floor(pos / scale2.length);   
   
  let pitch = root + scale2[scale2Degree] + 12 * octave;
  let noteObject = Tone.Frequency(pitch, "midi");
  synth.triggerAttackRelease(noteObject, 0.1);

  if (key === '1') {
    r = 246;
    g=200;
    b=182;
  } if (key === '2') {
    r = 202;
    g=156;
    b=172;
  } if (key === '3') {
    r = 146
    g=146;
    b=209;
  } if (key === '4') {
    r = 200
    g=184;
    b=161;
  } if (key === '5') {
    r = 180;
    g=212;
    b=236;
  } if (key === '6') {
    r = 253;
    g=227;
    b=252;
  } if (key === '7') {
    r = 255;
    g=240;
    b=171;
  } if (key === '8') {
    r = 209;
    g=223;
    b=183;
  } else if (key === '9') {
    r = 232;
    g=153;
    b=155;
  }
}