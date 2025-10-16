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
 function draw() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(250, 40, 10), color(300, 70, 40), inter);
    stroke(c);
    line(0, i, width, i);
  }

  t += 0.02;
}
