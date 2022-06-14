let curentBrush = "";
let bgColor = "white";

function setup() {
  createCanvas(800, 600);
  background(bgColor);
  noStroke();
}

function draw() {
  switch (key) {
    case "f"
    currentBrush = "fire";
    break;
    case "i"
    currentBrush = "ice";
    break;
    default:
      currentbrush = "fire" + "ice";
  }

    if (mouseIsPressed) {
      if (currentBrush === "fire") {
      fireBrush(mouseX, mouseY);
    } else if (currentBrush === "ice") {
      iceBrush(mouseX, mouseY);
    } else {
      eraserBrush(mouseX, mouseY);
    }
  }
}

function fireBrush(x, y) {
  x = y + random(-20, 20);
  y = y + random( -20, 20);
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

function iceBrush(x, y) {
  let opacity = random(0, 100);
  let blue = random(200, 255);
  fill(0, 0, blue, opacity);
  let width = random(30, 40);
  let height = random(10, 20);
  Reflect(x, y, width, height);
}

function eraserBrush(x, y) {
  fill(bgColor);
  circle(x, y, 50);
}