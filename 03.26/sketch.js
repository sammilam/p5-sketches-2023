
let g = {
    x: 0,
    y: 0
};

let c;

let select = ["EEEBD0"]

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
}

function draw() {
    background("#3a3238");
    noStroke();

    // translate(width/2, height/2);
    letter(0, 0);

    

}

function letter(x, y) {
    fill("#EEEBD0");
    ellipse(x, y, 500);
    push();
    noStroke();
    fill("#3a3238");
    ellipse(x, y, 350);
    triangle(x, y + 30, x + 300, -100, x + 1100, 0);
    pop();
    // fill(c);
    rect(x, y, 250, 55);
    rect(x + 195, y, 58, 230);
}

function repeat(g){
    for (let i = 0; i <= 30; i++) {
        letter(g.x, g.y);
        g.x = g.x + 50;

    }
}
