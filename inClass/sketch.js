let c;

function setup(){
    c = createCanvas(1000, 1000);

}

function draw(){
    // background (205, 100, 255);
    
    // fill("black");
    // rect(100, 100, 160, 450);
    // rect(290, 150, 160, 450);
    // rect(485, 100, 160, 450);
    // rect(680, 150, 160, 450);

    stroke(mouseX, mouseY, 0);
    strokeWeight(5);
    noFill();
    rect(50, 50, mouseX, mouseY);


    // ellipse(400, 200, 500);

}

function mousePressed(){
    saveCanvas(c, "03.15", "png");
}