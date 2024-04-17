// Sequencer
let bpm = 120;
let timeSignature = [4, 4];
let nMeasures = 2;
let nSteps = nMeasures * timeSignature[0];
let step;
let cells = [];
let playButton;

let slider;

//stars
let start;
let end;
let animate = false;
let stars = [];
let i;

// Visuals
let t = 30;
let l = 25;
let gridWidth, gridHeight, cellWidth, cellHeight;
let gray;
let colors = ["#B589D6", "#9969C7", "#804FB3", "#6A359C", "#3E236E", "#291749"];

// Sound
let kit;
let drumNames = ["kick", "snare", "hh", "hho", "tom1", "tom2"];
let nTracks = drumNames.length;
kit = new Tone.Players({
  kick: "/samples/kick.mp3",
  snare: "/samples/snare.mp3",
  hh: "/samples/hh.mp3",
  hho: "/samples/hho.mp3",
  tom1: "/samples/tom1.wav",
  tom2: "/samples/tom2.wav",
});
kit.toDestination();
Tone.Transport.scheduleRepeat(onBeat, "4n");

function setup() {
  // Initialize all sequencer cells.ON: 1. OFF: 0.
  for (let track = 0; track < nTracks; track++) {
    cells[track] = [];
    for (let step = 0; step < nSteps; step++) {
      cells[track][step] = 0;
    }
  }

  playButton = createButton("play");
  playButton.position(540, 10);
  playButton.mouseClicked(togglePlay);

  createCanvas(600, 400);
  gridWidth = width - 2 * l;
  gridHeight = height - 2 * t;
  cellWidth = gridWidth / nSteps;
  cellHeight = gridHeight / nTracks;
  gray = color(178, 178, 188);
}

function onBeat(time) {
  let pos = Tone.Transport.position.split(":");
  let measure = int(pos[0]);
  let beat = int(pos[1]);
  step = (measure * timeSignature[0] + beat) % nSteps;
  console.log(step);
  let velocity = 0.5;

  for (let track = 0; track < nTracks; track++) {
    if (cells[track][step]) {
      let hh = kit.player(drumNames[track]);
      hh.start(time);
      if(track==3) {
        animate=true;
        start = millis();
      }
    }
  }
}

function draw() {
  background("#FFDA00");
  stroke(gray);

  // Draw cells that are on
  for (let step = 0; step < nSteps; step++) {
    for (let track = 0; track < nTracks; track++) {
      if (cells[track][step] == 1) {
        fill(colors[track]);
        rect(
          l + step * cellWidth,
          t + track * cellHeight,
          cellWidth,
          cellHeight
        );
      }
    }
  }


  // Draw horizontal lines
  for (let i = 0; i <= nTracks; i++) {
    let y = t + i * cellHeight;
    right = width - l;
    line(l, y, right, y);
  }

  // Draw vertical lines
  for (let i = 0; i <= nSteps; i++) {
    right = width - l;
    stroke(gray);
    line(l + i * cellWidth, t, l + i * cellWidth, t + gridHeight);

    // Highlight the step that is playing
    if (i == step && Tone.Transport.state == "started") {
      fill(234, 30, 83, 60);
      noStroke();
      rect(l + i * cellWidth, t, cellWidth, gridHeight);
    }
  }

  //time for 4th row
  end = millis();
  let time = end - start;
  if (animate == true && time < 300) {
    animation();
  }
}

function mousePressed() {
  // If the mouse is within the bounds of the canvas
  if (
    l < mouseX &&
    mouseX < l + gridWidth &&
    t < mouseY &&
    mouseY < t + gridHeight
  ) {
    // Account for margins
    let x = mouseX - l;
    let y = mouseY - t;

    // Determine which cell the mouse is on
    let i = floor(x / cellWidth);
    let j = floor(y / cellHeight);

    // Toggle cell on/off
    cells[j][i] = !cells[j][i];

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

function togglePlay() {
  if (Tone.Transport.state == "started") {
    Tone.Transport.stop();
    playButton.html("play");
  } else {
    if (kit.loaded) {
      Tone.Transport.start();
      playButton.html("stop");
    }
  }
}
