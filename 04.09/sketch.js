var video;
var vScale = 16;
var gFont;

function preload() {
  // Load the font to be used for the G's
  gFont = loadFont('Bowl.ttf');
}

function setup() {
  createCanvas(1000, 1000);

  video = createCapture(VIDEO);
  video.size(1000, 1000);
  video.hide();
}

function draw() {
  background(255);

  let gridSize = int(map(mouseX, 0, width, 15, 50));

  video.loadPixels();
  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {

      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let dia = map(r, 0, 255, gridSize, 2);

      let gSize = dia * 1.5;
      let gX = x + gridSize / 2;
      let gY = y + gridSize / 2;

      // Set the text properties
      textAlign(CENTER, CENTER);
      textSize(gSize);
      textFont(gFont);

      // Draw the G
      fill(r, g, b);
      noStroke();
      text("G", gX, gY);
    }
  }
}


// ref: https://www.youtube.com/watch?v=VYg-YdGpW1o&ab_channel=JeffThompson
