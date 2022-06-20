let posX = 100;
let posY = 0;
let speed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(posX, posY, 50);
  
  if(posY > 200) {
    posY = 0;
    speed = speed ++ 1;
  } 
  
  posY = posY + speed;
}

function mousePressed() {
  speed = 1;
}
