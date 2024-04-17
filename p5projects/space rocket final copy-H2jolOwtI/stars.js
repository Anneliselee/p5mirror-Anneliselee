class Stars {

  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.v = v;
  }

  show() {
    colorMode(RGB);
    stroke(255, 30);
    fill(255);
    strokeWeight(10);
    this.d = random(this.v + 4);
    circle(this.x, this.y, this.d);
  }

  move() {
    this.y = this.y + this.v;
    if (this.y > height) {
      this.x = random(0, width);
      this.y = 0;
    }
  }
}