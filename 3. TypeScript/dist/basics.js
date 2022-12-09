"use strict";
// Basic
function add(n1, n2, printResult, phrase) {
    let result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    else {
        return phrase + result;
    }
}
function add2(number) {
    let result = number.first_number + number.second_number;
    if (number.printResult) {
        console.log(number.phrase + result);
    }
    else {
        return number.phrase + result;
    }
}
const number = {
    first_number: 5,
    second_number: 1.5,
    phrase: "Answer is: ",
    printResult: true
};
const number2 = {
    first_number: 5,
    second_number: 1.5,
    phrase: "Answer is: ",
    printResult: true
};
const n1 = 5;
const n2 = 1.5;
const printResult = true;
const phrase = "Answer is: ";
// Arrays
const numberArray1 = ['sports', 'hobby'];
const numberArray2 = [1, 2];
const numbberArray3 = ['sports', 'hobby', 1, 2];
const numbberArray4 = [true, 'sports', 1];
const numbberArray5 = [true, 'sports', 1, number2];
add(n1, n2, printResult, phrase);
// Tuples
const person1 = {
    name: 'hello',
    age: 30,
    hobbies: ['cooking', 'cleaning'],
    role: [2, 'developer']
};
// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person2 = {
    name: 'hello',
    age: 30,
    hobbies: ['cooking', 'cleaning'],
    role: Role.ADMIN
};
if (person2.role == Role.ADMIN) {
    console.log('Yes');
}
//union
let object2;
function add3(n1, n2) {
    return n1 + n2;
}
// Literal
let temp;
let temp1;
let temp2;
let anyVar;
// void type
function printResultFunction(output) {
    console.log('Output is' + output);
}
// working with anonymous functions
function simpleAdd(n1, n2, cb) {
    cb(n1 + n2);
}
simpleAdd(100, 100, (result) => {
    console.log(result);
    return result; // here even we can return a value even with void
});
// working with void
function voidFunction(result) {
    console.log(result);
    // return result; // this will generate an error
}
// Unknown type
let userInputAny;
let myInputAny;
userInputAny = 5;
myInputAny = userInputAny;
userInputAny = '5';
myInputAny = userInputAny;
let userInput;
let myInput;
userInput = 5;
// myInput = userInput; // this will not work
userInput = '5';
// myInput = userInput; // this will not work
if (typeof userInput === 'string') {
    myInput = userInput; // this will work
}
// never type
function generateError(message, code) {
    throw { message: message, code: code };
    // this code never returns anything
}
generateError('This is a message', 500);
function generateError2(message, code) {
    throw { message: message, code: code };
    // this code never returns anything
}
generateError2('This is a message', 500);
