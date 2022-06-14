function setup() {
  createCanvas(800, 600);
}

function draw() {
  /*let diameter = random(30);
  circle(mouseX, mouseY, diameter);

  let diameter2 = random(20);
  circle(mouseX, mouseY, diameter2);*/

  drawRandomCircle(mouseX, mouseY, 40);
  drawRandomCircle(mouseX + 10, mouseY + 10, 30);
  drawRandomCircle(mouseX - 10, mouseY - 10, 20);
  
}

function drawRandomCircle(x, y, diameter) {
  diameter = random(diameter);
  //circle(mouseX, mouseY, diameter);
  circle(x, y, diameter);
  fill(random(255), random(255), random(255));
}

