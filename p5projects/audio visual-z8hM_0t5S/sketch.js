//cymbal animation
let start;
let end;
let animate = false;
let stars = [];
let i;

// Tamb animation
let animateTamb = false;
var center = 250;
var acenter = 250;
var speedcenter = 200;
var speedchanges = -10;
var direction = -1

let animateTri = false;

//
var col;
const sound = new SimplePlayer("bg_music.mp3");
sound.toDestination();
sound.loop = true;
let meter = new Tone.Meter();
meter.normalRange = true;
meter.channels = 1;
sound.connect(meter);

//music playing
const cymbal = new SimplePlayer("cymbal.mp3");
cymbal.toDestination();
const triangle = new SimplePlayer("triangle.mp3");
triangle.toDestination();
const tambourine = new SimplePlayer("tambourine.mp3");
tambourine.toDestination();

let loaded = false;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  //color of bg changes with mouse location
  col = map(mouseY, 0, 500, 255, 0);
  background(80, col / 4, col);
  //circle back
  if (loaded) {
    if (sound.state == "started") {
      // console.log(meter.getValue() * 400);
      let c = color(random(200), random(200), random(200));
      fill(c);
      noStroke();
      ellipse(width / 2, height / 2, meter.getValue() * 700);
    }
  } else {
    text("loading...", 20, 20);
  }
  noStroke();
  fill(255);
  for (let i = 0; i < 10; i++) {
    let xrandom = random(width);
    let yrandom = random(height);
    ellipse(xrandom, yrandom, 4, 4);
  }
  //cymbal art
  end = millis();
  let time = end - start;
  if (animate == true && time < 3500) {
    animation();
  }
  
  //tambourine art
  if (animateTamb == true) {
   tambourineArt();
  }
  
  //triangle art
  end = millis();
  if (animateTri == true && time < 1200) {
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 18.0);
    star(0, 0, 30, 70, 5);
  }
  
 
}



function animation() {
  let s = new Star(
    random(0, width),
    random(0, height / 2),
    random(2, 4),
    random(2, 7),
    5,
    250,
    250,
    200
  );
  for (i = 0; i < random(3); i += 1) {
    stars.push(s);
  }
  for (let star of stars) {
    star.moveStar();
    star.createStar();
  }
}

function tambourineArt(){
  let c = color(random(240),random(220),random(180));
  fill (c)
  //circle from the middle to right
  ellipse(center, 200, 50, 50); 
  
  //4 more
  ellipse(center, center, 50, 50);
    
  center = center - direction;
  ellipse(acenter, acenter, 50, 50);
  acenter = acenter + direction;
  
  ellipse(center, acenter, 50, 50);
  ellipse(acenter, center, 50, 50);
  //speed
  ellipse(speedcenter, 200, 50, 50); 
  speedcenter = speedcenter + speedchanges;
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


// main music
function mouseClicked() {
  if (loaded) {
    sound.start();
  }
}


//key for each sound
function keyTyped() {
  if (loaded) {
    if (key == "a") {
      cymbal.start();
      animate = true;
      start = millis();
    }
    if (key == "s") {
      triangle.start();
      animateTri = true;
      start = millis();
      
    }
    if (key == "d") {
      tambourine.start();
      animateTamb = true
    }
  }
}

Tone.loaded().then(function () {
  loaded = true;
});
