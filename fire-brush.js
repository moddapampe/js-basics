function setup() {
    createCanvas(800, 800);
    background("white");
    noStroke();
}

function draw() {
    if (mouseIsPressed) {
      let diameter = random(10, 50);
      let green = 0;
      let opacity = 100;

      if (diameter < 20) {
        opacity = random(10, 50);
      } else {
        opacity = random(40, 70);
        green = random(100, 200);
        
      }

      fill(random(200, 255), green, 0, opacity);

      let x = mouseX + random(-10, 20);
      let y = mouseY + random(-10, 20);
      circle(x, y, diameter);
    }
  }