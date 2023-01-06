// Intersection types
type Employee = {
    name: string;
    startDate: Date;
    id: number;
};

type Manager= {
    name: string;
    startDate: Date;
    id: number;
    privileges: string[];
};

type ElevatedEmployee = Employee & Manager;
// this is the same as using 'extends' with interface
let user: ElevatedEmployee = {
    name: 'Eashan',
    startDate: new Date(),
    id: 1,
    privileges: ['Python']
};

// differentiating interfaces

interface Horse {
    type: 'horse';
    runSpeed: number;
}

interface Dragon {
    type: 'dragon';
    flySpeed: number;
}

function showSpeed(animal: Horse | Dragon){
    let speed: number;
    switch(animal.type){
        case 'horse':
            speed = animal.runSpeed;
            break;
        case 'dragon':
            speed = animal.flySpeed;
            break;
    }
};

// Type Casting

// let userElement = document.getElementById("user-input") as HTMLInputElement;
let userElement = <HTMLInputElement>document.getElementById("user-input");

if (userElement){
    userElement.value = "Hello"
};

//index properties

interface ErrorContainer {
    errorCode: string;
    // errorCode: number; // cant have number
    [prop: string]: string; 
}

let fiveError: ErrorContainer = {
    errorCode: '504',
    // errorCode: 504, // cant have number
    message: 'THis is a message'
}

let fourError: ErrorContainer = {
    errorCode: '403',
    message: 'This is a message',
    link: 'This is a link'
}

// function overload

type Combinable = string | number;

function add_1(a: number, b: number): number;
function add_1(a: string, b: string): string;
function add_1(a: Combinable, b: Combinable){
    if (typeof a == "string" || typeof b == "string"){
        return a.toString() + b.toString()
    }
    return a + b
};

let result = add_1("Max", " Thrust");
result.split(" ")