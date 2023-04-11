let gs = [];
let gridSize = 10;
let gridSpacing = 100;
let currentColor = "#ffffff";
let gColorArray = ["#1b998b", "#2d3047", "#fffd82", "#ff9b71", "#e84855"];

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font);
  textSize(80);
  noStroke();
  textAlign(CENTER, CENTER);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * gridSpacing + gridSpacing / 2;
      let y = j * gridSpacing + gridSpacing / 2;
      gs.push({
        x: x,
        y: y,
        color: currentColor
      });
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < gs.length; i++) {
    let g = gs[i];
    fill(g.color);
    text("G", g.x, g.y);
  }
}

function mouseClicked() {
  let clickedG = getClickedG();
  if (clickedG) {
    clickedG.color = random(gColorArray);
  }
}

function getClickedG() {
  for (let i = 0; i < gs.length; i++) {
    let g = gs[i];
    let d = dist(mouseX, mouseY, g.x, g.y);
    if (d < gridSpacing / 2) {
      return g;
    }
  }
  return null;
}
