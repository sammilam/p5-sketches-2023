let x = 0;
let y = 0;
let c;

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
}

function draw() {
    background("#3a3238");

    // translate(width/2, height/2);

    c = random(0, 200);

    for (let i = 0; i <= 10; i++) {
        if (mouseX >= width / 2) {
            fill("#E87EA1");
            letter(mouseX, mouseY);
        }
        else {


            fill(c, 200, 200);
            letter(mouseX, mouseY);
        }
    }


    console.log(c);

}

function letter(x, y) {
    ellipse(x, y, 500);
    push();
    noStroke();
    fill("#3a3238");
    ellipse(x, y, 350);
    triangle(x, y + 30, x + 300, 0, x + 5000, 0);
    pop();
    rect(x, y, 230, 55);
    rect(x + 190, y, 58, 230);
}

