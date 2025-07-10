// Lesson 1 Type Annotation Vs Type Inference
// Type Annotations in Primitive Data Types
var names = 'John';
var age = 25;
var active = true;
// Type Annotations in None Primitive Data Types
// Array
var arrayName = ['Leomar', 'John', 'Jane'];
// Object
var person;
person = {
    name: 'John',
    age: 26,
};
// Function
var greeting = function (name) {
    return "Hello ".concat(name);
};
// TypeScript Type Inference
var arr = [6, "Hello", true];
var message = "Hello, TypeScript!"; // inferred as string
var count = 10; // inferred as number
var isActive = true; // inferred as boolean
function add(a, b) {
    return a + b; // return type inferred as number
}
document.addEventListener('click', function (event) {
    console.log(event.button);
});
