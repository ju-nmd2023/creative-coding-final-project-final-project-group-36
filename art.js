let t = 0;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(30);
  rectMode(CENTER);
}

function draw() {
  t += 0.02;
}
