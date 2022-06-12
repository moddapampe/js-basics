let canvasSize = 800;
let background = "white";
let rectSize = 185;

function setup() {
    createCanvas(canvasSize, canvasSize);
    noStroke();
    fill("tomato");
    rect(10, 10, rectSize, rectSize);
    fill("yellowgreen")
    rect(205, 10, rectSize, rectSize);
    fill("skyblue");
    rect(10, 205, rectSize, rectSize);
    fill("orange");
    rect(205, 205, rectSize, rectSize);

}

function draw() {
    fill(background);
    if (mouseIsPressed) {
        circle(mouseX, mouseY, random(25));
    }
}