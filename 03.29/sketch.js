let rez1 = 0.003;
let rez2 = 0.003;
let rez3 = 0.003;

let size = 30;
let lets = ['g', 'G'];
let gap = 10;

let timeOffset = 0;
let myFont;

function preload() {
  myFont = loadFont('poppin.ttf');
}
function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 120, 100, 255);
  background(0, 0, 0);
  textFont (myFont);
    textSize(size);
}

function draw() {
  background(0);

  for (x= 0; x<width; x+=size+gap){
    for (y=0; y<height; y+=size+gap){
      n1 = noise(x*rez1, y*rez1, timeOffset);
      n2 = noise(x*rez2, y*rez2+10000, timeOffset);
      n3 = noise(x*rez3, y*rez3+20000, timeOffset);
      fill(n3*360, 100, 90);
      push();
      translate (x, y);
      rotate((n2-0.5)*PI);
      text (lets[floor(n1*2)], 0, 0)
      pop();
    }
  }
  
  timeOffset += 0.05; 
}

// reference: https://www.youtube.com/watch?v=cbKG6n7UYsE&ab_channel=Steve%27sMakerspace
