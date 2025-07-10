// TypeScript Tuple
// example 1
let skill: [string, number];
skill = ["Programmer", 5];

// example 2
let color: [number, number, number] = [255, 0, 0];

// Optional Tuple Elements
// Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.

// example 3
let bgColor, headeColor: [number, number, number, number?];

bgColor = [0, 255, 255, 0.5];
headeColor = [0, 255, 255];

