// https://www.youtube.com/watch?v=JLAc9hMtcxk (Coding train tutorial on sine waves)


let total;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke()
    total = 1200;
}

function draw() {
    r = random(255); 
    g = random(100,200); 
    b = random(100); 
    a = random(200,255);
  
    background(0);
    push();
    translate(width / 2, height / 2);
    rotate(frameCount * 0.03);
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
		circle(x, y, 1);
		let size = map(sin(i * frameCount * 0.0002), -1, 1, 0, 4);
		fill(r, g, b, a);
      // not sure why this part is not working. I wanted it to be more visible + random colors
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}