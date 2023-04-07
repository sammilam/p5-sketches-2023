let gText;
let stretchAmount = 1;
let stretchSpeed = 0.05;
let sound;
let c = "black";
let fft;

function preload() {
  gText = loadFont('uni.ttf');
  sound = loadSound('lofi.mp3');
}

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(400);
  textFont(gText);
  sound.play();
  fft = new p5.FFT();
}

function draw() {
  background(255);
  noStroke();

  let spectrum = fft.analyze();

  stretchAmount = map(spectrum[10], 0, 255, 1, 3);
  stretchSpeed = map(spectrum[20], 0, 255, 0.01, 0.1);

  let r = map(spectrum[30], 0, 255, 0, 255);
  let g = map(spectrum[40], 0, 255, 0, 255);
  let b = map(spectrum[50], 0, 255, 0, 255);

  c = color(r, g, b);

  push();
  translate(width / 2, height / 2);
  scale(stretchAmount, 1);
  fill(c);
  text("G", 0, 0);
  pop();
}



// should stretch based on sound frequency

// Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=140858">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=140858">Pixabay</a>