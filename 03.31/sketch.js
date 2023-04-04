let gText;
let x = 0;
let y = 0;
let glowSize = 40; // size of the glow effect

function preload() {
  gText = loadFont('poppin.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(gText);
  textSize(200);
  textAlign(CENTER, CENTER);
  background(220);
}

function draw() {
  let colors = ["#1b998b","#2d3047","#fffd82","#ff9b71","#e84855"]; // an array of colors
  let index = floor(random(0, colors.length)); // pick a random index from the array
  let color = colors[index]; // get the color at the index

  // draw the glowing effect
  noStroke();
  fill(color + "88"); // add alpha to the color for transparency
  ellipse(x, y, glowSize);

  // draw the G on top of the glowing effect
  stroke("black");
  strokeWeight(5);
  fill(color);
  push();
  translate(width / 2, height / 2);
  text('G', x, y);
  pop();

  // update the position of the G with mouse position
  x = mouseX - width / 2;
  y = mouseY - height / 2;
}
