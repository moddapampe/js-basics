# Mouse interaction and Randomness

## p5 has been pretty static before

## using mouse interaction sparks joy which keeps you interrested in learning programming


# what u will learn?!

### we'll see how to interact with the mouse position
### how to create draw trails
### and how to create randomness

# keep in mind: variables are labels that point to specific values!

## the mouse position

- p5 makes it easy to use the mous to interact with the sketch
- p5 provides the mouseX and mouseY variables that are equal to the cursor's position on the canvas
- ### mouseX and mouseY are globally available in p5! 

### example:

function draw() {
  background(220);
  fill("blue")
  circle(mouseX, mouseY, 30);
}

# drawing trails

## we can create trails by ***removing*** the //background(); function with that comment - pretty cool!! :)

### example:

function draw() {
  //background(220);  /*uncomment to see blue trails*/
  fill("blue")
  circle(mouseX, mouseY, 30);
}

# dynamic circle size

## the mouse position can also be used to dynamically change the color

### example:

function draw() {
  //background(220);
  fill(mouseX / 400 * 255); // 400 = canvas-(width) * 255 = max. Farbwert
  circle(mouseX, mouseY, 20);
}

# USE THE LIBRARY!!!

# creating randomness with the random(); function

## the random(); function is pure fun - try it out! :)

## the random(); function in p5 will return a random number within a given range

- random(10); returns a random number between 0 and 10
- random(-5.01, 5.2) -> returns a random number between -5.01 and (+)5.2

### example:

function draw() {
  circle(mouseX, mouseY, random(30)); // Kreis ändert Durchmesser random bis max 30px
}

### example 2:


function draw() {
  fill(random(255), random(255), random(255)); //changes through all colors while changing the size of circle(); up to 30
  circle(mouseX, mouseY, random(30));
}

# if statements and conditions

## programs are conditional most of the time
## what we need is a way to address multiple possibilities

# if statements 
http://if-schleife.de/ :)

- what is an if statement
- what is an if-else statement

## with if we could specify which parts of a program should run

- if statements help to execute specific code based on a condition
- an if statement evaluates a condition
- the condition can either be a boolean (true, false, "maybe" *jokingly*)
- if the condition evaluates to true, the code is executed

### anatomy example:

function setup() {

  createCanvas(400, 400);
  background(0);
 
}
### if the mouse is not in ("over") the first 200px, it draws circles

function draw() {
  if(mouseX > 200) {
    circle(mouseX, mouseY, 50);
    }
}

# the mouseIsPressed(); variable indicates mouse if the mouse or any other pointing device is currently pressed

### example:

### if pressed = true (and it is *if u press or touch it*) draw circles with diameter 20px

function draw() {
  if(mouseIsPressed) { 
    circle(mouseX, mouseY, 20);
    }
}

## if statements can also be combined with an *else* branch
## the *else* branch is executed if the condition evaluates to boolean *false*

# nesting if statements can also be nested inside each other
# but CAUTION: nesting depth creates complexity # !

### example:

function setup() {

  createCanvas(400, 400);
  background("white");
 
}

function draw() {
  if(mouseIsPressed) {
    if(mouseX < 200) {
      circle(mouseX, mouseY, 20);
    } else {
      circle(mouseX, mouseY, 40);
    }
    fill("green");
  } else {
    background("white");
  }
}