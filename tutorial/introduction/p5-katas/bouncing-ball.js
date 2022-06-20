

let speedY = 3;
let posX = 50;
let speedX = 2;
let posY = 50;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  fill('red')
  circle(posX, posY, 50);
  posX += speedX;
  posY += speedY;
  
  if (posX <= -0.5 || posX >= width) {
    speedX = -speedX;
  }

  if (posY <= 0.5 || posY >= width) {
    speedY = -speedY;
  }
}