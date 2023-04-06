let gText;
let stretchAmount = 1;
let stretchSpeed = 0.05;
let fr = 30;
let sound;

function preload() {
  gText = loadFont('uni.ttf');
  sound = loadSound('lofi.mp3');
}

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textSize(200);
  textFont(gText);
  frameRate(fr);
  
}

function draw() {
  background(255);
  noStroke();

  stretchAmount = map(sin(frameCount * stretchSpeed), -1, 1, 1, 2);

  push();
  translate(width / 2, height / 2);
  scale(stretchAmount, random(10));
  text("G", 0, 0);
  pop();

      sound.play();
}




// Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=140858">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=140858">Pixabay</a>