/*
Experimental Photography
Interactive Media Arts @ NYU
Ellen Nickles

NOTE: After uploading images to the left, 
File > Save to access them in your sketch
*/

let pics = [];

function preload() {
//  let pic0 = loadImage('images/0.png')
//  pics.push(pic0);
  
//   let pic1 = loadImage('images/1.png')
//  pics.push(pic1);
  
//   let pic2 = loadImage('images/2.png')
//  pics.push(pic2);
  
  for (let i = 0; i < 3; i++) {
    pics.push(loadImage(`images/${i}.jpg`))
  }

  console.log(pics)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  for (let i = 0; i < pics.length; i++){
    tint(255, random(0, 255))
    // play with scale
    let x = random(0, width);
    let y = random(0, height);
    image(pics[i], x, y)
  }
}

function draw() {

}
