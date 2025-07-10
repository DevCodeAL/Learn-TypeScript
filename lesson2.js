// Lesson 2 Type String, Numbers and Boolean
// Typerscript Numbers
var counter = 0;
var x = 100, y = 200;
// Typescript String
var firstName = "John";
var title = "Web Developer";
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
console.log(profile);
// Typescript Boolean
// NOT operator
var pending = true;
var notPending = !pending; // false
var hasError = false;
var completed = true;
// AND Operator
var result = completed && hasError;
console.log(result);
// OR operator
result = completed || hasError;
console.log(result);
