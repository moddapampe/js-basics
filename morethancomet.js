function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
}

let brushX = 0;
let brushY = 200;

function draw() {
  background(0, 0, 0, 10);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 30, 20, 80)
  brushX = brushX +1;
}