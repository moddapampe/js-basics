function setup() {
    createCanvas(400, 400);
    background("darkgreen");
    noStroke();
}

function draw() {
    console.log("MouseX is " + mouseX + " and mouseY is ");
    if (mouseIsPressed) {
        circle(mouseX, mouseY, random(20));
    } else {
        background("green")
    }
}