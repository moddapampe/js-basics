# Creating ur own functions

## how to create own functions
## when to create own functions
    - Creating own functions is part of solving problems
    - Knowing why properly structure code is an essential developer skill


## Recap of purpose and anatomy functions
  - functions perform a specific action
  - functions can have optional parameters
  - functions can have optional or return values

### Rezeptvergleich: Koche bitte dieses Rezept nach! Für wieviel Personen? Personen = Parameter

### example:
    - functions can have optional parameter an *explicit* values
function functionName(parameter1, parameter500,...) {
    ...
    return returnValue;
}

# Custom Function

## That's repetitive, like "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD, "Hans, get ze Flammenwerfer!" xD

### example:

function setup() {
    createCanvas(800, 600);
}

function draw() {
    let diameter = random(30);
    circle(mouseX, mouseY, diameter);

    let diameter2 = random(20);
    circle(mouseX, mouseY, diameter2);
}

# The Return Value

## Complicated and long calculations or expressions can be moved to a function to make the code more readable
    - code is more readable
    - code is more modular and reusable

## Function Names
    - function names should describe what they do
    - if a function name contains the word *and*, it does too much... :)
      - i.e. calculateRandomColorAndDrawCircle()


# Switch-Case Statements, Text and Keyboaard Input
    - We need interaction with the user
    - Switch.- case is used to replace too long if<>else- statements

### example: 

funtion draw() {
    switch(key) {
        case "1":
        case "2":
        fill('dodgerblue');
        break;
        case "3":
        fill('salmon');
        break;
        default:
        fill('white');
    }
    circle(mouseX, mouseY, 20);
}
