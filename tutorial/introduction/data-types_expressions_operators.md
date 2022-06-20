# Data Types, Expressions and Operators

- Data Types are core concepts of every programming language
- Expressions are often used in JavaScript and many developers may not even know about them
- Business logic = comparison

# What we'll learn

## What are data types
## What is *null* and *undefined*
## What are comparison operators
## What are logical operators

# Data Types in JavaScript

- Variables are labels that point to values
- These values have several types
  - Number
  - String -> Text 
  - Boolean -> *true*, *false* or ***maybe*** *lol* :D

# Typical Data Types of JavaScript are:

## Numbers:

let size = 40;
let count = -5;

## Strings

let colorName = 'salmon';
let firstName = 'Mary';

## Boolean Values

let isMouseClicked = false;
let isMotivated = true;
let hasEnoughEnergy = maybe;


# *undefined* and *null*

## The *undefined* and *null* values in JavaScript have different meanings [!]

- *undefined* means a variable has been declared but NOT yet been assigned a value
- *null* is a value, which can be assigned to a variable as a representation of no value

### example:

the value of currentUser has not been assigned

let currentUser;

there is no currentUser

currentUser = null;

# Expression in JavaScript explained

## expressions produce and return a value

- An expression is any chunk of code that produces a value
- The result of an expression can be assigned to a variable

### example for expressions:

let firstName = "Jane"; -- returns the string "Jane"

let lastName = "Jane" + "Doe"; -- returns "Jane" "Doe"

let 5 * 7; -- returns 35

let 42 > 0; -- returns true 


# Comparison Operators

## - Values in JavaScript can be compared with operators
      
      - Greater than        >
      - less than           <
      - greater or equal    >=
      - Less than or equal  <=
      - equal               ==
      - Strict equal        ===

- expressions are often used as conditions for *if*- statements
- Each expression or valuue can be evaluated as a boolean
- later we will talk about it more detailed

### example:

function setup() {
  createCanvas (400, 400);
}

function draw() {
  let diameter = 20;
  if(mouseY > 200) {
    diameter = 40;
  }
  cirlce(mouseX, mouseY, diameter); -- if mouse is over y200  diameter++
}


# Equal and Strict Equal

## The equality operator *==* will ONLY compare the values of hte operands
## The strict quality operator *===* will compare value and type of the operands


# Logical Operators

## multiple expressions can be combined with logical operators
## logical operators are:
  - logical AND ('&&') is used to check if multiple  operands (i.e. expressions) are true
  - logical OR ('||') are used to check if at least one operand (expression) is true

### example:

10 > 5 && 5 < 10 --> true

10 > 5 && 5 > 10 --> false

------------------------------------

0 > 11 || 1> 0 --> false OR true = true

1 < 0 || 0 > 1 --> false OR false = false


# Logical NOT Operator

## the logical NOT operator is often used with *if*- statements
  
  - the logical NOT operator ('!') is used to NEGATE the actual operand
  - the logical NOT operator returns *true* into *false* and vice versa

### example:

if(mouseIsPressed === false) {
  background('white');    --> Without logical NOT
}

if(!mouseIsPressed) {
  background('white');    --> with logical NOT (i.e '!true' = false, '!false' = true)
}

# Implicit Coercions

## implicit coercions makes programmers hate JavaScript

## implicit coercions can cause tricky errors 

### be careful when using the equality operator because of the implicit coercions that happen under the hood
  
  - In JavaScript it is possible to compare values of different types
  - JavaScript will automatically convert values
    - ...known as Implicit Coercions (Typenunsicherheit!)

### example:

true == 1     --> true

true == "1"   --> true

false == "0"  --> true

false == ""   --> also true uha