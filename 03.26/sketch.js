let img;

function preload(){

    img = loadImage('g.jpg');
}


function setup(){
    createCanvas(1000, 1000);
    background ("black");


}

function draw(){
  
  image(img, 0, 0, width, height);
  let space = floor(10 + mouseX/20);
  for (let i = 0; i < width; i += space) {
    for (let j = 0; j < height; j+= space) {
      let imgX = map(i, 0, width, 0, img.width);
      let imgY = map(j, 0, height, 0, img.height);

      let c = img.get(imgX, imgY);
      fill(c);
      circle(i, j, space);
    }
  }
}