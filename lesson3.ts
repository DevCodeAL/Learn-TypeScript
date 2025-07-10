// Lesson 3

// Typescript Object
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
    firstName: 'Leomar',
    lastName: 'Abad',
    age: 28,
    jobTitle: 'Web Developer',
 }

 console.log(employee)

//  The Object type, however, describes functionality that is available on all objects.
let vacant: Object = {};
console.log(vacant.toString);

// Typescript Array
let skills: string[] = ["Web Developer, Game Developer", 'Software Engineer'];

skills.push('Mobile App Developer');

console.log(skills);

// Array properties and methods
let series = [1, 2, 3];
console.log(series.length);

// Storing values of mixed types
let scores1: (string | number | boolean)[] = ['Progrmamming', 5, 'Software Design', 4, true];

// Infer same as above
let scores2 = ['Progrmamming', 5, 'Software Design', 4];
