// face tracker
var ctracker;

//array for particles
const binCount = 1024;
let particles = new Array(binCount);
let fft;

// particle class
let Particle = function(position, direction, r, g, b) {
    this.position = createVector(windowWidth / 2, windowHeight / 2);
    this.speed = 1;
    this.color = [r + random(-32, 32), g + random(-32, 32), b + random(-32, 32)];
    this.direction = direction;

    this.draw = function() {
        ellipse(this.position.x, this.position.y, this.diameter);
        fill(this.color);
    };

  // update based on energy
    this.update = function(energy) {
        this.speed = energy;
        this.diameter = random(5, 7) + energy * 50;
        this.position.x += this.speed * 10 * Math.sin(this.direction);
        this.position.y += this.speed * 10 * Math.cos(this.direction);
    };
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke(); 

  // audio input for particles + set source
    let mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

  // main particles
    positionParticles();
  
  // define video input (mac webcam)
  var videoInput = createCapture(VIDEO);
  
  // initialize face tracker  
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
}

function draw() {
    background(0);
    drawBackgroundArtwork();
  
  //analyze audio and draw particles depending on volume
    let spectrum = fft.analyze();
    updateParticles(spectrum);
  
  // check if face trackers works, 0 is no face detected
    var detectionScore = ctracker.getScore();
  if (detectionScore > 0) {
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    
    // Extract nose position
    var noseX = positions[62][0];
    var noseY = positions[62][1];
    
    // Draw the face ellipse
    var size = dist(positions[1][0], positions[1][1], positions[13][0], positions[13][1]);
    fill(255, 255, 255, 60);
    ellipse(noseX, noseY, size, size);
    
    // Draw a star on the nose
    fill(255, 204, 0);
    push();
    translate(noseX, noseY);
    rotate(frameCount / -50.0); 
    star(0, 0, 20, 50, 5); 
    pop(); 
   
    // Draw eyes
    // fill(255);
    // ellipse(positions[27][0], positions[27][1], 10, 10);
    // ellipse(positions[32][0], positions[32][1], 10, 10);

    // Draw additional facial landmarks if mouse is pressed
    if (mouseIsPressed) {
        for (var i = 0; i < positions.length; i++) {
            fill(255, 0, 0);
            ellipse(positions[i][0], positions[i][1], 4, 4);
        }
    }
}
 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function positionParticles() {
    for (let i = 0; i < particles.length; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let direction = map(i, 0, binCount, 0, 360);
        let position = createVector(x, y);
        let r = map(i, 0, binCount, 33, 223);
        let g = map(i, 0, binCount, 33, 223);
        let b = map(i, 0, binCount, 33, 223);
        let partickle = new Particle(position, direction, r, g, b);
        particles[i] = partickle;
    }
}

function updateParticles(spectrum) {
  // random particles
    spectrum.forEach((bin, i) => {
        let binLevel = map(bin, 0, 255, 0, 1);
        particles[i].update(binLevel);
        particles[i].draw();
    });
}

// white spiral star
function drawBackgroundArtwork() {
    let total;
    total = 1200;

    push();
    translate(width / 2, height / 2); // Translate to the center of the screen
    for (let i = 0; i < total; i++) {
        let angle = sin(i + frameCount * 0.02) * 60;
        let angle2 = cos(i + frameCount * 0.004) * 800;

        let inc = 85;
        let waveX = map(sin(frameCount * 0.01), -1, 1, -inc, inc);
        let waveY = map(cos(frameCount * 0.01), -1, 1, -inc, inc);

        let a = -394;
        let x = sin(radians(i)) * (angle2 + a) + waveX;
        let y = cos(radians(i)) * (angle2 + a) + waveY;

        fill(255);
        ellipse(x, y, 1);
        let size = map(sin(i * frameCount * 0.0002), -1, 1, 0, 4);
        fill(random(255), random(100, 200), random(100), random(200, 255));
    }
    pop();
}

// Function to draw a star for face
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// audio debug
function touchStarted() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
}
