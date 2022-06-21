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