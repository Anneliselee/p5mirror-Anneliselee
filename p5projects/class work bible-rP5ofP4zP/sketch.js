let bible;
function setup() {
  createCanvas(400, 400);
  bible=loadStrings("bible.txt")
}

function draw() {
  background(220);
  for(var i=0;i<10;i++){
    text(bible[i],10,12*i)
  }
}