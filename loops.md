# Loops / Schleifen

## programming *JavaScript* often loops over lists of ***something***

    - what are loops
    - how will loops work
    - how to loop over arrays

    # Arrays

    ## we know that arrays can store any number of items. We need a more generic way of accessing all items

## JavaScript offers different ways of looping

## use- cases for looping are:
    - loop over each item of an array 
    - loop a specific amount 
        - i.e. do something 10 times in a row
        - (loop it 10 times)

## *for-of*- loop will iterate over all items of an array. The current item within the *for-of*- loop can be used with a temporary variable

### example:

let numbers = [1,2,4,8,16];

for(let number of numbers) { 
    /* laufzeitvariable = number. numbers wird number zugewiesen */

    console.log(number);
}

### another example:

let comets = [{x:0, y:0},
{x:100,y:100},
{x:200,y:200}
];

function draw() {
    for (let comet of comets) {
        drawComet(comet);
    }
}


# The *for* - loop

## for - loops are also used for repetetive tasks

### example:

for(let i=0; i < 5; i++) {
    consoloe.log(i)
}
output: 0,1,2,3,4


# the *do-while*- loop will be executed as long as the while condotion is "true"

## the do-while loop
    - the *do-while-*- loop will execute the do-block as long as the *while*- condition is true
    - hte *do-block* will always executed once
        - i.e. the while-condition is checked after every execution

### example:

let counter = 0;

do {
    console.log(counter);
    counter++;
} while(counter < 5);




