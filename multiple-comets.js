let canvasBase = 600;

let comets = [];

function createRandomComet() {
  let comet = {
    x: randomStartX(),
    y: randomStartY(),
    diameter: random(5, 60),
    velocity: random([1, 2, 3])
  };
  comets.push(comet);
}

function randomStartX() {
  return random(0, canvasBase / 2);
}

function randomStartY() {
  return random(0, canvasBase / 2);
}


function setup() {
  createCanvas(canvasBase, canvasBase);
  background("black");
  fill("orange");
  noStroke();

  let cometCount = random(6,12);
  for (let i = 0; i < cometCount;i++) {
    createRandomComet();
    
  };
}

function draw() {
  background(0,0,0,10);

  for (let i = 0; i < comets.length; i++) {
    renderComet(comets[i], canvasBase);
  }
}

function renderComet(comet,treshold) {
  treshold = treshold + comet.diameter;

  comet.x = comet.x + comet.velocity;
  comet.y = comet.y + comet.velocity;

circle(comet.x, comet.y, comet.diameter);

if (comet.x > treshold || comet.y > treshold) {
  comet.x = randomStartX();
  comet.y = randomStartY;
}

}