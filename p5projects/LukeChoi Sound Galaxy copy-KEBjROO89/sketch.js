let fft

let Particle = function(position, direction, r,g,b){
  this.position = createVector(winwidth/2, height/2)
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
    if (this.position.y > width || this.position.x > height || this.position.y < 0 || this.position.x < 0) { 
      this.position = createVector(width/2, height/2)   
    }
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
  
}

function draw(){
  background(0, 0, 0)
  let spectrum = fft.analyze()
  updateParticles(spectrum)
}

