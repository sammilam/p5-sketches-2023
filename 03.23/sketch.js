let x = 0;
let y = 0;

let click = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
    background("#3a3238");

    translate(width / 2, height / 2);
    if (click == true) {
        letter();

    }

}

function letter() {
    noStroke();
    fill("#E8B4BC");
    ellipse(x, y, 500);
    fill("#3a3238");
    ellipse(x, y, 350);
    // stroke("white");
    triangle(x, y + 30, x + 300, -200, x + 400, 30);
    fill("#E8B4BC");
    rect(x, y, 230, 55);
    rect(x + 190, y, 58, 230);
}

function mouseClicked() {
    click = true;

}