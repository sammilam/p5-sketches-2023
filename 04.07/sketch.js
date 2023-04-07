let font;
let fallingGs = [];

function preload() {
  font = loadFont("Bowl.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textFont(font);

  bounds = font.textBounds("G", 0, 0);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background("white");
  
  // Add a new falling "G" every frame with a random x position, size, and color
  fallingGs.push({
    x: random(width),
    y: -100,
    speed: random(2, 5),
    size: random(50, 200),
    color: color(random(90, 200), random(100, 200), random(190, 255))
  });
  
  // Draw each falling "G" and update its position
  for (let i = 0; i < fallingGs.length; i++) {
    let g = fallingGs[i];
    textSize(g.size);
    fill(g.color);
    text("G", g.x, g.y);
    
    // Move the falling "G" away from the mouse when it gets too close
    let distToMouse = dist(g.x, g.y, mouseX, mouseY);
    if (distToMouse < 200) {
      let avoidX = map(mouseX - g.x, -200, 200, -10, 10);
      let avoidY = map(mouseY - g.y, -200, 200, -10, 10);
      g.x -= avoidX;
      g.y -= avoidY;
    } else {
      g.y += g.speed;
    }
    
    // Stop the falling "G" when it reaches the bottom of the screen
    if (g.y + g.size / 2 >= height) {
      g.y = height - g.size / 2;
      g.speed = 0;
    }
  }

  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }

  // Remove the falling "G"s that have stopped falling
  fallingGs = fallingGs.filter(g => g.speed > 0);
}


function mousePressed() {
  saveCanvas(c, "falling", "png");
}
