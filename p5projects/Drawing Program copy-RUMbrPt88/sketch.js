let activateRainbow = false; //bool that keeps track of whether or not rainbow is activated
let openSans; //var that stores the custom font
let c; //stores the current canvas
let nameList = [
  "epicDrawing",
  "greatSketch",
  "lovelyPainting",
  "awesomePortrait",
  "decentLandscape",
  "beautifulArt",
  "appealingMural",
  "divinePicture",
]; //array of names for downloaded file

//Loads the font
function preload() {
  openSans = loadFont("OpenSans-VariableFont_wdth,wght.ttf");
}

//Loads initial canvas, creates all the buttons and sliders on the UI
function setup() {
  resetCanvas();

  //Controls size of pen stroke
  strokeSize = createSlider(1, 100, 10);
  strokeSize.position(120, 35);

  //Controls alpha scale
  alphaScale = createSlider(0, 255, 255);
  alphaScale.position(120, 85);

  //Controls amount of Red
  redScale = createSlider(0, 255, 0);
  redScale.position(460, 25);
  redScale.addClass("redSlider");

  //Controls amount of Green
  greenScale = createSlider(0, 255, 0);
  greenScale.position(460, 55);
  greenScale.addClass("greenSlider");

  //Controls amount of Blue
  blueScale = createSlider(0, 255, 0);
  blueScale.position(460, 85);
  blueScale.addClass("blueSlider");

  //Red preset button
  redButt = createButton(" ");
  redButt.position(270, 15);
  redButt.size(40, 40);
  redButt.style("background-color", "#FF0000");
  redButt.style("border", "none");
  redButt.mousePressed(redUpdate);

  //Green preset button
  greenButt = createButton(" ");
  greenButt.position(270, 65);
  greenButt.size(40, 40);
  greenButt.style("background-color", "#00FF00");
  greenButt.style("border", "none");
  greenButt.mousePressed(greenUpdate);

  //Blue preset button
  blueButt = createButton(" ");
  blueButt.position(320, 15);
  blueButt.size(40, 40);
  blueButt.style("background-color", "#0000FF");
  blueButt.style("border", "none");
  blueButt.mousePressed(blueUpdate);

  //Black preset button
  blackButt = createButton(" ");
  blackButt.position(320, 65);
  blackButt.size(40, 40);
  blackButt.style("background-color", "#000000");
  blackButt.style("border", "none");
  blackButt.mousePressed(blackUpdate);

  //Fun time ;)
  rainButt = createImg("rainbow.png","Rainbow Craziness");
  rainButt.position(370, 15);
  rainButt.size(40, 40);
  rainButt.mousePressed(rainbowUpdate);

  //Eraser preset button
  eraseButt = createImg("eraser2.png", "Eraser");
  eraseButt.position(368, 63);
  eraseButt.size(45, 45);
  eraseButt.mousePressed(eraseUpdate);

  //Button to reset Canvas
  resetButt = createImg("trash.png", "Reset Canvas");
  resetButt.position(619, 15);
  resetButt.size(38, 38);
  resetButt.mousePressed(resetCanvas);

  //Button to download Canvas as a jpg
  saveButt = createImg("save.png", "Download Icon");
  saveButt.position(620, 60);
  saveButt.size(40, 40);
  saveButt.mousePressed(downloadCanvas);
}

function draw() {
  pen();
  if (activateRainbow) {
    runRainbow();
  }
  drawMenu();
  drawPreview();
}

//Controls the drawing, if mouse is under UI, no drawing is done
function pen() {
  if (mouseIsPressed && mouseY < 120) {
  } else if (mouseIsPressed) {
    noStroke();
    fill(
      redScale.value(),
      greenScale.value(),
      blueScale.value(),
      alphaScale.value()
    );
    ellipse(mouseX, mouseY, strokeSize.value(), strokeSize.value());
  }
}

//Draws the bg and text of UI
function drawMenu() {
  noStroke();
  fill(240,240,240,200);
  rect(0, 0, windowWidth, 120);
  fill(0);
  textSize(16);
  textFont(openSans);
  text("Stroke Size", 120, 30);
  text("Alpha Value", 120, 80);
  text("R", 440, 34);
  text("G", 440, 64);
  text("B", 440, 94);
}

//Draws the stroke preview
function drawPreview() {
  fill(
    redScale.value(),
    greenScale.value(),
    blueScale.value(),
    alphaScale.value()
  );
  ellipse(60, 60, strokeSize.value(), strokeSize.value());
}

//Sets pen to red
function redUpdate() {
  redScale.value(255);
  greenScale.value(0);
  blueScale.value(0);
  activateRainbow=false;
}

//Sets pen to green
function greenUpdate() {
  redScale.value(0);
  greenScale.value(255);
  blueScale.value(0);
  activateRainbow=false;
}

//Sets pen to blue
function blueUpdate() {
  redScale.value(0);
  greenScale.value(0);
  blueScale.value(255);
  activateRainbow=false;
}

//Sets pen to black
function blackUpdate() {
  redScale.value(0);
  greenScale.value(0);
  blueScale.value(0);
  activateRainbow = false;
}

//Negates the activateRainbow bool
function rainbowUpdate() {
  activateRainbow = !activateRainbow;
}

//Randomizes the values for all RGB values
function runRainbow() {
  redScale.value(random(255));
  greenScale.value(random(255));
  blueScale.value(random(255));
}

//Sets pen to white
function eraseUpdate() {
  redScale.value(255);
  greenScale.value(255);
  blueScale.value(255);
  activateRainbow = false;
}

//Resets the canvas
function resetCanvas() {
  let c = createCanvas(windowWidth, windowHeight);
  background(255);
}

//Downloads the canvas as a jpg with a random name from the nameList array
function downloadCanvas() {
  saveCanvas(nameList[int(random(0, nameList.length))], "jpg");
}
