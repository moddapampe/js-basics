# Value and References

    - data types in JavaScript behave differently in different conditions
    - and this behavior can caus pretty tricky errors

        - what are primitive data types
        - what are structural data types
        - what means Call by Value
        - what means Call by Reference


## Basic data types and structural types
    
## JavaScript seperates between *primitive* and *structual* types

    - primitive data types are: string, boolean, number (i.e. and also undefined and null)
    - structual data types like: array [], and object {}


## Data Types <-> Structural Types

### primitive types and structural types are beeing handled different, if:

    - assigning a variable to another variable
    - passing variables as function parameters


# Call by Value explained

## when passing a variable 'a' to the 'increment'- function, the value is passed (or copied) to functions parameter 'n'

    - primitive data types (i.a.e. boolean, string, number) are using 'call by value'
    - values af variables getting duplicated / copied / cloned if:
      - assign the variable to another variable
      - passing the variable to a functions parameter


# Call by Reference explained

## variables of structural types just pointing to the reference of an object or array
    - structural types using 'Call by Reference'
    - variables just only hold a reference to the structural type   
      - it will point to the instance of this structural type
