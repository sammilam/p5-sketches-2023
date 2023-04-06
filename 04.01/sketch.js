let numLayers = 5;
let angle = 0;
let speed = 0.03;
let gText;
let x = 0;
let y = 0;

let numRows = 7;
let numCols = 7;
let gridSpacing = 150;

function preload() {
  gText = loadFont('uni.ttf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  textAlign(CENTER, CENTER);
  textSize(150);
  textFont(gText);
}

function draw() {
  background(0);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let posX = map(j, 0, numCols - 1, -gridSpacing * (numCols - 1) / 2, gridSpacing * (numCols - 1) / 2);
      let posY = map(i, 0, numRows - 1, -gridSpacing * (numRows - 1) / 2, gridSpacing * (numRows - 1) / 2);

      push();
      translate(posX, posY);

      // Draw shapeG
      shapeG();

      pop();
    }
  }

  angle += speed;
  if (angle > 360) {
    angle = 0;
  }
}

function shapeG() {
  for (let i = 0; i < numLayers; i++) {
    let layerPos = map(i, 0, numLayers - 1, 0, height);
    for (let j = 0; j < numLayers; j++) {
      let colPos = map(j, 0, numLayers - 1, 0, width);

      push();
      rotateX(angle + i * 20);
      let r = map(i, 0, numLayers, 255, 0);
      let g = map(j, 0, numLayers, 0, 255);
      let b = map(i + j, 0, numLayers, 0, 255);
      fill(r, g, b);
      text("G", 0, 0);
      pop();
    }
  }
}
