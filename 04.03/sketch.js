let numLayers = 10;
let angle = 0;
let speed = 0.1;
let gText;

function preload() {
  gText = loadFont('uni.ttf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  textAlign(CENTER, CENTER);
  textSize(500);
  textFont(gText);
}

function draw() {
  background(0);

  for (let i = 0; i < numLayers; i++) {
    let layerPos = map(i, 0, numLayers - 1, 0, height);
    for (let j = 0; j < numLayers; j++) {
      let colPos = map(j, 0, numLayers - 1, 0, width);
      push();
      translate(colPos, layerPos);
      rotateX(angle + i * 20);
      let r = map(i, 0, numLayers - 1, 255, 0);
      let g = map(j, 0, numLayers - 1, 0, 255);
      let b = map(i + j, 0, numLayers * 2 - 2, 255, 0);
      fill(r, g, b);
      text("G", 0, 0);
      pop();
    }
  }

  angle += speed;
  if (angle > 360) {
    angle = 0;
  }
}

