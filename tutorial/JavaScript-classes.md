# JavaScript Classes

## Objects as blueprints has some limitations
## JavaScript Classes is a basic concept of most JavaScript frameworks

- What are Classes
- What is a constructor
- What is the *new*- keyword
- how to use classes

---------------------------------------------------------------------------------

# Object.assign as an low level approach of JavaScript Classes

## There are many usecases where we need objects with the samme shape
## Objects can act as blueprints using *Object.assign();*

## we can use objects as blueprints for new objects

### example: 

const peter = {
    name: "Peter",
    hello: function() {
        console.log("Hello, i am " + this.name);
    }
}

const mary = Object.assign({ }, peter);
mary.name = "Mary";

peter.hello();
mary.hello();

### another example: sure, it works - but its not practical

const person = {
    name: "",
    hello: function() {
        console.log("Hello, i am " + this.name);
    }
}

const mary = Object.assign({ }, person);
mary.name = "Mary";

mary.hello();


# Quick Example of classes:

## Classes in JavaScript are blueprints for objects
## A class describes the shape (properties) and behavior (methods) of objects

### simple example:

class Person {                      // definition
    constructor() {                 // constructs inside a class
        console.log("Hello ");      // Hello 
    }
}

const mary = new Person();          // Hello erstellt neue Person anhand der definierten Klasse



# Anatomy of JavaScript Classes (+++ WARNING + CASE + SENSITIVE +++)

## A class name has to start with a uppercase letter 
## the constructor of a class is executed when a new instance of a class is created
    - set initial properties

## Properties of classes also called members
## Functions inside classes are called methods



# Classes example with constructor parameters

## New instances (objects) of classes can be created using the next *new*- keyword:


class Person {
    constructor() {
        this.name = "";
    }

    hello() {
        console.log("Hello, i am " + this.name);
    }
}

const mary = new Person();
mary.name = "Mary";
mary.hello();                // "Hello, i am Mary"


# Class Methods

## methods inside classes can be called from the class itself using the *this*- keyword

### example: 

class Person {
    constructor(name) {
        this.name = name;
        this.hello();
    }
    hello() {
        console.log("Hello, i am " + this.name)
    }
}

const mary = new Person("Mary");            

### example: (easier)

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  hello() {
    console.log("Hello, i am " + this.firstName);
  }
}

const mary = new Person("Mary", "Poppins");

console.log(mary);

mary.hello();