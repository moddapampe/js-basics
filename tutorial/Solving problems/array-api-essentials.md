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