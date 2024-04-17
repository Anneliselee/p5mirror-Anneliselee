const blip = new SimplePlayer("sounds/blip.wav");
blip.toDestination();

const pink = new SimplePlayer("sounds/pink.wav");
pink.toDestination();

const takerimba = new SimplePlayer("sounds/takerimba.wav");
takerimba.toDestination();

const tears = new SimplePlayer("sounds/tears.wav");
tears.toDestination();

let loaded = false;

function setup() {
  createCanvas(400, 400);
  background(100, 233, 100);
}

function draw() {
  background(0);
  
  // Pink
  let x = map(pink.progress(), 0, 1, 0, width);
  ellipse(x, height/3, 100, 100);
  
  // Blip
  let angle = map(blip.progress(), 0, 1, 0, -TWO_PI);
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 100);
  pop();
  
  // Tears
  
  // Takerimba
}

function keyTyped(){
  if(loaded){
    if(key == 'a'){
      blip.start();
    }
    else if(key == 's'){
      pink.start();
    }
    else if(key == 'd'){
      tears.start();
    }
    else if(key = 'f'){
      takerimba.start();
    }
  }
}

Tone.loaded().then(function(){
  loaded = true;
});
