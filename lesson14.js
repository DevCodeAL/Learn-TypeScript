// TypeScript Class
// Example 1 Class add annotations
var Person1 = /** @class */ (function () {
    function Person1(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    ;
    return Person1;
}());
;
var person1 = new Person1(5732, 'John', 'Doe');
console.log(person1.getFullName());
// Example 2 Typescript Access Modifier
// private
// protected
// public
// using private
var Person2 = /** @class */ (function () {
    function Person2(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person2;
}());
;
var person2 = new Person2(7463, 'Jane', 'Doe');
console.log(person2.getFullName());
// console.log(person2.ssn) // compiler error cant access outside the class its private
// Example 3 Typescript Access Modifier
// using protected and private
var Person3 = /** @class */ (function () {
    function Person3(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Person3.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person3;
}());
;
// TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
// The private modifier allows access within the same class.
// The protected modifier allows access within the same class and subclasses.
// The public modifier allows access from any location.
// Properties and methods have public access if you omit the access modifiers.
// Example 4 Typscript readonly access modifier
var Person4 = /** @class */ (function () {
    function Person4(birthDate) {
        this.birthDate = birthDate;
    }
    return Person4;
}());
;
var person = new Person4(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error 
// Cannot assign to 'birthDate' because it is a read-only property.
// Use the readonly access modifier to mark a class property as immutable.
// A readonly property must be initialized as a part of the declaration or in the constructor of the same class.
