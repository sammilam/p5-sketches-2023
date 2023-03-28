let x = 0;
let y = 0;
let c;
let click = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
}

function draw() {
    background("#3a3238");

    translate(200, height / 2);

    for (let i = 0; i <= 1300; i++) {
        c = random(i, 255);
        fill(c, c, c);
        letter(i);
        x = x + i ;
    }


}

function letter(x) {
    noStroke();
    // fill(c);
    ellipse(x, y, 500);
    push();
    fill("#3a3238");
    ellipse(x, y, 350);
    // stroke("white");
    triangle(x, y + 30, x + 300, -200, x + 400, 30);
    pop();
    // fill(c);
    rect(x, y, 230, 55);
    rect(x + 190, y, 58, 230);
}

