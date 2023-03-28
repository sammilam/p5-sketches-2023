let f = 0 ;

function setup() {
    c = createCanvas(1000,1500)

    noStroke();
    fill(0);

}

function draw() {
    f= f*0.1;



    background (255);


    stroke("black");
    ellipse (200, 200, random(400));
    ellipse (600, 200, noise(f)*400);
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png");
}
