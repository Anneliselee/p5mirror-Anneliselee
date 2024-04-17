class Bullets {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  shot() {
    stroke('#42e5ff');
    strokeWeight(3);
    noFill;
    line(this.x, this.y - 15, this.x, this.y);
    this.y -= 5;
  }
}