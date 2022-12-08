// Basic
function add(n1: number, n2: number, printResult: boolean, phrase: string){
    let result = n1 + n2
    if (printResult){
        console.log(phrase + result)
    }
    else{
        return phrase + result
    }
}

function add2(number: {
    first_number: number,
    second_number: number,
    phrase: string,
    printResult: boolean
}){
    let result = number.first_number + number.second_number
    if (number.printResult){
        console.log(number.phrase + result)
    }
    else{
        return number.phrase + result
    }
}

const number: {
    first_number: number,
    second_number: number,
    phrase: string,
    printResult: boolean
} = {
    first_number: 5,
    second_number: 1.5,
    phrase: "Answer is: ",
    printResult: true
}

const number2 = {
    first_number: 5,
    second_number: 1.5,
    phrase: "Answer is: ",
    printResult: true
}

const n1 = 5;
const n2 = 1.5;
const printResult = true;
const phrase = "Answer is: ";

// Arrays

const numberArray1 = ['sports', 'hobby'];
const numberArray2 = [1 ,2]
const numbberArray3 = ['sports', 'hobby', 1, 2]
const numbberArray4 = [true, 'sports', 1]
const numbberArray5= [true, 'sports', 1, number2]

add(n1, n2, printResult, phrase)

// Tuples

const person1: {
name: string,
age: number,
hobbies: string[]
role: [number, string]
} = {
name: 'hello',
age: 30,
hobbies: ['cooking', 'cleaning'],
role: [2, 'developer']
};

// Enums

enum Role {ADMIN, READ_ONLY, AUTHOR}
const person2 = {
name: 'hello',
age: 30,
hobbies: ['cooking', 'cleaning'],
role: Role.ADMIN
};

if (person2.role == Role.ADMIN){
    console.log('Yes')
}

//union
let object2: (string | number | boolean | {
   first_number: number;
   second_number: number;
   phrase: string;
   printResult: boolean;
   }) [];

function add3(n1: number | string, n2: string){
    return n1 + n2 ;
}
// Literal
let temp: 'as-number' | 'as-text';
let temp1: 1 | 2;
let temp2: 1 | 'as-text';

// alias

type anyName = number | string;
let anyVar: anyName;

// void type
function printResultFunction(output: number | string): void{
    console.log('Output is' + output);
}

// working with anonymous functions
function simpleAdd(n1: number, n2: number, cb: (result: number) => void): void{
    cb(n1 + n2)
}

simpleAdd(100, 100, (result :number) => {
    console.log(result)
    return result; // here even we can return a value even with void
});

// working with void

function voidFunction(result: number | string): void{
    console.log(result)
    // return result; // this will generate an error
}

// Unknown type
let userInputAny: any;
let myInputAny: string;

userInputAny = 5;
myInputAny = userInputAny;

userInputAny = '5';
myInputAny = userInputAny;

let userInput: unknown;
let myInput: string;

userInput = 5;
// myInput = userInput; // this will not work

userInput = '5';
// myInput = userInput; // this will not work

if (typeof userInput === 'string'){
    myInput = userInput; // this will work
}

// never type

function generateError(message: string, code: number){
    throw {message: message, code: code}
    // this code never returns anything
}

generateError('This is a message', 500)

function generateError2(message: string, code: number): never{
    throw {message: message, code: code}
    // this code never returns anything
}

generateError2('This is a message', 500)