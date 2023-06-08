# Let vs Var

`var` variables have a scope of a function not block. 

Example of what do we mean by inside a fucntion: 

```js
function call_name(){
  var name = "Amik";
  console.log(name);  // prints "Amik" in console
}

console.log(name); // gives error because 'name' is defined inside call_name and does not exist in this scope
```

Example of what do we mean by inside a block: 

```js
var name = "Amik";
if(name == "Amik"){
  var Fullname = "Amik";
  console.log(Fullname);  // prints "Amik Sen" in console
}

console.log(Fullname); // prints "Amik Sen" in console, because Fullname not defined inside any function, so acts as a global variable
```

`let` variables are block specific. By the way, any block means inside a curly braces, uk the `{}` thingeys :p. 

```js
var name = "Amik";
if(name == "Amik"){
  let Fullname = "Amik";
  console.log(Fullname);  // prints "Amik Sen" in console
}

console.log(Fullname); // gives error because 'Fullname' is defined inside if block and does not exist in this scope
```

> Also `let` doesnot allows us to use same variable names agains and gives and error where are `var` allows us to define variables with same name. 

# Let vs Const

`const` is also a block scoped variable definition. But once assigned a value we cannot change it. But there is an exception to this. 

```js
const person = {
  name: 'Amik',
  sex: 'male'
};

person.name = 'Sen'
person.sex = 'Still male' 
// This does not give any error ans changes the value of the properties however, we cannot change the properties itself. 
```

# Arrow functions 

Old way, which is gold btw :p

```js
const integers = [1,2,3]

// you wanna update these into value+1, for that use "map" function as 

const updInt = integers.map(function(value){
    return value+=1;
});

```

New way 


```js
const integers = [1,2,3]

// you wanna update these into value+1, for that use "map" and arrow function as 

const updInt = integers.map((value) => value+=1; );
```

Notes: 
- If we have a single variable we can remove the bracket of `value` as well
- If there are no arguments to the function, then use `() => ` and write the logic


# Template Strings

Old way to concatenate string

```js
const first_name = "Amik";

const last_name = "Sen";

const sentence = "My name is " + first_name + " " + last_name + "." ; 
```

New way 


```js
const first_name = "Amik";

const last_name = "Sen";

const sentence = `My name is ${first_name} ${last_name}.` ; 
```

\` is the thingey below the tilde sign. 

# Prototype Method

This is ES5 stuff that was removed in ES6 with classes however, lets have a look at it. It's a basic constructure method

```js
function Person(name, age){
  this.name = name;
  this.age = age;
};

Person.prototype.speak = function(){
  console.log(`Hi this is ${this.name}`);
};

const bill = New Person("Bill", 20); // Definition of an Object with name and age 
bill.speak()  // this works because we have defined speak for every Person
```

# Classes 

```js
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    speak(){
        console.log(`Hi this is ${this.name}`);
    }
}

const bill = New Person("Bill", 20); // Definition of an Object with name and age 
```

# Spread Operator

Spread operator is an operator that is used to loop through objects like arrays or collection of objects. Used in Redux mostly. 

```js
const names = ["A", "B", "C"];
const names2 = ["D", "E", "F"];

// To merge the lists using the spread opearator do 

const allNames = [...names, "L", ...names2]
```

