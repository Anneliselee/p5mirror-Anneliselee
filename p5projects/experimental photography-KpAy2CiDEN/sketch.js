/* 
Experimental Photography 2023
Interactive Media Arts @ NYU
Ellen Nickles

External webcams, apps, and tips:
https://tinyurl.com/externalwebcams

Serial input code modified from sources:
https://github.com/ITPNYU/physcomp/tree/main/Labs/P5SerialLabs/P5ReadSerial/readSerialWebSerial

https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-webserial-input-to-p5-js/
*/

let webcams = [];
let num = 0;

let serial = new p5.WebSerial();
let portButton;

function setup() {
  pixelDensity(1);
  // Reset canvas width and height based
  // on camera capabilities, check Console
  createCanvas(1080, 1080);

  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } else {
    setupSerial();
    getVideoDevices();
  }
}

function draw() {
  // mirror video device
  translate(width, 0);
  scale(-1, 1);

  // if any webcams are detected
  if (webcams.length) {
    // Specify camera, check Console
    image(webcams[1], 0, 0, width, height);
  }

  // Convert to black and white
  // Only use with built-in or Iriun camera
  // filter(GRAY)
  // For other webcams use separate apps
  // linked in document above
}


/*------------------------------------*\
  Functions for Serial Input
\*------------------------------------*/

function serialEvent() {
  // handle the incoming data:
  let inData = serial.readString();
  console.log("sensor value: " + inData)

  if (inData && inData == 1) {
    num++;
    saveCanvas(`pic${num}.png`);
  }
}

function setupSerial() {
  serial.getPorts();
  serial.on("noport", makePortButton);
  serial.on("portavailable", openPort);
  serial.on("requesterror", portError);
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
}

function makePortButton() {
  portButton = createButton("choose port");
  portButton.position(10, 10);
  portButton.mousePressed(choosePort);
}

function choosePort() {
  if (portButton) portButton.show();
  serial.requestPort();
}

function openPort() {
  serial.open().then(initiateSerial);

  function initiateSerial() {
    console.log("port open");
  }

  if (portButton) portButton.hide();
}

function portError(err) {
  alert("Serial port error: " + err);
}

function portConnect() {
  console.log("port connected");
  serial.getPorts();
}

function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}

function closePort() {
  serial.close();
}

/*------------------------------------*\
  Functions for Video Devices
\*------------------------------------*/

function getVideoDevices() {
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      return devices.filter((device) => device.kind === "videoinput");
    })
    .then((filtered) => getVideo(filtered))
    .catch((err) => {
      if (err.message.substring(0, 19) === "cam.getCapabilities")
        alert(
          "InputDeviceInfo.getCapabilities() is not supported in this browser. Try Chrome or MS Edge."
        );
      else console.warn(`${err.name}: ${err.message}`);
    });
}

function getVideo(cams) {
  for (let cam of cams) {
    let index = cams.indexOf(cam);
    let capabilities = cam.getCapabilities();
    let constraints = {
      audio: false,
      video: {
        deviceId: `${cam.deviceId}`,
        width: `${capabilities.width.max}`,
        height: `${capabilities.height.max}`,
      },
    };
    webcams[index] = createCapture(constraints);
    webcams[index].hide();

    console.log(
      `webcams[${index}]\n${cam.label}\nMax width:\t${constraints.video.width}\nMax height:\t${constraints.video.height}\n`
    );
  }
}
