function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
}

let brush0 = { x: 0, y: 200 };


function draw() {
    background(0, 0, 0, 10);
    circle(brush0.x, brush0.y, 30);

    brush.x += 1; // shorthand for 'brush0X = brush0X + 1'
}

