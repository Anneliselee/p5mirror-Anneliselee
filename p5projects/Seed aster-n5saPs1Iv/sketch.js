// Scale as ruler: Intervals 
// Press keys 1 through 8 to jump around the scale by different intervals, in a random direction (up or down)

// To get a sense of each interval, try pressing 1 several times, then 2 several times, then 3, and so on. Then, combine them together. 

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

let x = 0;

function setup() {
  createCanvas(650, 200);
  pos = scale2.length*octave;  
}

function draw(){
  circle(30, 70, 55);
  fill(x)
  circle(100, 70, 55);
  circle(170, 70, 55);
  circle(240, 70, 55);
  circle(310, 70, 55);
  circle(380, 70, 55);
  circle(450, 70, 55);
  circle(520, 70, 55);
  circle(590, 70, 55);
  
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
    x = 155, 194, 178 ;
  } if (key === '2') {
    x = 40 ;
  } else if (key === '3') {
    x = 100;
  }
  
}