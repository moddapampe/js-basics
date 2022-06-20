function setup() {
    createCanvas(400, 400);
}
  
  function draw() {
    background(220);
    if (mouseIsPressed) {

      let coordinates = mouseX + "," + mouseY;
      text(coordinates, mouseX, mouseY);
      circle(mouseX, mouseY, 5)
    }
  }
  