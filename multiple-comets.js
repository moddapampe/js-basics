let canvasBase = 600;

let comet1 = {
  x: 0,
  y: 20,
  diameter: 50,
  velocity: 1,
}
let comet2 = {
  x: 50, 
  y: 25,
  diameter: 20,
  velocity: 1.25
}

function setup() {
  createCanvas(canvasBase, canvasBase);
  background("black");
  fill("orange");
  noStroke();
}

function draw() {
  background(0, 0, 0, 25);
  renderComet(comet1, canvasBase);
  renderComet(comet2, canvasBase);
}

function renderComet(comet, threshold) {
  comet.x = comet.x + comet.velocity;
  comet.y = comet.y + comet.velocity;

  circle(comet.x, comet.y, comet.diameter);

  if (comet.x > threshold || comet.y > threshold) {
    comet.x = random(0, 100);
    comet.y = 0;
  }
}