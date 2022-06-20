# Scopes

- what are variable scopes
- what are local scopes
- what are global scopes
- what are block-scoped variables
- what are refactorings

# local variables

- till now all variables have been defined within a function
- they are called local variables and are only visible in the function itself

### example:

### bad idea:

function setup() {
  createCanvas(400, 400);
  let fillColor = "hotpink";
}

function draw() {
  fill(fillColor);
  circle(mouseX, mouseY, 30);
}

- will give a reference error, cause definition of color and the fill- command are not in the same scope
  - i.e. not between those { } curved brackets in the same scope

### better idea:

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  let fillColor = "hotpink";
  fill(fillColor);
  circle(mouseX, mouseY, 30);
}

- let fillColor and the fill- command itself are in the same scope - this should work for now. :>



# scopes and referenceErrors

## *! ReferenceError: xxx is not defined* is a common error when trying to access an invisible variable

## there are at least two possible causes if this error occurs

- variable is defined in a different scope
- variable is not defined at all -> maybe a damn fckn Tpyo :)


# the function scope

## variables declared in a function are only visible in the function itself

- this is called function scope

### example: 

function setup() {
  createCanvas(400, 400);
  const myColor = red;
}

function draw() {
  background(220);
  console.log(myColor); // ERROR: myColor seems like undefined //
}

### better one:

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  let fillColor = "darkgreen";
  fill(fillColor);
  circle(mouseX, mouseY, 25)
  console.log(fillColor);
}

# the block-scope

## variables declared (with *let* or *const*) inside an if- statement or loops are ONLY visible inside the actual code block 

- this is called block scope

### example: 

function draw() {
  if (mouseIsPressed) {
  let fillColor = "darkgreen";
  
  circle(mouseX, mouseY, 25);  
    }
  fill(fillColor);
}

### ReferenceError: fillColor is not defined

### better way:

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
  let fillColor = "darkgreen";
   fill(fillColor);
  circle(mouseX, mouseY, 25);  
    }
}

### this will work fine


# block scope and *var*

## variables declared with *var* inside a block are # ALSO # visible outside the block

- variables declared with *var* are NOT block-scoped
- the declaration will be automatically moved to the beginning of the next function scope
- it's called *hoistimg*

### example:

if(true) {
    var fillColor = "white";
}
fill(fillColor); // this really will work, cause *var* sucks

### example: no example right here - u shouldnt see it :P

## AGAIN: var sucks!!1


# global variables

## the *fillColor* and the *backgroundColor*variables are globally available, because they're defined in the global scope of the (p5) script.

- variables can also be defined outside of any functions
- these variables are called global variables
- they're visible globally - in ALL fuctions!
  - there is also a module scope when using ES modules (later more)

### example:

let fillColor = "lightgreen"       // outside and before of any scope //
let backgroundColor = "darkgreen"   // so, globally available //

function setup() {
  createCanvas(400, 400);
  background(backgroundColor)
  noStroke();
}

function draw() {
   fill(fillColor);
  circle(mouseX, mouseY, 25);  
}


# improving code with refactorings

## refactoring means to change your code

- adding new features or cleanUp zhe code
- changing or combinig parts of the code
- slightly altering parameters
- doing the same thing - faster and more elegant

## variables and reuse

- variables are for reuse
- variables avoid *magic strings*
  - instead of using the string "black" assign -> it to a variable named backgroundColor
- if using a value more than once with the same semantic meaning, it is usually time to drink a beer and forget about it. see beer as a variable option. [_]°


### example: 
### Is this good code or not?!
### Can u guess the requirement? :)

### older code:

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // strokeWeight should always be 20% of the circles diameter //
  strokeWeight(20/ 5);
  circle(mouseX, mouseY, 20);
  console.log();
}

## refactored to a newer one, easier to read and understand the whole code

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // strokeWeight should always be 20% of the circles diameter //
  let diameter = 20;
  let weight = diameter * 0.2;
  strokeWeight(weight);
  circle(mouseX, mouseY, 20);
  console.log();
}