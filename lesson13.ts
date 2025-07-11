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

// Example 4 function type
let add: (x: number, y:number)=> number;

// add is variable assign to a function
add = function (x:number, y: number) {
        return x + y;
};

// Example 5 Function Optional Types
function multiply(a: number, b: number, c?: number): number{
        
        if(typeof c !== 'undefined'){
                return a * b * c;
        }

        return a * b;
};


// Example 6 Default Parameters

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


// Example 7 TypeScript Rest Parameters

// Use rest parameters to allow a function to accept a variable number of arguments with the same or different types.

// Use ...args type[] syntax to define rest parameters with the same type.

// Use ...args (type1 | type2 ) [] syntax to define rest parameters with different types.

// collect the all agruments then sum
function getTotal(...numbers: number[]): number{
     let total = 0;

     numbers.forEach((num)=> total += num);

    return total;
};

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

// Rest parameters with multiple types 
function combineItems(...args:(number | string)[]): [number, string]{
        let total = 0;
        let str = '';
        args.forEach((items)=>{
             if(typeof items === 'number'){
                total += items;
             } else if(typeof items === 'string') {
                str += items;
             }
        });

        return [total, str];
};

const [total, str] = combineItems(3, 'Happy', 2, 1, ' New Year');

console.log({ total });
console.log({ str });


// Example 8 TypeScript Function Overloading

// Use function overloading to define multiple signatures for a single function to ensure type safety.

// Ex: 1
function Overloading(a: any, b: any): any{
        if(typeof a === 'number' && typeof b === 'number'){
                return a + b;
        } else if(typeof a === 'string' && typeof b === 'string'){
                return a + b;
        };

        throw new Error(`Invalid Arguments`);
};

console.log(Overloading(16, 4)); // Ouput: 20
console.log(Overloading('Hello', 'Typscript')); // Output: Typescript

// Method overloading

// Ex: 2
class Counter {
        private current = 0;
        count(): number;
        count(target: number): number[];
        count(target?: number): number | number[] {

           if(target){
                let values: number[] = [];

                for(let start = this.current; start <= target; start++){
                        values.push(start);
                }

                this.current = target;
                return values;
           } 

           return ++this.current;
        }
};

let counter = new Counter();

console.log(counter.count());
console.log(counter.count(5));