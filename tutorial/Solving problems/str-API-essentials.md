# String API

## the most important string APIs for coding newcomers

    - split
    - indexOf
    - replace & replaceAll
    - includes
    - toLowerCase & toUpperCase
    - repeat

# general explanation of the *String API*

    - all strings shar common methods that can be executed -> String API
    - if a variable is not a string API methods can not be called
    - check devdocs / MDN for the whole API

## if u try to call a method that is not a part of API (whether string, array, number) an error will occur (xxx is not a function).

### example:

// toUpperCase() is part of the string API
const str = "test";
console.log(str.toUpperCase());

// toUpperCase is NOT a part of the number API
const n = 1;
console.log(n.toUpperCase());         result -> Uncaught TypeError "n.toUpperCase()" is not a function

# get to know: string APIS are case sensitive ! use devdocs.io !


# string.includes()

## the string.incl(udes- method performs a search to determine whether a string may be found within another string
## retur a boolean indicating whether the string was found

### example:

const phone = "+49 12844 104303";
const isIncluded = phone.includes("+49");
console.log(isIncluded);                    // true

const sentence = "dog and car";
const isIncluded = sentence.includes("cat");
console.log(isIncluded);                    // False (car = true)


# string.replace()
    - the string.replace();- method returns a new string with a replacement of the first match of a pattern replaced by a replacement
    - tl;DR -> replace a string of a larger string with another string
    - it only replaces the first occurance af the search string / pattern

### example usage of string.replace();

