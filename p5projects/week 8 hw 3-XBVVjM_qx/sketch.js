/*
Experimental Photography
Interactive Media Arts @ NYU
Ellen Nickles

NOTE: After uploading images to the left, 
File > Save to access them in your sketch

In this example, image sizes match Canvas
width and height
*/

let total = 4;
let group1 = [];
let group2 = [];
let randomizeButton;
let saveButton;

function preload() {
  // does the total match the amount uploaded?
  for (let i = 0; i < total; i++) {
    // do the file extensions match those uploaded?
    group1.push(loadImage(`faces/${i}.jpg`));
    group2.push(loadImage(`plants/${i}.jpg`));
  }
}

function setup() {
  createCanvas(800, 400);
  background(220);
  // create buttons
  randomizeButton = createButton("randomize");
  randomizeButton.mousePressed(randomize);
  saveButton = createButton("save");
  saveButton.mousePressed(savePic);
}

function draw() {}

function randomize() {
  // try swapping the group numbers

  // shuffle the array
  let shuffled1 = shuffle(group1);
  
  // get the first image
  let left = shuffled1[0];
  // draw it on the canvas
  image(left, 0, 0);

  // shuffle the other array
  let shuffled2 = shuffle(group2);
  // get the first one
  let right = shuffled2[0];
  // get the pixels on the right half of that image
  let rightHalf = right.get(right.width / 2, 0, right.width / 2, right.height);
  // draw those pixels on the canvas
  image(rightHalf, width / 2, 0);
}

function savePic() {
  saveCanvas();
}
