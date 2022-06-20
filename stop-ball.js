let posX = 0;
let posY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(random(200, 255));
  circle(posX, posY, 30);
  
  if(posX < 400) {
    posX = posX + 1;
  } 
}

function mousePressed() {
  posX = 0;
}
