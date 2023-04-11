let x = 0;
let y = 0;
let c;
let l;
let click = false;
console.log("hello")
function setup() {
    l = createCanvas(1000, 1000);
    colorMode(HSB);
}

function draw() {
    background("#3a3238");

    translate(200, height / 2);

    for (let i = 0; i <= 500; i++) {
        c = random(i, 255);
        fill(c, c, c);
        letter(i);
        x = x + i;
    }


}

function letter(x) {
    noStroke();
    ellipse(x, y, 500);
    push();
    fill("#3a3238");
    ellipse(x, y, 350);
    triangle(x, y + 30, x + 300, -200, x + 400, 30);
    pop();
    rect(x, y, 230, 55);
    rect(x + 190, y, 58, 230);
}


function mousePressed() {
    saveCanvas(l, "colours", "png");
  }
  