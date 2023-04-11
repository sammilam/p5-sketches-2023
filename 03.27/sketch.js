let gs = [];
let colors = ["f5e3e0", "e8b4bc", "d282a6", "6e4555"];
let c;

function setup() {
  c = createCanvas(1000, 1000);
  textSize(50);

  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 80);
    let g = new G(x, y, size);
    gs.push(g);
  }
}

function draw() {
  background("#3a3238");

  // calculate the rotation angle based on the mouse position
  let angle = map(mouseX, 0, width, -180, 180);

  translate(mouseX, mouseY);
  rotate(angle);
  translate(-mouseX, -mouseY);

  // draw all "G" shapes
  for (let i = 0; i < gs.length; i++) {
    fill("#" + colors[i % colors.length]);
    gs[i].display();
  }
}

class G {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    push();
    translate(this.x, this.y);
    textSize(random(100));
    // draw the "G" text
    noStroke();
    textAlign(CENTER, CENTER);
    text("G", 0, 0);
    pop();
  }
}


function mousePressed() {
  saveCanvas(c, "G_pulse", "png");
}