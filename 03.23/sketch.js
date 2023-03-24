let x= 0;
let y = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
    background("#3a3238");

    translate (width/2, height/2);

    noStroke();

    fill("#E8B4BC");
    ellipse(x, y, 500);
    fill("#6E4555");

    arc(x, y, 500, 500, 270, HALF_PI);




}