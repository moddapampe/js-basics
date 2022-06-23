# The *this*- Keyword
# why and what

## The *this*- keyword can cause behaves differently from other programming languages
## Properly understanding the *this*- keyword is necessary to really grasp JavaScript

----------------------------------------------------------------------------

# The *this*- keyword explained

## The *this*- keyword points to its execution context
    - from where is it executed? Who is executing this function?

## ++++ CAUTION ++++ JavaScript offers ways to set a fixed *this*- Context (!!!)
    - We'll will not discuss this now, cause its preserved for special cases



# The *this*- keyword and global scope

## When using the *this*- keyword in the global scope it will either point to the Window object or the global object
    - Window object -> browser
    - global object -> node.js

## In the global scope of the browser the this keyword points to the window itself.

### example: (executed in browser, dev tools opened)

console.log(this);              // window

console.log(this === window);    // true



# Exploring the *this*- keyword a little more

## Let's write a function that logs *this*  to the console and run it in the global scope.

### example

function logThis() {
    console.log(this);
}

logThis();                      // windwow


### another more difficult example:

function logThis() {
    console.log(this);
}

logThis();

const obj = {
    name: "Peter", 
    logThis: logThis
};

obj.logThis();                  // obj

### one more example:

const peter = {
    name: "Peter",
    hello. function() {
        console.log("Hello, i'm " + this.name);
    }
}

peter.hello();              // Hello, i'm Peter



# The *this*- keyword outlook

## The *this*- keyword looks good for now
    -  we'll see *this* again when coding web apps with more context