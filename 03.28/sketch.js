let x, y;
let size = 50;
let size2 = 25;
let c;


function setup() {
  c = createCanvas(1000, 1000);
  x = width / 2;
  y = height / 2;
  noStroke();
}

function draw() {
  background("#E8B4BC");
  fill("#3a3238");
  ellipse(x, y, size);
  fill("#E8B4BC");
  ellipse(x, y, size2);
  fill("#E8B4BC");
  triangle(x, y + 10, x + size, y - size, x + size, y + 10);
  fill("#3a3238");
  rect(x, y, 80 + size, 20);

  size += 5;
  size2 += 0.25;
  if (size >= min(width, height)) {
    size = 50;
  }
}

function mousePressed() {
  saveCanvas(c, "growingG", "png");
}