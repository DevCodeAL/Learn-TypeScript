// TypeScript Class

// Example 1 Class add annotations
class Person1 {

    ssn: number;
    firstName: string;
    lastName: string;

    constructor(ssn: number, firstName: string, lastName: string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    };

    getFullName (){
        return `${this.firstName} ${this.lastName}`
    };
};

const person1 = new Person1(5732 ,'John', 'Doe');
console.log(person1.getFullName());

// Example 2 Typescript Access Modifier

// private
// protected
// public

// using private
class Person2 {
    private ssn: number;
    private firstName: string;
    private lastName: string;

    constructor(ssn: number, firstName: string, lastName: string){
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
    };

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};

const person2 = new Person2(7463, 'Jane', 'Doe');
console.log(person2.getFullName());
// console.log(person2.ssn) // compiler error cant access outside the class its private


// Example 3 Typescript Access Modifier

// using protected and private

class Person3 {
    protected ssn: string; 
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    };

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};



// TypeScript provides three access modifiers to class properties and methods: private, protected, and public.

// The private modifier allows access within the same class.

// The protected modifier allows access within the same class and subclasses.

// The public modifier allows access from any location.

// Properties and methods have public access if you omit the access modifiers.


// Example 4 Typscript readonly access modifier

class Person4{
    readonly birthDate: Date;

    constructor(birthDate: Date){
        this.birthDate = birthDate;
    }
};

let person = new Person4(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error 
// Cannot assign to 'birthDate' because it is a read-only property.

// Use the readonly access modifier to mark a class property as immutable.

// A readonly property must be initialized as a part of the declaration or in the constructor of the same class.