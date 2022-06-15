# Objects in JS

## we often need group data (variables) that belong together

## what are objects 
## when to use objects
## what are *increment* and *decrement*


## what if we want more brushes - maybe like ten or hundreds? Using a variable for each single variable is not realistic.

### example for very bad code to draw multiple brushes:

let brush0X = 0;
let brush0Y = 200;
let brush1X = 100;
let brush1Y = 100;

function draw() {
    background(0, 0, 0, 10);
    circle(brush0X, brush0Y, 30);
    circle(brush1X, brush1Y, 30);
    brush0X += 1; // shorthand for 'brush0X = brush0X + 1'
    brush1X += 1;
}


### better example:

let brush0 = { x: 0, y: 200};


function draw() {
    background(0, 0, 0, 10);
    circle(brush0.x, brush0.y, 30);

    brush.x += 1; 
}


# defining and using objects
    - JavaScript objects are data types
    - objects will help you to group information for 'so called' entities
    - objects are a group of key value pairs


## objects are key values and are defined by curly braces '{''}'

### example:

let emptyObject = {};

let person = {name: "Peter", Age: 42}; // {key: "value"};
