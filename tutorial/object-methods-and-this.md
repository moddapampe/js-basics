# Object methods and *this*

# Why we talk about it 

## Objects can have own functions
## We need a way to access object properties from object methods
## Complex Objects with methods offer a new way to structure code and programs

- how to have methods in objects
- how to access object properties in object methods
- what is the *this*- keyword in context of objects

---------------------------------------------------------------------------------

# Adding functions to objects

## Objects can have own methods
    - a function inside a object is called method

## functions can also be a part of an object - they're the so called methods (on an object).

### example:

const person = {
    name: "Peter",
    hello: function() {
        console.log("Hello!")
    }
}

person.hello();              //  "Hello!"


# Trying to access object properties from object methods

## Accessing Object Properties

## Access from object methods to objectproperties needs to be solved
## First attempt -> Use the object reference via vaiable name

## The first attempt to access the properties of the same object could be the object refference using a variable.

### example:

const peter = {
    name: "Peter",
    hello: function() {
        console.log("Hello, I am " + peter.name);
    }
}

peter.hello();              // Hello, I am Peter


# Trying to access object properties from object methods

## The approach using external variables that point to the object won't work for multiple objects (!)

### example:

const peter = {
    name: "Peter",
    hello: function() {
        console.log("Hello, I am " + peter.name);
    }
}

const mary = Object.assign({ }, peter);
mary.name = "Mary";

peter.hello();             // Hello, I am Peter
mary.hello();              // Hello, I am Peter (!!!)



# Introduction to the *this* - keyword

## The *this* - keyword can be used to access properties of the same object from an object method

### example:

const peter = {
    name: "Peter",
    hello: function() {
        console.log("Hello, I am " + this.name);
    }
}

const mary = Object.assign({ }, peter);
mary.name = "Mary";

peter.hello();             // Hello, I am Peter
mary.hello();              // Hello, I am Mary (!!!)


# We just invented complex objects

# Complex Objects

## Complex objects with properties and methods can encapsulate data and functionality
    - Encapsulation of code
    - Reusability of code
    - Less pollution of global scope