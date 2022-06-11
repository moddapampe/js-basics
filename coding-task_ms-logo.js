function setup() {

    createCanvas(400, 400);
    noStroke();
}

function draw() {
    background("white");
    fill("tomato");
    rect(5, 5, 160, 160);
    fill("yellowgreen")
    rect(180, 5, 160, 160);
    fill("skyblue");
    rect(5, 180, 160, 160);
    fill("orange");
    rect(180, 180, 160, 160);
}