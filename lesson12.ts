// TypeScript Never type
// Use the never type that holds no value, denoting an impossibility in the type system.

// Example 1
let noValue: never; // no value

// Example 2 Common use cases
type Role = 'admin' | 'user' | 'guest';

const  throwError = (role: never): never =>{
    const unReacheble = role;
     throw new Error(`'Invalid user: ${unReacheble}`);
};

function checkAuthorize(role: Role){
    switch(role){
        case 'admin':
            return 'Do Something!';
        case 'user': 
            return 'Do Anything!';
        case 'guest':
            return 'You can do nothing!';
        default:
           return throwError(role);
    };
};

console.log(checkAuthorize("admin"));


// | Use Case              | Why `never` is used                             |
// | --------------------- | ----------------------------------------------- |
// | `throw` functions     | They never return a value                       |
// | Infinite loops        | Function never terminates                       |
// | Exhaustiveness checks | Ensure all possible cases are handled           |
// | Unreachable code      | Help catch logic or type narrowing errors early |
