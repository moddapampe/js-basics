# Callback- Functions

## JavaScript uses the concept of callback functions (a lot)


# Function objects
    - every function in JavaScript is a function object
    - a function is usually defined with a function name
    - other varibles can point to the function object
      - they'll point to the reference

## functions are objects that have a reference which variables can point to

### example:

// functions definition usindg the name logHello

function logHello() {
    console.log("hello");
}

// execute function using its name
logHello();

// assign new variable that holds a reference to th function
const HelloFn = logHello;

// function execution using the variable
helloFn();


# Anonymous functions

## functions can also be declared without a function name
    - Anonymous function

## Anonymous functions are declared without a function name
    - instead the returned reference of the function is assigned to a variable

# WARNING +++ Tracing errors with anonymous functions *can* be difficult
    - stack trace will only show that an error occured in an anonymous function


## declaration of an anonymous function

### example:

const sayHello = fuction() {
    console.log("hello");       // Anonymous function expression that returns a  reference to the new function
}

sayHello();


# functions as parameters

## a function can be passed as an parameter
    - the refereence to the function is passed

## the function can then be executed from another function

## function objeccts can be used as parameters

// Function definition using the name logHello
function sayHello() {
    console.log("hello");
}

function executeFn(fn) {
    fn();                       //execution of the passed function
}

executeFn(sayHello);


# Callback functions

## this concept is heavily used by JavaScript, i.e.:
    - the array API
    - eventhandlers from the DOM
    - Asynchronous programming like data handling with backend