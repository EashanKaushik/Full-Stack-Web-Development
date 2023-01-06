"use strict";
// this is the same as using 'extends' with interface
let user = {
    name: 'Eashan',
    startDate: new Date(),
    id: 1,
    privileges: ['Python']
};
function showSpeed(animal) {
    let speed;
    switch (animal.type) {
        case 'horse':
            speed = animal.runSpeed;
            break;
        case 'dragon':
            speed = animal.flySpeed;
            break;
    }
}
;
// Type Casting
// let userElement = document.getElementById("user-input") as HTMLInputElement;
let userElement = document.getElementById("user-input");
if (userElement) {
    userElement.value = "Hello";
}
;
let fiveError = {
    errorCode: '504',
    // errorCode: 504, // cant have number
    message: 'THis is a message'
};
let fourError = {
    errorCode: '403',
    message: 'This is a message',
    link: 'This is a link'
};
function add_1(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
let result = add_1("Max", " Thrust");
result.split(" ");
