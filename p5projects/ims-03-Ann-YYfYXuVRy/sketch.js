// A very imperfect port of https://github.com/kgolid/p5ycho/tree/master/trace
// Copyright and Author: Kjetil Golid - https://generated.space
// https://openprocessing.org/sketch/2232011

// I found this code on openprocessing.org
// I added the fullscreen button, canvas resizing function, random colored particles, and save artwork function. The number on the file name is the seed value, and will show the exact same drawing if you input that seed number. Everytime the canvas is played, it is a different seed number, which means a random artwork everytime.

//variables to define width and height of canvas
let cWidth;
let cHeight;

//fullscreen
let my = {};

let bottomEnd = 0.45;
let topEnd = 0.5;
let size = 600;
let numParticles = 2000;
let numSets = 5;
let particle_sets = [];
let hu = 0;
let perlinSeedX;
let perlinSeedY;
let lapse = 0;    // mouse timer
let a=0;

function setup() {
  // initialize perlin seed values for the noise function.
	perlinSeedX = round(random() * size);
	perlinSeedY = round(random() * size);
	
    cWidth = windowWidth;
    cHeight = windowHeight;
    createCanvas(cWidth, cHeight);
  
  // drawing properties of canvas
	noFill();
	background('#ffffff');
	// colorMode(HSB, 255);
  hu = random(255);
	stroke(0,15);
	strokeWeight(1.3);
	noFill();
	smooth();
  // create particle objects, and adds them to the particle_sets array.
	for (var j = 0; j < numSets; j++) {
		let particlesArray = [];
		
		for (var i = 0; i < numParticles; i++) {
			particlesArray.push(
				new Particle(
					randomGaussian(size / 2, 110),
					randomGaussian(size / 2, 110),
					random() * 2 * PI
				)
			);
		}
		particle_sets.push(particlesArray);
	}
  
  seed = floor(random(1000)); // Generate a random seed
  randomSeed(seed); // Set random seed for reproducibility
  
  //saving artwork button
  let saveButton = createButton('Save Artwork');
  saveButton.position(10, height + 10);
  saveButton.mousePressed(saveArtwork);
  
  //fullscreen button
  my.fullScreenBtn = createButton("Full Screen");
  my.fullScreenBtn.position (110, height + 10);
  my.fullScreenBtn.mousePressed(full_screen_action);
  
}

function saveArtwork() {
  // Save canvas as an image
  saveCanvas('pencil_art'+ a + "_" + seed, 'png');

  // Optionally, save seed to local storage
  localStorage.setItem('generative_art_seed', seed);
}

function windowResized() {
  cWidth = windowWidth;
  cHeight = windowHeight;
  createCanvas(cWidth, cHeight);
  resizeCanvas(cWidth, cHeight);
}

function full_screen_action() {
  my.fullScreenBtn.remove();
  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}


function draw() {
  // loops through each set of particles in the particle_sets array
	particle_sets.forEach(function(particles, index) {
		particles.forEach(function(particle) {
			particle.update(index);
			particle.display(index);
		});
	});
}


class Particle {
  // initialize position of x, y coordinates of particle position, angle, value, and color
	constructor(x, y, phi) {
		this.pos = {
			x,
			y
		};
		this.angle = phi;
		this.val = 0;
        this.color = color(random(255), random(255), random(255));
	}

  // updates the particle's position and angle based on noise values
	update(index) {
		this.pos.x += cos(this.angle)*5;
		this.pos.y += sin(this.angle)*5;
      
        // calculate noise value
		let nx = 1.0 * scaleFunction(this.pos.x);
		let ny = 1.0 * scaleFunction(this.pos.y);

		let n = {
			x: nx,
			y: ny
		};

		let nval = (noise(n.x + perlinSeedX, n.y - perlinSeedY) + 0.045 * (index - numSets / 2)) % 5;

		this.angle += 5 * (nval * 2 - 1);
		this.val = nval;
	}

  // displays the particle on the screen if its value is within a certain range.
	display(index) {
		if (this.val > bottomEnd && this.val < topEnd) {
            stroke(this.color);
            point(this.pos.x, this.pos.y);
		}      
	}
}

function scaleFunction(n) {
	return (size - n / size) * 2 - 1;
}

