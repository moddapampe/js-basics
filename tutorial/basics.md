
Basics of Programming(functions, loops, conditions)
Logical Operators [logische Operatoren]
Data Types / Datentypen (number, string, boolean)
Data Structures Datenstrukturen (array,objects)
How to code using p5.js

-------------------------------------------------------

# p5.js Library

## in addition to JavaScript
- easier to create animations, art and interactive graphical sketches than pure JavaScript

## p5 provides a website that contains:
- a browser-based editor where you can edit and run your local code live(!)
- a reference to all functions and features (basic JS and p5)


## The p5reference (Documentation) gives details an everything in p5 as well as JavaScript fundamentals
## Keep it open in another tab 4 easy access

## "A p5 (so called) sketches a default setup with two main functions

- setup() function that runs once at the beginning
- draw() function that "happens" every "frame" (many times per second)

# WE NEED A CLEAR UNDERSTANDING OF OUR FUTURE CODING ENVIROMENT!!!

# What is a program

## A (Computer)program is a collection of instructions
that can be executed by a computer to perform
a specific task.

### examples: git, vsc, p5-sketch, browser, calc


# What is a function

## A function is a part of a program

# Imagine a recipe as a program and 
# **a function is just one step of the recipe (Rezept, Schritte)**

- A function can be defined by the language or library itself
- Or a function can be defined by the developer :) and it would be...
- A function is just a definition of what will happen

- like in a Kitchen, remind a recipe:

- indrigents
- mis en place (got it all, [is it fresh?])
- steps to do (peel, cut, cook water, add salt, make a test, "let" it cook, place it right - enjoy 'program')

# <-- definiert was passieren soll - glasklar, #mussmanwissen -->

## A function is a block of code designed to perform a particular task
- Make the p5 setup or drw something on every frame

## A program consists of at least one function
- usally called main function
- in p5 you need at least the setup funcrtion to see any output

## A function needs to be defined first

A function can then be executed -> 'is called'
- from the program or from the developer (office or cook)
- p5 will look for a setup function and a draw function
    - and if it finds them it it will execute them

# Anatomy of a basic function

## A function starts with the 'fuction'- keyword, followed bey the functions name and the functions body enclosed in {curly braces}.

example:

function functionName(){
    line of code;
    line of code;
    ...
}

## a function name should be clear and descriptive, so say 'banana' to an apple and don't describe an apple like meat - cause it's not meat ;)

- function setup() -> will setup the p5-sketch
- function circle() -> will draw a triangle *joking*
- function background() - will change what in a specific color? :)

## function names in JavaScript should use 'camelCase', so called cause every new *word* begins with an uppercase 

example: diesIstEinBeispielFürCamelCode

### Parameter

## A function can accept optional parameters which instruct the function ho to behave

- Create a drawing area with specific dimensions
- Draw a background


# Anatomy of a Function #2

## A function can have optional parameters

example:

- function functionName() {
  ...}

- function functionName(parameter1, var varname1 [= Kartoffeln];) {
  ...}

- function functionName(salz, pfeffer, parameter3) {
  ...}

  ## A function and its parameters should have descriptive names

function setup() {
    ...
}

function background(color) {
    ...
}

function circle(x, y, diameter) {
    ...
}

## A function can be called with the function name an parentheses

exxample:

function setup() {
    createCanvas (400, 400);
}

function draw() {
    drawGreyBackground();
}

function drawGreyBackground() {
    background(220);
}


# What is a comment
same like comment out ehm explanations maybe - 

- its // comment // for a single-line comment
- and /*

                    for a multi-line comment

*/


# What is the console?!

## The console can log(print) messages for development purposes

## The console.log(); mehtod will print messages in p5 and JavaScript

### best friend of a developer

example:

function setup() {
    createCanvas(400, 400);
    console.log("this is the setup function");
}