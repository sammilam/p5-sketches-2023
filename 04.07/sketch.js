let canvasSize = 1000;
let gridSize = 50;
let gText;
let numCols = canvasSize / gridSize;
let numRows = canvasSize / gridSize;
let textOffset = gridSize / 2;
let textArray = ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"];
let angleArray = [];
let maxLetterSize = 50;
let minLetterSize = 10;
let c;
function preload() {
  gText = loadFont("Bowl.ttf");
}


function setup() {
  c = createCanvas(canvasSize, canvasSize);
  textAlign(CENTER, CENTER);
  textFont(gText);
  textSize(gridSize);
  for (let i = 0; i < numCols * numRows; i++) {
    angleArray[i] = random(0, 360);
  }
}

function draw() {
  background(255);

  let letterSize = map(mouseX, 0, canvasSize, minLetterSize, maxLetterSize);

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = i * gridSize + textOffset;
      let y = j * gridSize + textOffset;
      let textIndex = (i + j) % textArray.length;
      let letter = textArray[textIndex];
      let angleIndex = i * numRows + j;
      let angle = angleArray[angleIndex];
      push();
      translate(x, y);
      rotate(radians(angle));
      fill(255);
      textSize(letterSize);
      text(letter, 0, 0);
      pop();
    }
  }

  let lightX = map(mouseX, 0, canvasSize, -1, 1);
  let lightY = map(mouseY, 0, canvasSize, -1, 1);
  let lightDirection = createVector(lightX, lightY, 1).normalize();
  let lightColor = color(255, 200, 100);
  let ambientColor = color(50, 50, 50);
  applyLighting(lightDirection, lightColor, ambientColor);
}

function applyLighting(lightDirection, lightColor, ambientColor) {
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = i * gridSize + textOffset;
      let y = j * gridSize + textOffset;
      let textIndex = (i + j) % textArray.length;
      let letter = textArray[textIndex];
      let angleIndex = i * numRows + j;
      let angle = angleArray[angleIndex];
      let normal = createVector(cos(radians(angle)), sin(radians(angle)), 1);
      let lighting = getLighting(normal, lightDirection, lightColor, ambientColor);
      fill(lighting);
      let letterSize = map(mouseX, 0, canvasSize, minLetterSize, maxLetterSize);
      push();
      translate(x, y);
      rotate(radians(angle));
      textSize(letterSize);
      text(letter, 0, 0);
      pop();
    }
  }
}

function getLighting(normal, lightDirection, lightColor, ambientColor) {
  let intensity = normal.dot(lightDirection);
  intensity = constrain(intensity, 0, 1);
  let lighting = lerpColor(ambientColor, lightColor, intensity);
  return lighting;
}


function mousePressed() {
  saveCanvas(c, "yellow", "png");
}
