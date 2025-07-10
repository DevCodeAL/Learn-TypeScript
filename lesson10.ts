// TypeScript Alias

// Example 1 Primitive Types
type PersonOne = string;

let firstName: PersonOne;
let lastName: PersonOne;

// Example 2 Object Types
type PersonTwo = {
    name: string,
    email: string,
    age: number,
    isLegalAge: boolean,
};

// 1. Use Alias PesonTwo
let personOne: PersonTwo = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 23,
    isLegalAge: true,
};

// 2. Use Alias PesonTwo
let personTwo: PersonTwo = {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    age: 16,
    isLegalAge: false,
};

// Example 3 Union Types
type AlphaNumeric = string | number | object;

let input: AlphaNumeric;

input = "Hello World";
input = 100;

const user: AlphaNumeric = {
    name: "Bill Gates",
    email: 'billgates@gmail.com',
    age: 76,
    isOld: true,
};

// Example 4 Intersection Type

// First Alias
type Personal = {
    name: string, 
    age: number,
};

// Second Alias
type Contact = {
    email: string,
    phone: string,
};

// Initialize the Personal Alias and Contact Alias into Candidate Alias
type Candidate = Personal & Contact;

let candidate: Candidate = {
    name: 'Leomar Abad',
    age: 28,
    email: 'leomarabad@gmail.com',
    phone: '0928445839',
};