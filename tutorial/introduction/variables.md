# Variables

## without variables programs would use duplicated magic strings

## there is no programming language without variables

- what are variables
- how to define variables

- a variable is a label that holds a value
- variables can be used istead of concrete data
- variables NEED to be defined by a keyword
- variable are about to reuse

# declaring variables in JavaScript

### example:

function setup() {
    let canvasBase = 400;
    createCanvas(canvasBase, canvasBase);
}

function draw() {
    background(220);
}

# Keywords

## variables can be declared with the following keywords:

- var 
- let
- const


### example:

let variablenname1 = wert;
const variablenname2 = wert;


# The undefined value

## the undefined value is a special value defined by JavaScript(!)

### example:

function setup() {
    let canvasBase = undefined;
    console.log(canvasBase);
    //createCanvas(canvasBase, canvasBase);
}

function draw() {
    background(220);
}

[console output = undefined]

## the *let* and *const* keywords

- the *let* and *const* keywords were introduced with ES6 [EcmaScript 6]
- with ES6 the older keyword should NOT be used anymore, beacuse of its quirks
- anytime u see *var*, replace it with *let*(!!!)

## the values of variables declared with *let* can be changed.

### example:

let color = "hotpink";
color = "red";

const color = "hotpink";
color = "red"; <- will cause an error, u cant change constants>


# Variable names and reability

## the variable name does not help us to understand the code, BUT we're still able to understand the overall context.

- variable names should be self explained in the current context
- descriptive names icrease code readability
- variable names shoud use camelCase

### bad example:

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let myLittlePony = "hotpink"; 
  
  // myLittlePony describes not what it really does //
  
  fill(myLittlePony);
  circle(mousex, mouseY, 30);
}

### good example

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let fillColor = "hotpink";
  fill(fillColor);
  circle(mousex, mouseY, 30);
}

## again, use camelCase!!

let myVariableName = "hotpink";

let howWeDoThisInJS = "like this"


# possible errors with reserved kexwords and duplicate names

## duplicate variable / or function names

- variables can only declared once
- declaring a variable twice in the same scope will cause an error
- declaring a variable with the name of a function in the same scope will also cause an error

## reserved keywords

- each programming language has reserved keywords
- variable can not be named like reserved keywords
  - i.e. *function* or *let*

### example

let function = 'hotpink'; // does not work, cause *function* is reserved for functions //

let color 'red';
let color 'blue'; // also not working, cause *color* is declared twice


# possible reference errors

### example

let b = 2 * a;
let a = 10; 

// will cause an referenceError because th variable is used befor its even defined. //