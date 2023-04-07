let circleX, circleY, circleDiameter;

function setup() {
  createCanvas(400, 400);
  circleX = 150;
  circleY = 150;
  circleDiameter = 200;
}

function draw() {
  background(220);

  // Set circle stroke weight and color
  strokeWeight(10);
  stroke(0);

  // Draw the main circle
  circle(circleX, circleY, circleDiameter);

  // Draw the top semicircle
  let arcStart = map(circleDiameter, 200, 100, 0, PI);
  let arcEnd = PI;
  arc(circleX, circleY - circleDiameter/2, circleDiameter/2, circleDiameter/2, arcStart, arcEnd);

  // Draw the bottom semicircle
  arcStart = 0;
  arcEnd = map(circleDiameter, 200, 100, 0, PI);
  arc(circleX, circleY + circleDiameter/2, circleDiameter/2, circleDiameter/2, arcStart, arcEnd);

  // Shrink circle size
  circleDiameter -= 10;

  // If circle is too small, reset size
  if (circleDiameter < 100) {
    circleDiameter = 200;
  }
}
