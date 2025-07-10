// Lesson 1 Type Annotation Vs Type Inference

// Type Annotations in Primitive Data Types
let names: string = 'John';
let age: number = 25;
let active: boolean = true;

// Type Annotations in None Primitive Data Types

// Array
let arrayName: string[] = ['Leomar', 'John', 'Jane'];

// Object
let person: {
    name: string;
    age: number;
};

person = {
    name: 'John',
    age: 26,
}

// Function
let greeting = (name: string)=> {
    return `Hello ${name}`;
};


// TypeScript Type Inference
const arr = [6, "Hello", true];
let message = "Hello, TypeScript!";  // inferred as string
let count = 10;                      // inferred as number
let isActive = true;                 // inferred as boolean

function add(a: number, b: number) {
  return a + b;                      // return type inferred as number
}

document.addEventListener('click', function(event){
    console.log(event.button);
});

