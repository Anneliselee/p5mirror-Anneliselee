// Face Tracking by jeeyeonr

//this is the tracker component - it's just a black box don't worry about it
var ctracker;

/* 
if sound doesn't work click the gear button an select run in browser ON
*/
var mic;
var volume = 0;


function setup() {
  
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.position(0, 0);

  //you can hide the video
  //videoInput.hide();

  // setup canvas
  var cnv = createCanvas(800, 600);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

   // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

  noStroke();
}

function draw() {
  //similar to background but it will make transparent pixels
  //and will not get rid of the camera feed if not hidden
  clear();
  
  // Get the overall volume (between 0 and 1.0)
  var v = mic.getLevel();
  // "Smooth" the volume variable with an easing function
  volume += (v-volume)/3;
  
  //get the detection score, or how well the face is detected (from 0 to 1)
  var detectionScore = ctracker.getScore();

  if (detectionScore > 0) {
    
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();

    /*
    You can find all the points here
    https://camo.githubusercontent.com/e967f92904c8ef84228b8950d3a278efb895b9d2/68747470733a2f2f617564756e6f2e6769746875622e696f2f636c6d747261636b722f6578616d706c65732f6d656469612f666163656d6f64656c5f6e756d626572696e675f6e65775f736d616c6c2e706e67
    */

    var noseX = positions[62][0];
    var noseY = positions[62][1];
    
    var faceLeftX = positions[1][0];
    var faceLeftY = positions[1][1];
    var faceRightX = positions[13][0];
    var faceRightY = positions[13][1];
    
    //the distance between the left point and the rightmost point is a good indication
    //of the size of the face or proximity to the camera and I can use it to scale my graphic elements
    var size = dist(faceLeftX,faceLeftY, faceRightX, faceRightY);
    
    //draw the face
    fill(255,255,255,60);
    ellipse(noseX, noseY, size, size);
    
    //draw a star on the nose
    fill(255, 204, 0);
    push(); // save the current state of transformation (i.e. rotation)
    translate(noseX, noseY); // move the origin to the nose position
    rotate(frameCount / -50.0); // rotate by a small amount each frame
    star(0, 0, 20, 50, 5); // draw the star at the origin
    pop(); // restore the previous state of transformation
    
    

    /////When you click the mouse this draws all the detected positions
    if(mouseIsPressed) {
    for (var i = 0; i < positions.length; i++) {
      // set the color of the ellipse based on position on screen
      fill(255, 0, 0);
      // draw ellipse at each position point
      ellipse(positions[i][0], positions[i][1], 4, 4);
    }
    }

  }

}

// Function to draw a star
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}