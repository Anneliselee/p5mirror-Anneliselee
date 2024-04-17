let picRed;
let picOrange;
let picYell;

function preload() {
  picRed = loadImage('red.jpg');
  picOrange = loadImage('orange.jpg');
  picYell = loadImage('yellow.jpg');
}

function setup() {
  createCanvas(600, 500);
 
  redButt = createButton(" ");
  redButt.position(440, 60);
  redButt.size(50, 50);
  redButt.style("background-color", "#E54A4A");
  redButt.mousePressed(redPen);
  
  orangeButt = createButton(" ");
  orangeButt.position(510, 60);
  orangeButt.size(50, 50);
  orangeButt.style("background-color","#E89444");
  orangeButt.mousePressed(redPen);
  
  yellButt = createButton(" ");
  yellButt.position(440, 140);
  yellButt.size(50, 50);
  yellButt.style("background-color","#F8F062");
  yellButt.mousePressed(redPen);
  
  greenButt = createButton(" ");
  greenButt.position(510, 140);
  greenButt.size(50, 50);
  greenButt.style("background-color","#57E75B");
  greenButt.mousePressed(redPen);
  
  blueButt = createButton(" ");
  blueButt.position(440, 215);
  blueButt.size(50, 50);
  blueButt.style("background-color","#45C6E9");
  blueButt.mousePressed(redPen);
  
  blue2Butt = createButton(" ");
  blue2Butt.position(510, 215);
  blue2Butt.size(50, 50);
  blue2Butt.style("background-color","#963CDA");
  blue2Butt.mousePressed(redPen);
  
  purpButt = createButton(" ");
  purpButt.position(440, 290);
  purpButt.size(50, 50);
  purpButt.style("background-color","#934E0A");
  purpButt.mousePressed(redPen);
  
  blackButt = createButton(" ");
  blackButt.position(510, 290);
  blackButt.size(50, 50);
  blackButt.style("background-color","#000000");
  blackButt.mousePressed(redPen);
  
  eraseButt = createImg("eraser.png", "Eraser");
  eraseButt.position(470, 360);
  eraseButt.size(70, 60);
  eraseButt.mousePressed(redPen);
  
  //colorMode(HSB, 260,100,100,100);

}

function draw() {
  background(220);
  line(400, 0, 400, 600)
  
  image(picRed, 0, 0, 400, 200);
  image(picOrange, 0, 200, 400, 200);
  image(picYell, 0, 400, 400, 200);
  //hide();
  
  
  //fill(229,74,74);
  //redRect = rect(0, 0, 400, 160);
  
  
  
  //fill(254,164,78);
  //orangeRect = rect(0, 160, 400, 160);
  
  //fill(248,240,90)
  //rect(0,300,400,100)
  
  //fill(147,78,10)
  //brownRect = rect(0, 400, 400, 100);
  
  
  
}

function redPen() {
  
  console.log("hi")
  
  
}
