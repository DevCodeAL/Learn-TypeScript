// TypeScript Union
// Example 1
var result;
result = 10;
result = "Hi";
result = true;
// Example 2
function addOne(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    ;
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    ;
    throw new Error('Parameters must be numbers or string!');
}
// Example 2
// We can specify the union type for the add function:
function addTwo(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    ;
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    ;
    throw new Error('Parameters must be numbers or string!');
}
;
