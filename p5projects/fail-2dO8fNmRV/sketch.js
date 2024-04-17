let myButton;
let slider;

function setup() {
  createCanvas(500, 500);
  myButton=createButton("Random");
  myButton.position(190,200);
  myButton.style("font-size","30px");
  myButton.mousePressed(changeShapes);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function changeShapes(){
  fill(random(255),random(255),random(255))
}

function draw() {
  let val = slider.value();
  background(val, 60, 100, 10);
  ellipse(random(500),random(500),random(150))
}