let posX = 0;
let posY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('red')
  circle(posX, posY, 30);
  
  if(posX < 200) {
    posX = posX + 1;
  } 
}

function mousePressed() {
  posX = 0;
}
