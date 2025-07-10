// TypeScript Any Type

// example 1
let result: any;

result = 1;
console.log(result);

result = 'Hello';
console.log(result);

result = [1, 2, 3];
const total = result.reduce((a: number, b: number)=> a + b, 0);
console.log(total);

// example 2
const json = `{"latitude": 10.11, "longitude": 12.12}`;

const currentLocation = JSON.parse(json);
console.log(currentLocation);

// TypeScript does not carry any checks.
// This is working fine and shows an undefined value in the console:
console.log(currentLocation.x); // Output: undefined

// Example 2
let result1: any;
result1 = 10.123;
console.log(result1.toFixed());

// Example 3
let result2;
result2 = 1996;
result2 = "Software Engineer";
console.log(result2);