//tracker component
var ctracker;

//array for particles
const binCount = 1024;
let particles = new Array(binCount);

let fft;

//particle class
let Particle = function(position, direction, r, g, b) {
    this.position = createVector(windowWidth / 2, windowHeight / 2);
    this.speed = 1;
    this.color = [r + random(-32, 32), g + random(-32, 32), b + random(-32, 32)];
    this.direction = direction;

    this.draw = function() {
        ellipse(this.position.x, this.position.y, this.diameter);
        fill(this.color);
    }

    this.update = function(energy) {
        this.speed = energy;
        this.diameter = random(5, 7) + energy * 50;
        this.position.x += this.speed * 10 * Math.sin(this.direction);
        this.position.y += this.speed * 10 * Math.cos(this.direction);
    }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
    
  // no stroke for entire window
  noStroke();
  
  //audio input for particles + setting source
  let mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

  positionParticles();
  
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(windowWidth, windowHeight);
  videoInput.position(0, 0);

  //you can hide the video
  videoInput.hide();

  // setup canvas
  var cnv = createCanvas(800, 600);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

   // Create an Audio input
  //mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  //mic.start();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background (0);
  //similar to background but it will make transparent pixels
  //and will not get rid of the camera feed if not hidden
  clear();
  
  // Get the overall volume (between 0 and 1.0)
  //var v = mic.getLevel();
  // "Smooth" the volume variable with an easing function
  //volume += (v-volume)/3;
  
  //get the detection score, or how well the face is detected (from 0 to 1)
  var detectionScore = ctracker.getScore();

  if (detectionScore > 0) {
    
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();

    /*
    You can find all the points here
    https://camo.githubusercontent.com/e967f92904c8ef84228b8950d3a278efb895b9d2/68747470733a2f2f617564756e6f2e6769746875622e696f2f636c6d747261636b722f6578616d706c65732f6d656469612f666163656d6f64656c5f6e756d626572696e675f6e65775f736d616c6c2e706e67
    */

    var leftEyeX = positions[32][0];
    var leftEyeY = positions[32][1];

    var rightEyeX = positions[27][0];
    var rightEyeY = positions[27][1];

    var noseX = positions[62][0];
    var noseY = positions[62][1];
    
    var faceLeftX = positions[1][0];
    var faceLeftY = positions[1][1];
    var faceRightX = positions[13][0];
    var faceRightY = positions[13][1];
    
    //the distance between the left point and the rightmost point is a good indication
    //of the size of the face or proximity to the camera and I can use it to scale my graphic elements
    var size = dist(faceLeftX,faceLeftY, faceRightX, faceRightY);
    
    //draw the face
    fill(255,255,255,60);
    ellipse(noseX, noseY, size, size);
    
     //draw a star on the nose
    fill(255, 204, 0);
    push(); // save the current state of transformation (i.e. rotation)
    translate(noseX, noseY); // move the origin to the nose position
    rotate(frameCount / -50.0); // rotate by a small amount each frame
    star(0, 0, 20, 50, 5); // draw the star at the origin
    pop(); // restore the previous state of transformation
    

    /////When you click the mouse this draws all the detected positions
    if(mouseIsPressed) {
    for (var i = 0; i < positions.length; i++) {
      // set the color of the ellipse based on position on screen
      fill(255, 0, 0);
      // draw ellipse at each position point
      ellipse(positions[i][0], positions[i][1], 4, 4);
    }
    }

  }
  
  // for colorful audio reactive particles
  stroke(255);
  let t = 0
  for(i=0;i++<2000;a= noise(i%64.0)*9+t/r, point(400+cos(a)*r, 200+sin(a)*r/2.0)){
     r=abs(noise(i)-.2)*500;
     t+=0.001;
  }
  
  drawBackgroundArtwork();
    let spectrum = fft.analyze();
    updateParticles(spectrum);
  

}

// start at center and circle around it
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

//star energy
function updateParticles(spectrum) {
    spectrum.forEach((bin, i) => {
        let binLevel = map(bin, 0, 255, 0, 1);
        particles[i].update(binLevel);
        particles[i].draw();
    });
}

// function for white star spiral
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

function touchStarted() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
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