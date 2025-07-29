// What are objects?
// A data type that contains multiple variables (properties) and functions (methods).

// creating variables and functions
var username = "Sharegh";
var age = 29;
var isMarried = true;

function canTalk() {
  console.log("Hello! My name is " + username);
}

// we can call functions using the name and parenthese (invoking a function)
canTalk();

// create an object (using curly brackets) to store related properties and methods
var person1 = {
  // property: value,
  username: "John",
  age: 25,
  isMarried: false,
  // method: functions(){}
  canTalk: function () {
    // 'this' keyword references the current object we are working within
    console.log("Hello! My name is " + this.username);
  },
};

// We can access the properties and methods of an object using the dot notation
console.log(person1.canTalk());

// We can create multiple objects with the same structure, but this is not efficient and can result in code repetition.

var person2 = {
  // property: value,
  username: "Jane",
  age: 24,
  isMarried: false,
  // method: functions(){}
  canTalk: function () {
    // 'this' keyword references the current object we are working within
    console.log("Hello! My name is " + this.username);
  },
};

console.log(person2.canTalk());

// We can create objects via a class rule
// A class is a bluprint for creating objects

// We can create a class using the 'class' keyword.
class Person {
  // properties: do NOT require declaration or initialization
  username;
  age;
  isMarried;

  // constructor is a function that will run when we create an object from our class blueprint
  constructor(usernameArg, ageArg, isMarriedArg) {
    console.log("Person class constructor function called");

    this.username = usernameArg;
    this.age = ageArg;
    this.isMarried = isMarriedArg;
  }

  // methods: do NOT require the function keyword
  canTalk() {
    console.log("Hello! My name is " + this.username);
  }
}

// create an object from the class blueprint using the 'new' keyword.
// the new keyword calls the constructor function of the referenced class
var person3 = new Person("Jack", 35, true);

console.log(person3);
console.log(person3.canTalk());

var person4 = new Person("Jill", 40, true);
console.log(person4);
console.log(person4.canTalk());
