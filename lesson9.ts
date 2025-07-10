// TypeScript Union

// Example 1
let result: number | string | boolean;
result = 10;
result = "Hi";
result = true;

// Example 2
function addOne(a: number | string, b: number | string){
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    };

    if(typeof a === "string" && typeof b === "string"){
        return a.concat(b);
    };

    throw new Error('Parameters must be numbers or string!');
}

// Example 2
// We can specify the union type for the add function:
function addTwo(a: number | string, b: number | string): number | string {
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    };

    if(typeof a === "string" && typeof b === "string"){
        return a.concat(b);
    };

    throw new Error('Parameters must be numbers or string!');
};