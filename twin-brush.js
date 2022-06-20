function setup() {
    createCanvas(400, 400);
}

function draw() {
    background('white');
    if (mouseIsPressed) {
        let green = 0;
        let diameter = random(25, 50);
        let opacity = 100;

        if (diameter > 25) {
            opacity = random(10, 50)
        } else {
        green= random(100, 150);
        opacity = random(50, 75);
    }

    fill(random(200, 255), green, 0, opacity);
    let x = mouseX + random(-25, 25);
    let y = mouseY + random(-25, 35);
    circle(x, y, diameter)
}
}
