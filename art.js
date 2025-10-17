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

  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      push();
      translate(x + 50, y + 50);
      rotate(sin(t + (x + y) * 0.002) * 0.5);

      let glow = color(0, random(70, 100), random(60, 100), 80);
      fill(glow);
      stroke(0, 0, 100, 20);
      strokeWeight(2);

      rect(0, 0, 60 + sin(t + x * 0.01) * 20, 60 + cos(t + y * 0.01) * 20);
      pop();
    }
  }
  noFill();
  for (let i = 0; i < 4; i++) {
    stroke(180 + i * 20, 100, 100, 50);
    strokeWeight(2);
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let y =
        height / 2 + sin(x * 0.02 + t + i) * 40 + noise(x * 0.01, t * 0.3) * 50;
      vertex(x, y);
    }
    endShape();
  }
  
noStroke();
fill(0, 0, 100, 80);
textAlign(CENTER);
textSize(14);
text(
  "Press any key to shift red glow",
  width / 2,
  height - 20
);
}

function keyPressed() {
  background(random(0, 10), 100, 30);
  t += random(0.5, 2);
}

