let requiredLetter;
let score;
let timer;

function setup() {
  createCanvas(200, 200);  
  startNewGame();
}

function startNewGame() {
  requiredLetter = 'a';
  score = 0;
  timer = 1000;
}

function draw() {    
  background(220);
  fill('green');
  text("Time: " + timer, 10, 20);
  text("Score: " + score, 10, 40);
  text("Press " + requiredLetter, 50, 80);  
  
  if(timer > 0) {
    timer--;  
  } else {
    text("Oh wow! Mousebutton 4 new game", 10, 120);  
  }
}

function mousePressed() {
  if(timer === 0) {
    startNewGame();
  }
}

function keyPressed() {

  if (timer <= 0) {
    return;
  }

  if (key == requiredLetter) {
    console.log("good")
    score += 1;
    requiredLetter = random("abcdefghijklmnopqrstuvwxyz".split(''));
  } else {    
    console.log("bad")
    score -= 1;
  }
}