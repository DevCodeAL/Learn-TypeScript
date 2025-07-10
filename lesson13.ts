// Typescript Functions

// Exapmle 1
function addTwoNumbers1(parameter1: number, parameter2: number){
        return parameter1 + parameter2;
};

// Example 2 with return type
function addTwoNumbers2(parameter1: number, parameter2: number) :number {
    return parameter1 + parameter2;
};

// Example 3 No return value use void
function  myFunction(message: string) :void {
        console.log(message.toUpperCase());
};

// Example 3 function type
let add: (x: number, y:number)=> number;

// add is variable assign to a function
add = function (x:number, y: number) {
        return x + y;
};

// Example 4 Function Optional Types
function multiply(a: number, b: number, c?: number): number{
        
        if(typeof c !== 'undefined'){
                return a * b * c;
        }

        return a * b;
};


// Example 5 Default Parameters

// Use default parameter syntax parameter:=defaultValue if you want to set the default initialized value for the parameter.

// Default parameters are optional.

// To use the default initialized value of a parameter, you omit the argument when calling the function or pass the undefined into the function.


function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}


// TypeScript Rest Parameters

function myITems(...items: string[]): string[]{
        // Do Something
};