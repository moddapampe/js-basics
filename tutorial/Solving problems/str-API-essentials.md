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
    - it only replaces the first occurence af the search string / pattern

### example usage of string.replace();

const str = "cats and dogs";

const resultStr = str.replace("cats", "snails");  // "cats" would be replaced by "snails"

console.log(str);                           // cats cats dogs
console.log(resultStr);                     // snails cats dogs


# string.split

## the *string.split();*-method divides a string into an array using a seperator
## if no seperator or an empty string is used, a string is splitted into an single character array

### example usage of *string.split();*

const sentence = "I like cats";
const wordsArr = sentence.split(" ");
console.log(wordsArr);                      // ["I", "like", "cats"]

const word = "banana";
const charArr = word.split("");
console.log(charArr);                       // ["b", "a", "n", "a", "n", "a"]

# indexOf();

## the indexOf(); method will return the first index of a search string starting from a specific index

### example:

const sentence = "i love ice";

const firstIndex = sentence.indexOf(" ");
console.log(firstIndex);                    // 1. space found

const secondIndex = sentence.indexOf(" ", firstIndex + 1); // +1 means it searches after the 1. found space
console.log(secondIndex);                   // space found on 6

const charAt4 = sentence[4];                // --> "o"
"0123456789"                                // remind: 0123 is like 1234 in position
"i_love_ice"

const sentence = "i love ice";

const indes = sentence.indexOf("x");
console.log(index);                         // return -1, cause its not there


# string.repeat();

const ha = "ha";
const laughing = ha.repeat(10);

console.log(laughing);                      // "hahahahahahahahahaha" (10 times)


# toLowerCase(); & toUpperCase();

### example usage of string casing methods

const sentence = "i am batman"

sonst sentenceUpper = sentence.toUpperCase();
console.log(sentenceUpper);                 // I AM BATMAN

const sentenceLower = toLowerCase();
console.log(sentenceLower);                 // i am batman