class Star {
  constructor(_x,_y,_r1,_r2,_npoints,_colr,_colg,_colb) {
    this.x = _x;
    this.y = _y;
    this.r1 = _r1;
    this.r2 = _r2;
    this.npoints = _npoints;
    this.colr = _colr;
    this.colg = _colg;
    this.colb = _colb;
    
    this.sx = 0;
    this.sy = 0;
    this.angle = TWO_PI / _npoints;
    this.halfAngle = TWO_PI / _npoints / 2;
    
  }

  createStar() {
    noStroke();
    fill(this.colr,this.colg,this.colb);
    beginShape();
    
    for (let j = 0; j < TWO_PI; j += this.angle) {
      this.sx = this.x + cos(j) * this.r2;
      this.sy = this.y + sin(j) * this.r2;
      vertex(this.sx, this.sy);
      this.sx = this.x + cos(j+this.halfAngle) * this.r1;
      this.sy = this.y + sin(j+this.halfAngle) * this.r1;
      vertex(this.sx, this.sy);
      }
    endShape(CLOSE);
  }
  
  moveStar() {
    this.y += pow(this.r1, 0.9);
    
    if (this.y > height) {
      let index = stars.indexOf(this);
      stars.splice(index, 1);
    }
  } 
} 
