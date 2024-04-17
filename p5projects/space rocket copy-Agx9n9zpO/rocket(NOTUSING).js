
class Rocket {

  show() {
    // fire outer
    colorMode(RGB);
    var fireOuter = 135 + random(0, 5);
    noStroke();
    fill("#ebc634");
    beginShape();
    curveVertex(0, 90)
    curveVertex(12, 110);
    curveVertex(0, fireOuter);
    curveVertex(0, fireOuter);
    curveVertex(-12, 110);
    curveVertex(0, 90);
    endShape();

    // fire inner
    var fireInner = 122 + random(0, 3);
    noStroke();
    fill("#e05928");
    beginShape();
    curveVertex(0, 90)
    curveVertex(8, 110);
    curveVertex(0, fireInner);
    curveVertex(0, fireInner);
    curveVertex(-8, 110);
    curveVertex(0, 90);
    endShape();


    // rocket bottom
    stroke(80);
    strokeWeight(2);
    fill(110);
    beginShape();
    vertex(12, 100);
    vertex(12, 105);
    vertex(-12, 105);
    vertex(-12, 100);
    endShape(CLOSE);


    // rocket mainbody
    stroke(160);
    strokeWeight(2);
    fill(170);
    beginShape();
    vertex(0, 55);
    vertex(25, 75);
    vertex(30, 105);
    vertex(0, 90);
    vertex(-30, 105);
    vertex(-25, 75)
    endShape(CLOSE)

    stroke(190);
    strokeWeight(3);
    fill(210);
    beginShape();
    vertex(0, 0);
    bezierVertex(15, 8, 20, 20, 20, 40);
    vertex(20, 50);
    vertex(16, 100);
    vertex(-16, 100);
    vertex(-20, 50);
    vertex(-20, 40);
    bezierVertex(-20, 20, -15, 8, 0, 0);
    endShape();

    stroke(160);
    strokeWeight(4);
    line(0, 70, 0, 105);

    stroke(100, 150, 180);
    fill(150, 200, 230);
    circle(0, 45, 20);
  }
}
