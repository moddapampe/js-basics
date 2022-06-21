# Pure Functions

    - reusable code is the best code
    - simple and recurring tasks are best solved with pure functions


# Definition and use-cases of *Pure Functions*

## definition:
    - Pure function is a function that always returns the same result if the same arguments are passed
    - has arguments
    - has a return value 
    - no side effects (using global variables)

    - for practical reasons, a project cannot consist of pure functions only
    - same problems need to be solved in most projects in different places

## use cases
    - mask credit card number
    - format IBAN and BIC
    - checkData - correct or not
    - calculate sum - checkout in Webshop
    - mapping of API-Data to match frontend requirements


# anatomy of pure functions

    - parameter -> input
    - block of code -> logic that processes input to output
    - return value -> output

### example:

let sum = 0;                    // cruel side-effect

function multiply(a, b);        // input = parameters
    const result = a * b;       // the logical thing
    sum = result;               // output as a return

    return result;


# Code Structure of (pure) functions

    - define variables needed for the Task
    - processing of data
    - return of a result

## a pure function can normally be devided into three parts

    - nessecary variables
    - actual logic
    - return statement

### example:

function checkMaxLength(str, length) {
    let result = undefined      // varables need for the task

    if (str.length <= maxLength) {
        result = true;
    } else {                    // data processing and logic
        result = false;
    }
    return result;              // self declaring :)
}


# Advantages
     
    - can be used in all sorts of projects
    - code is reusable

# WARNING: COPIED CODE IS ABSOLUTE EVIL!!1 :D
## use functions, use libraries, use brain


# Disadvantages

    - none *lol
    - when the scope of function grows -> readability

### explanation: if ur project grows up and gets bigger n bigger, then make sure that ur functions are not trying building unreal things

# never forget this sentence: +++ it depends on +++