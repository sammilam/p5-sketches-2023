function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(30);
    noStroke();
    
    // Define the vertex points for the "G" shape
    let gShape = [
      createVector(0, 0),
      createVector(100, 0),
      createVector(100, 50),
      createVector(50, 50),
      createVector(50, 100),
      createVector(0, 100)
    ];
  
    // Set the number of "G" shapes to draw
    let numG = 10;
    
    // Loop through the number of "G" shapes to draw
    for (let i = 0; i < numG; i++) {
      // Set the position and size of the "G" shape
      let xPos = map(i, 0, numG-1, 50, width-50);
      let yPos = height/2;
      let size = map(sin(frameCount/10 + i), -1, 1, 30, 80);
  
      // Set the rotation of the "G" shape
      let rotation = map(sin(frameCount/20 + i), -1, 1, -45, 45);
  
      // Translate and rotate the canvas to the position and rotation of the "G" shape
      push();
      translate(xPos, yPos);
      rotate(rotation);
  
      // Scale the "G" shape to the desired size
      scale(size/100);
  
      // Draw the "G" shape using the defined vertex points
      beginShape();
      for (let j = 0; j < gShape.length; j++) {
        vertex(gShape[j].x, gShape[j].y);
      }
      endShape(CLOSE);
  
      // Restore the canvas to its original position and rotation
      pop();
    }
  }
  