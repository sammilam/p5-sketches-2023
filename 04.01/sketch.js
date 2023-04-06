
function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);

  rotateX(60)

  noFill();
  stroke(255);

  for (let i = 0; i < 100; i++){

    let r = map(sin(frameCount/2), -1, 1, 150, 200)
    let g = map (i, 0, 50, 150, 200)
    var b = map(cos(frameCount), -1, 1, 200, 100)
    stroke(r, g, b);

    rotate(frameCount/20)


    beginShape();
    for (let j =0; j< 360; j+=60 ){
      let rad = i * 3
      let x = rad *cos(j)
      let y = rad *sin(j)
      let z = sin(frameCount * 2 + i * 5)*50
      vertex(x, y, z)
    }


    endShape(CLOSE)
  }
}
