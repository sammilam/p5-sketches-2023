let c;

function setup() {
  c = createCanvas(1000, 1000);
  background(255);
  textSize(200);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);
  fill(0);
  textSize(200);
  textAlign(CENTER, CENTER);

  let layers = int(dist(mouseX, mouseY, width/2, height/2) / 30);

  for (let i = 1; i <= layers; i++) {
    let color = map(i, 1, layers, 0, 255);
    // stroke("white");         //<- can have stroke lines as well
    fill(color, 100, 150);
    let size = 200 + i*20;
    textSize(size);
    let x = width/2 ;
    let y = height/2 ;
    text("G", x, y);
  }
}

function mousePressed() {
  saveCanvas(c, "layered", "png");
}
