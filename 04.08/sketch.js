let particles = [];

function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

  // add new particles with a small probability
  if (random() < 0.1) {
    particles.push(new Particle());
  }

  // remove particles that are off the screen
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    if (p.isOffScreen()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = p5.Vector.random2D().mult(random(1, 5));
    this.acceleration = createVector(0, 0.1);
    this.lifespan = 255;
    this.text = "G";
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    fill(0, this.lifespan);
    noStroke();
    text(this.text, this.position.x, this.position.y);
  }

  isOffScreen() {
    return this.position.x < -50 || this.position.x > width + 50 || this.position.y < -50 || this.position.y > height + 50;
  }
}
