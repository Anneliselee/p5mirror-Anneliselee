let colors = ["blue","red","green","pink"];
function setup() {
  createCanvas(400, 400);
  colors.push("purple");
  colors.push("yellow");
  colors.push("orange");
  console.log(colors);
}

function draw() {
  background(220);
  for(var i=0; i< colors.length; i++){
    fill(colors[i]);
    ellipse(60*i+50,100,50,50);
  }
  for(var i=0; i< colors.length; i++){
    fill(colors[i]);
    ellipse(60*i+20,60*i,50,50);
  }
  for(var i=0; i< colors.length; i++){
    fill(colors[i]);
    ellipse(70,50*i+60,60*i,50);
  }
}


