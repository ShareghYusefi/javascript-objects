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
