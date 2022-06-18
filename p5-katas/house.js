function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	fill('red');

	// A triangle at (100, 250), (250, 170) and (330, 300)
	triangle(70, 200, 145, 50, 215, 200);

    fill('yellow');
    rect( 70, 200, 145, 145);
        
        fill('brown');
        rect(80, 280,50, 60);
        rect(140, 220, 60, 42);

        fill('silver');
        circle(90, 320, 5);

        fill('silver');
        rect(83, 285,44, 20);
        rect(142, 222, 28, 20);
        rect(170, 222, 28, 20);
        rect(142, 242, 28, 18);
        rect(170, 242, 28, 18);
}
