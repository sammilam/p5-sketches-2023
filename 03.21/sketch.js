function setup() {
    createCanvas(1000, 1000);
    background("white");
    colorMode(HSB);
}

function draw() {

    noStroke();
    fill(mouseX, mouseX, mouseX);
    ellipse(485, height / 2, 500);
    fill("white");
    ellipse(width / 2, height / 2, 250);
    fill("white");
    quad(width / 2, height / 2, width / 2, 500, 900, 250, 800, height / 2);
    fill(mouseX, mouseY, 255);
    rect(480, height / 2, 235, 80);

}