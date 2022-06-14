# Fade-Out animations in p5

## how to fade out in p5
## how to animate something in p5

## by adding a transparent background to each frame, everything fades to black over time

### example:

function setup() {
  createCanvas(800, 600);

}

function draw() {
  circle(mouseX, mouseY, 80)
  background(0, 0, 0, 10);
}