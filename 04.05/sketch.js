let gText;
let angle = 0;
let angleSpeed = 0.05;
let x = 0;
let y = 0;
let fr = 25;
let c;
let l;

function preload() {
  gText = loadFont('Bowl.ttf');
}

function setup() {
  l = createCanvas(1000, 1000);
  frameRate(fr);
  textAlign(CENTER, CENTER);
  textSize(200);
  textFont(gText);
  background(255);

}

function draw() {
  const gridSize = 12;
  const gridSpacing = 150;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = (col - (gridSize - 1) / 2) * gridSpacing;
      const y = (row - (gridSize - 1) / 2) * gridSpacing;

      singleG(x, y);
      rotate(90);
    }
  }
}


function singleG(x, y) {
  angle = map(sin(frameCount * angleSpeed), -1, 1, -PI / 4, PI / 4);
  angleSpeed = map(sin(frameCount * 0.02), -1, 1, 0.01, 0.1);

  let r = map(sin(frameCount * 0.02), -1, 1, 0, 255);
  let g = map(sin(frameCount * 0.03), -1, 1, 0, 255);
  let b = map(sin(frameCount * 0.04), -1, 1, 0, 255);

  c = color(r, g, b);

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  stroke("black");
  strokeWeight(3);
  fill(c);
  text("G", x, y);
  pop();
}

function mousePressed() {
  saveCanvas(l, "swing", "png");
}
