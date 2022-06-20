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