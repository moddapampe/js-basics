# Arrays

## objects that help to structure data that sticks together
## Array help to collect items of the same purpose (or with the same target)


# definition and use-cases for arrays

## (What if we want to create an unknown number of of brushes? The following example would not work without that, - or will it?! o.O)

### example:

let brush0 = {x:0, y:0};
let brush1 = {x:100, y:100};
let brush2 = {x:200, y:200};
let brush3 = {x:300, y:300};

function draw() {
    background(0,0,0,10);
    renderBrush(brush0);
    renderBrush(brush1);
    renderBrush(brush2);
    renderBrush(brush3);
}

## - an array is a collection of entries
## - an array can store any possible number of entries


# How to define an array

## arrays been created with square-brackets '[]' and their initial items are seperated by commatas ',' :>

### example:

let emptyArray = []; // empty, humm
let names ["peter", "paul", "mary"]; // array with 3 items (names)
let randomArray = [1, false, "wtf", {x:0, y:0}]; // array that handles different (data)- types


# *"lenght of array"* and *index operator*

## the number of itewms in an araay is defined by the lenght property

### example:

let brushes = [
    {x: 0, y: 0},
    {x: 100, y: 100}
];

let numberOfItems = brushes.length; // result: 2, cause of 2 objects inside the array

## items inside an array can be accessed by their index number, i.e. '[2]'
## array index is also zero-basd
    i.e. first item is indexed by '0', so in an array including 2 items, the items are indexed by '0' and '1'

    let names = ["peter","paul","mary"];

    names.lenght = 3 // their indezies are 0, 1, 2

    let item1 = names[0];
    console.log(item1);  // = index: 0, output: peter


# Array.push(exampleItem)

## the array.push(method) is used to add new items to the END of an array

### example:

let brushes = [];

let newBrush = {x: random(0, 400), y: random(0, 400)};

brushes.push(newBrush);  //  result: pushes the new item / object into the array above. now its the first item inside, indexed by '0'

# Arrays and call by reference

### an example: 

let arr1 = [1,2,3]; // index: 0, 1, 2
let arr2 = arr1;    // index: 0, 1, 2 - assigned by arr1, so the same like arr1

arr2[0] = 100;      // index: 0 of arr1 is now changed from 1 to 100 by pushing it at index: [0]

console.log(arr1);  // result: 100, 2, 3
console.log(arr2);  // result: 100, 2, 3
