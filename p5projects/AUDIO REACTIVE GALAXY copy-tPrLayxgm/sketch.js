//
let total;
//
const binCount = 1024
let particles = new Array(binCount)

let fft

let Particle = function(position, direction, r,g,b){
  this.position = createVector(windowWidth/2, windowHeight/2)
  this.speed = 1
  this.color = [r + random(-32,32),g+ random(-32,32),b+ random(-32,32)]
  this.direction = direction
  
  this.draw = function(){
    circle(this.position.x, this.position.y, this.diameter)
    fill(this.color)
  }
  
  this.update = function(energy){
    this.speed = energy
    this.diameter = random(5, 7) + energy * 50
    this.position.x += this.speed * 10 * Math.sin(this.direction)
    this.position.y += this.speed * 10 * Math.cos(this.direction)
    // if (this.position.y > windowWidth || this.position.x > windowHeight || this.position.y < 0 || this.position.x < 0) { 
    //   this.position = createVector(windowWidth/2, windowHeight/2)   
    // }
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  noStroke()
  
  let mic = new p5.AudioIn()
  mic.start()
  
  fft = new p5.FFT()
  fft.setInput(mic)
  
  positionParticles()
  
  total = 1200;

}

function draw(){
  background(0, 0, 0)
  let spectrum = fft.analyze()
  updateParticles(spectrum)
  
//   r2 = random(255); 
//     g2 = random(100,200); 
//     b2 = random(100); 
//     a2 = random(200,255);
  
//     push();
//     translate(width / 2, height / 2);
//     rotate(frameCount * 0.03);
//     for (let i = 0; i < total; i++) {
//         let angle = sin(i + frameCount * 0.02) * 60;
//         let angle2 = cos(i + frameCount * 0.004) * 800;

//         let inc = 85;
//         let waveX = map(sin(frameCount * 0.01), -1, 1, -inc, inc);
//         let waveY = map(cos(frameCount * 0.01), -1, 1, -inc, inc);

//         let a = -394;
//         let x2 = sin(radians(i)) * (angle2 + a) + waveX;
//         let y2 = cos(radians(i)) * (angle2 + a) + waveY;

				
// 	    fill(255);
// 		circle(x2, y2, 1);
// 		let size = map(sin(i * frameCount * 0.0002), -1, 1, 0, 4);
// 		fill(r2, g2, b2, a);
//       // not sure why this part is not working. I wanted it to be more visible + random colors
//     }
//     pop();
  
}

function windowResized() {
  // cWidth = windowWidth;
  // cHeight = windowHeight;
  // createCanvas(windowWidth, windowHeight);
  resizeCanvas(windowWidth, windowHeight);
}

function positionParticles() {
  for (let i = 0; i < particles.length; i++) {
    let x = random(0, width); // random x coordinate
    let y = random(0, height); // random y coordinate
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
  spectrum.forEach((bin, i) => {
    let binLevel = map(bin, 0, 255, 0, 1);
    particles[i].update(binLevel);

    // Add boundary checking and wrapping logic
    // if (particles[i].position.x > windowWidth) {
    //   particles[i].position.x = 0;
    // } else if (particles[i].position.x < 0) {
    //   particles[i].position.x = windowWidth;
    // }
    // if (particles[i].position.y > windowHeight) {
    //   particles[i].position.y = 0;
    // } else if (particles[i].position.y < 0) {
    //   particles[i].position.y = windowHeight;
    // }

    particles[i].draw();
  });
}

// Only for drawing static particles in one section
// function drawParticles() {
//   particles.forEach(particle => {
//     particle.diameter = 5
//     particle.draw()
//   })
// }

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume()
  }
}