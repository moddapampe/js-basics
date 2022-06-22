# +++ Welcome to: "From Objects to Classes" +++

## why we talk about it
    - objects are one of the main data structures to handle data in apps
    - objects itself can act as mini-programs 
    - moder frontend apps req classes and complex objects

## WHat you'll learn
    - advanced object handling
    - methods in objects
    - "this" keyword
    - classes
    - arrow functions

---------------------------------------------------------------------------------

# Deep Dive Objects

## objects are *only*key value stores at first sight
## objects offer more methods to manipulate and process data

# what u'll learn

## objects recap
## essentials of the Object API
- object.keys, object.values and object.entries
- object assign
- object.freeze

## how to add custom methods to (own) objects


# listing all keys with object.keys

## the object.keys(obj);-method will return all keys of the passed object as string array
## useful when you don't know the keys of an object
    - dynamic data, user data, flexible API data



# Objects Recap and the Object API

## Objects can be created using curly braces
## Each object is unique from a reference perspective
    - Call by reference


## basic data store using an object
### example:

const obj1 = {};
const obj2 = {};

const isEqual = obj1 === obj2;

console.log(isEqual);               // false

## Objects as data stores

## objects are key value stores
## usually they store data that belongs together
    - i.e. all relevant data of an article on amazon

### example:

const comet = {
    x: 100,
    y: 200, 
    diameter: 30
};

## Objets can also be nested and can contain other complex data types
    - Objects in objects
    - Arrays in objects

### examople:


const product = {
    title: "Playstation 5",
    price: 599, 
    tags["gaming", "playstation", "console"],
    specs: {
        weight: "3.5",
        height: "30";
        voltage: "230"
    }
}; 

## The object API is called using the Object class
    - i.e. Object.apiMethod(...)



## the Object.keys();-method returns all key of the passed object

### example:

const product = {
    title: "Playstation 5",
    price: 599, 
    tags["gaming", "playstation", "console"],
    specs: {
        weight: "3.5",
        height: "30";
        voltage: "230"
    }
};

const keys = Object.keys(product);
console.log(keys);              //["title", "price", "tags", "specs"]

### example 2:

const product ={...};

const keys = Object.keys(product);

for (let key of keys) {
    console.log(key + ": " + product[key]);
}


# listing object values of the passed object.

## The Object.value(obj);- method will return an array with all property (key)- values of the passed object

### example: 

const product = {
    title: "Playstation 5",
    price: 599, 
    tags["gaming", "playstation", "console"],
    specs: {
        weight: "3.5",
        height: "30";
        voltage: "230"
    }
};

const values = Object.values(product);
console.log(values);              //["playstation 5", 599, [...], {...}]


# Objects as nested arrays with Object.entries(obj);

## The Object.entries(obj);-method will return an array containing small areas that include the key and values as items
    - Nested Arrays are a representation of the object

## The Object.entries();-method returns a nested array representation of the object.

### example:

const product = {
    title: "Playstation 5",
    price: 599, 
    tags["gaming", "playstation", "console"],
    specs: {
        weight: "3.5",
        height: "30";
        voltage: "230"
    }
};

const entries = Object.entries(product);
console.log(entries);               // [["title, Playstation 5"], ["price", "599"], ..., ...]



# Protecting objects with Object.freeze();

## The Object.freeze(obj);-method protect an object from future mutations
    - Keys can't be added or removed after it was freezed
    - Values of existing keys can not be changed
    - Immutable objects

## a frozen object can not be unfreezed (unfrozen)

### example:

const product = {
    title: "PLaystation 5",
    price: 599
};

Object.freeze(product);

product.description = "nice console";   // error
delete product.title;                   // error
product.price = 0;                      // error


# Merging and cloning objects with Object.assign

## The Object.assign(target, obj1, ...);- method will copy keys of objects into a target object
## The target object will be changed / enhanced with the keys from the other objects

## The Object.assign();-method will copy the keys from 0bj2 to obj1

### example: 

const obj1 = {
    a: 1
}

const obj2 = {
    b: 2
}



Object.assign(obj1, obj2);              // obj1 = target object, that gets a copy of obj2 assigned
console.log(obj);                       // { a:1, b:2 }

## The given objects for Object.assign(target, obj1, ..., ...) will overwrite duplicate keys in the target object
    - Object.assign(target, obj1) -> if target and obj1 have duplicate keys, the value of obj1 will be used

## The Object.assign();-method will merge given objects

### example:

const obj1 = {
    a: 1
}

const obj2 = {
    b: 2
}

Object.assign(obj1, obj2);
console.log(obj1);                      // { a:2 }

## Object.assign(); always returns the target object
    - used if the target is a new empty object

### example:

const product = {
    title: "Playstation 5",
    price: 599
};
const productCopy = Object.assign({}, product); // {} = empty object

## The Object.assign();-method can be used to unfreeze objects by creating a copy of it.

### example:

const product = {
    title: "Playstation 5",
    price: 599
};

Object.freeze(product);

Object.assign(product, {});
product.price = 0;              // error, cause product is the (frozen) target

const productCopy = Object.assign({}, product);
productCopy.price = 0           // this will work ;)

## a limitation of Object.assign(); are nested objects
## nested object (+ objects in objects can't be copied +) will not be cloned
    - Call by reference(!)

## Object.assign(); does not support deep cloning - there are librarie that can do this

### example:

const obj1 = {
    subObj: {
        a: 2
    }
}

const obj2 = Object.assign({}, obj1);
obj2.subObj.a = 0;
console.log(obj1.subObj.a); // 0

# Recap

## Object API using Object.method();
## Object.keys(); -> keys as array
## Object.values(); -> values as array
## Object.entries(); -> nested array representing key and value 
## Object.freeze(); -> object is immutable
## Object.assign(); -> copy / merge / unfreeze objects 