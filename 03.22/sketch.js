
let angle = 0;
let x = 500;
let y = 500;


function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
}

function draw() {
    background("white");

    push();
    translate(x, y);
    rotate(angle);


    stroke("#373F51");
    strokeWeight(20);
    fill("#a9bcd0");
    ellipse(0, 0, 500, 550);
    stroke("#373F51");
    strokeWeight(20);
    fill("#a9bcd0");
    rect(0, 0, 300, 275);
    noStroke();
    rect(-20, 115, 150, 150);



    if (x > width) {
        x = 0;
    } else {
        x = x + 1;
        angle = angle + 1;
    }
    pop();

}