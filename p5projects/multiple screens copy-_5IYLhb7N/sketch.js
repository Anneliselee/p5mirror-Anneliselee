// switching screens
var mode = 0

// pictures
let showSky = false;
let showSky2 = false;
let showSky3 = false;
let showBear = false;
let showBui = false;
let showGrad = false;
let showWord = false;
let showIcon = false;

//music
const firstButt = new Tone.Player("/goodlife/electricDrum.mp3", () => {console.log("done loading")});
firstButt.toDestination();



function preload() {
  arrow = loadImage('next.png');
  gl1 = loadImage('/goodlife/1.jpg');
  gl2 = loadImage('/goodlife/2.jpg');
  gl3 = loadImage('/goodlife/3.jpg');
  glB = loadImage('/goodlife/bear.png');
  glBui = loadImage('/goodlife/building.png');
  glGrad = loadImage('/goodlife/grad.png');
  glWord = loadImage('/goodlife/word.png');
  glIcon = loadImage('/gooodlife/icon.png');

}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(220);
  line(400, 0, 400, 600)
  // switching screens
  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
  } else if (mode == 2) {
    screen3();
  }
  
  eraseButt = createImg("eraser.png", "Eraser");
  eraseButt.position(435, 360);
  eraseButt.size(70, 60);
  eraseButt.mousePressed(redPen);
  
  nextButt = createImg("next.png", "Next");
  nextButt.position(505, 360);
  nextButt.size(60, 50);
  nextButt.mousePressed(nextPage);
  
  
  if(showSky == true){
    image(gl1, 0, 0, 400, 170);
  }
  if(showSky2 == true){
    image(gl2, 0, 170, 400, 170);
  }
  
  if(showSky3 == true){
    image(gl3, 0, 340, 400, 170);
  }
  if(showBear == true){
    image(glB, -20, 50, 250, 260);
  }
  if(showBui == true){
    image(glBui, -80, -20, 480, 540);
  }
  if(showGrad == true){
    image(glGrad, 260, 90, 100, 100);
  }
  if(showWord == true) {
    textSize(40);
    fill(229, 32, 153);
    textStyle(BOLD);
    text('kanYeWest', 180, 60,);
    textSize(20);
    text('Graduation', 235, 83,);
  }
  image(glicon,0, 400,20,20);
  

  

  
}


function screen1() {
  redButt = createButton(" ");
  redButt.position(440, 60);
  redButt.size(50, 50);
  redButt.style("background-color", "#8F13AB");
  redButt.mousePressed(redPen);
  
  orangeButt = createButton(" ");
  orangeButt.position(510, 60);
  orangeButt.size(50, 50);
  orangeButt.style("background-color","#AD2F98");
  orangeButt.mousePressed(sky2Butt);
  
  yellButt = createButton(" ");
  yellButt.position(440, 140);
  yellButt.size(50, 50);
  yellButt.style("background-color","#EC7841");
  yellButt.mousePressed(sky3Butt);
  
  greenButt = createButton(" ");
  greenButt.position(510, 140);
  greenButt.size(50, 50);
  greenButt.style("background-color","#934E0A");
  greenButt.mousePressed(bear);
  
  blueButt = createButton(" ");
  blueButt.position(440, 215);
  blueButt.size(50, 50);
  blueButt.style("background-color","#F7FACA");
  blueButt.mousePressed(building);
  
  blue2Butt = createButton(" ");
  blue2Butt.position(510, 215);
  blue2Butt.size(50, 50);
  blue2Butt.style("background-color","#1F36AF");
  blue2Butt.mousePressed(grad);
  
  purpButt = createButton(" ");
  purpButt.position(440, 290);
  purpButt.size(50, 50);
  purpButt.style("background-color","#3C3C3C");
  purpButt.mousePressed(icon);
  
  blackButt = createButton(" ");
  blackButt.position(510, 290);
  blackButt.size(50, 50);
  blackButt.style("background-color","#E5219C");
  blackButt.mousePressed(word);
  
}

function redPen() {
  
  console.log("hi")
  firstButt.start();
  showSky = true;
  
  // topSky.show();
}

function sky2Butt() {

  showSky2 = true;
  
}
function sky3Butt() {

  showSky3 = true;
  
}
function bear() {

  showBear = true;
}
function building(){
  showBui = true;
}
function grad(){
  showGrad  = true;
}
function word() {
  showWord = true;
}
function icon() {
  showIcon = true;
}





function screen2() {
  redButt = createButton(" ");
  redButt.position(440, 60);
  redButt.size(50, 50);
  redButt.style("background-color", "#FF70DD");
  redButt.mousePressed(redPen);
}

function screen3() {
  line(0, 0, width, height);
  line(0, width, width, 0);
}


//Method 1: More flexible, any order
function nextPage() {
  if (mode == 0) {
    mode = 1;
  } else if (mode == 1) {
    mode = 2;
  } else if (mode == 2) {
    mode = 0;
  }
}

//Method 2: Can only go in order
// function mousePressed(){
//   mode=mode+1;
//   if (mode==3) {
//     mode=0;
//   }
//   print(mode);
// }

function start() {
  Tone.Transport.start();
}
