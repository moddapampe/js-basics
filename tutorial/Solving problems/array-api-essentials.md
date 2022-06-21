# The array API

## most things in programming (especially front end) is based around arrays (=lists)
## u will handle arrays a lot


## array.reverse(); - reversing the order of array items with array.reverse();
    - the array.reverse(); method reverts the order of array items
    - zhe order of the original array is changed
    - this can be consume performance when using it with large arrays

### example:

const arr = [1, 2, 3];

arr.reverse();
console.log(arr); // result --> [3, 2, 1]

## array.join(); - Joining Items of an array with the join(); - method

## the array.join();-method concatenates (verkettet) all items of an array and returns them as a single string
## commas are used as a seperator between the items
    - can be changed using a parameter

### example:

const arr = [1,2,3];

const str = arr.join();
console.log(str);               // "1,2,3"

const str2 = arr.join("-");
console.log(str2);              // "1-2-3"

const str3 = arr.join("");
console.log(str3);              // "123"

# keep in mind - join(); and split(); ar often used together! :)


# array.includes(); - Checking array items with array.includes

## the arry.includes() method checks if a passed value is included in the array

## return a boolean value (i.f.e. *true - false*)

### example: 

const arr = [1,2,3,];
const is2Included = arr.includes(2);
console.log();                  // true

const is4Included = arr.includes(4);
console.log(is4Included);       // nope, false :)


# array.forEach(); - do something with each array item using array.forEach();

## using array.forEach() can usually replace a for-loop

## the array.forEach();-method executes a provided function once for each array element
## the provided function is executed once for each array item that's passed as the first argument (parameter)

### example:

const arr = ["peter, paul, mary"];

function sayHello(name) {
    console.log("Hello" + name);
}

arr.forEach(sayHello);              /* "Hello peter"
                                        "Hello paul"
                                        "Hello mary" */


# filtering array with array.filter();

## the array.filter(filterFn);-method returns a new array with all (filtered) elements that passed the provided test function

## the test function needs to return *true* or *false* determinig if the current array item passed the test

## the array.filter();-method returns a new filtered array

### example:

const arr = ["peter", "paul", "mary"];

function filter(name) {
    return name.length < 5;
}

const filteredArr = arr.filter(filter);
console.log(filterdArr);                // result: ["paul", "mary"]


# transforming array items with array.map();

## the array.map(mapFn);-method produces a new array with possible other values returned by the map function
##
## the map function is called for every item and value return from that function which is used in the new array 

## the array.map ();-method is usually used to transform the data of an array

### example:

const arr = [2,4,5,7];

function square(n) {
    return n * n;
}

const squaredArr = arr.map(square);
console.log(squaredArr);                // result: [4,16,25,49]


# sorting array items with array.sort();

## the array.sort();-method returns a new sorted array (copied) of the original array
## by default JavaScript will convert all items to a string compare the UTF-16 code value units
    - wrong sorting for numbers and most other things!!! 

# Again! the array.sort();-method will convert all items to a string compare the UTF-16 code value units

### funny example:

const arr = [1, 100, 4, 2];

const sortedArr = arr.sort();
console.log(sortedArr);             // result: -1, 100, 2, 4 *LOL*,.. cause now they're strings ;-)

## in most use-cases a sort function needs to be passed to the arra.sort();-method
    - simple: callback function that tells JavaScript how to compare values

## how it works:

## the sort function will recieve two items that need to be compared as parameters
## the retun value (as a number) determines how to sor ta and b 

### example:

- > 0 -> will sort *b* before *a*
- < 0 -> will sort *a* before *b*
- === 0 -> will keep the originalorder of *a* and *b*

const arr = [-1, 100, 4, 2];

function sortNumbers(a, b) {
    console.log("comparing " + " and " + b);
    return a - b;
}

const sortedArr = arr.sort(sortNumbers);
console.log(sortedArr);                 // result: -1, 2, 4, 100 (bubble sort?)


# using anonymous functions as callbacks for (array)- API methods

## most of the callback functions for the array - API are passed as an anonymous function
    - often not reused -> no need to have a permanent function
    - less scope pollution

## since most callback functions will not be reused, they're often passed directly as an anonymous function

### example:

const arr = [2, 4, 5, 7];

const squaredArr = arr.map(function(n) {
    return n * n;
});

console.log(squaredArr);