function setup() {
  createCanvas(800, 600);
  background('white');
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fireBrush(mouseX, mouseY);
  }
}

function fireBrush(x, y) {
  x = y + random(-200, 200);
  y = y + random( -200, 200);
let diameter = random(10, 30);
let green = 0;
let opacity = 100;

if (diameter < 20) {
  opacity = random(10, 40);
  } else {
    green = random(100, 200);
    opacity = random(40, 70);
  }
  fill(random(200, 255), green, 0, opacity);
  circle(x, y, diameter);
}