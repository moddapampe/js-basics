function setup() {
    createCanvas(400, 400);
}
  
  function draw() {
    background(220);
    if (mouseIsPressed) {

      let coords = mouseX + "," + mouseY;
      text(coords, mouseX, mouseY);
      circle(mouseX, mouseY, 5)
    }
  }
  