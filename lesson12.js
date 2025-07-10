// TypeScript Never type
// Use the never type that holds no value, denoting an impossibility in the type system.
// Example 1
var noValue; // no value
var throwError = function (role) {
    var unReacheble = role;
    throw new Error("'Invalid user: ".concat(unReacheble));
};
function checkAuthorize(role) {
    switch (role) {
        case 'admin':
            return 'Do Something!';
        case 'user':
            return 'Do Anything!';
        case 'guest':
            return 'You can do nothing!';
        default:
            return throwError(role);
    }
    ;
}
;
console.log(checkAuthorize("admin"));
// | Use Case              | Why `never` is used                             |
// | --------------------- | ----------------------------------------------- |
// | `throw` functions     | They never return a value                       |
// | Infinite loops        | Function never terminates                       |
// | Exhaustiveness checks | Ensure all possible cases are handled           |
// | Unreachable code      | Help catch logic or type narrowing errors early |
