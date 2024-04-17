let bg;
let pics = [];

function preload() {
  bg=loadImage("bg.jpg")
  //bg1=loadImage("images/0.png")
  for (let i = 0; i < 10; i++) {
    pics.push(loadImage(`images/${i}.png`))
  }

  console.log(pics)
}


function setup() {
  createCanvas(bg.width, bg.height);
  image(bg,0,0, bg.width, bg.height)
  //image(bg1,0,0, bg.width, bg.height)
  
  for (let i = 0; i < pics.length; i++){
    // play with transparency:
    tint(255, random(150, 255))
    
    // also play with scale!
    let scaleFactor = 0.5;
    
    // also play with rotating images!
    
    let x = random(0, bg.width/2);
    let y = random(0, bg.height/4);
    image(pics[i], x, y)
  }
  
}

function draw() {
  //background(220);
//   image(bg,0,0, bg.width, bg.height)
//   //image(bg1,0,0, bg.width, bg.height)
  
//   for (let i = 0; i < pics.length; i++){
//     // play with transparency:
//     tint(255, random(0, 255))
    
//     // also play with scale!
//     // also play with rotating images!
    
//     let x = random(0, width);
//     let y = random(0, height);
//     image(pics[i], x, y)
//   }
}