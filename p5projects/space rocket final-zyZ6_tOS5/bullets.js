class Bullets {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  generate() {
    stroke('#42e5ff');
    strokeWeight(3);
    noFill();
    line(this.x, this.y - 15, this.x, this.y);
    // console.log(this.x)
    // console.log(this.y)
  }
  shot(){
    this.y = this.y - 10;
  }
}