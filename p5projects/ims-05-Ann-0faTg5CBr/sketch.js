let colors = "ffc857-e9724c-c5283d-481d24-255f85-a9e5bb-2d1e2f-777da7-94c9a9-074f57".split("-").map(a => "#" + a);
let total;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke()
    total = 1200;
}

function draw() {
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

        // let w = 860;
        // let x1 = sin(radians(i)) * (w / angle);
        // let y1 = cos(radians(i)) * (w / angle);
				
	    fill(255);
		circle(x, y, 1);
		let size = map(sin(i * frameCount * 0.0002), -1, 1, 0, 4);
		fill(colors[i % colors.length]);
		//circle(x1, y1, size);
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}