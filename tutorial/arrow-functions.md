# Arrow Functions

## Arrow functions are just another, newer way of defining functions
## Arrow functions are often used as callbacks or to avoid issues with *this*

- How to define arrow functions
- How arrow functions behave using the *this*- context

--------------------------------------------------------------------------------

# Definition of arrow functions 

## Arrow functions are defined without the *function*- keyword
## They are mostly used for callback functions
## The behavior of the *this*- context is different to normal functions

### example:

/* 
function sayHello() {
    console.log("Hello");
}
*/

const sayHello = () => {
    console.log("Hello");       // same like above, but way shorter
}

sayHello(); // "Hello"


# Return statements and arrow functions

## Arrow functions can also have return statements

### example: 

/*
function multiply(a,b) {
    return a*b;
}
*/

const multiply = (a,b) => return a*b;   

multiply(5, 4);

## Technically every function can be replaced by arrow function if the function does not contain the *this*- keyword.



# Arrow functions and the *this*- keyword

## The *this*- context of an arrow function is fixed to its declaration context rather than its execution context

## The *this*- context of the logThis();- function will always be set the declaration context

### example:

// the LogThis function is declared in global / window - Scope

const logThis = () => => {
    return this;
}

console.log(logThis() === window); // true

const obj = {
    logThis: logThis
};

console.log(obj.logThis() === obj); // false