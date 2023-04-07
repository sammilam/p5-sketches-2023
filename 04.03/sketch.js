let numLayers = 5;
let angle = 0;
let speed = 0.01;
let gText;
let x = -500;
let y = -500;


function preload() {
  gText = loadFont('poppin.ttf');
}

function setup() {
  c = createCanvas(1000, 1000, WEBGL);
  textAlign(CENTER, CENTER);
  textSize(500);
  textFont(gText);
  background(0);

}

function draw() {
    for (let i = 0; i < numLayers; i++) {
    let layerPos = map(i, 0, numLayers - 1, 0, height);
    for (let j = 0; j < numLayers; j++) {
      let colPos = map(j, 0, numLayers - 1, 0, width);
      push();
      translate(colPos, layerPos);
      rotateX(angle + i );
      let r = map(i, 0, numLayers - 1, 255, 0);
      let g = map(j, 0, numLayers - 1, 0, 255);
      let b = map(i + j, 0, numLayers * 2 - 2, 255, 0);
      fill(r, g, b);
      text("G", x, y);
      pop();
    }
  }

  angle += speed;
  if (angle > 360) {
    angle = 0;
  }
}


function mousePressed() {
  saveCanvas(c, "fresh-sketch", "png");
}
