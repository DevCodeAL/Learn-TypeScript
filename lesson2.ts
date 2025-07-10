// Lesson 2 Type String, Numbers and Boolean

// Typerscript Numbers
let counter: number = 0;
let x: number = 100, 
    y: number = 200;

// Typescript String
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);


// Typescript Boolean

// NOT operator
const pending: boolean = true;
const notPending = !pending // false

const hasError: boolean = false;
const completed: boolean = true;

// AND Operator
let result = completed && hasError;
console.log(result);

// OR operator
result = completed || hasError;
console.log(result);



