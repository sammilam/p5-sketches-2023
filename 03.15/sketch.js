function setup(){
    createCanvas(1000, 1000);
    background ("white");
    console.log ("hello");
}

function draw(){
    noStroke();
    fill("#ffb703");
    ellipse (485, height/2, 500);
    fill("white");
    ellipse (width/2, height/2, 250);    
    fill("white");
    quad(width/2, height/2, width/2, 500, 900, 250, 800, height/2);
    fill("#ffb703");
    rect(480, height/2, 235, 80);

}