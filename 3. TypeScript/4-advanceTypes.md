# Intersection Types

```
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
```

# Type Guards

- typeof

This is used with javascript types.

```
if (typeof temp === 'string'){}
```

- instanceof

This is used with classes.

```
if (temp instanceof ClassName){}
```

- 'property' in object

This is used with objects.

```
if (property in temp){}
```

- interface

```
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
```

This can be used with objects in general.

# Type Casting

```
let userElement = document.getElementById("user-input") as HTMLInputElement;
let userElement = <HTMLInputElement>document.getElementById("user-input");

if (userElement){
    userElement.value = "Hello"
}
```

# Index Properties

```
interface ErrorContainer {
    errorCode: string;
    // errorCode: number; // cant have number
    [prop: string]: string;
}

let fiveError: ErrorContainer = {
    errorCode: '504',
    // errorCode: 504, // cant have number
    message: 'This is a message'
}

let fourError: ErrorContainer = {
    errorCode: '403',
    message: 'This is a message',
    link: 'This is a link'
}
```

# Function Overload

```
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable){
    if (typeof a == "string" || typeof b == "string"){
        return a.toString() + b.toString()
    }
    return a + b
};

let result = add("Max", " Thrust");
result.split(" ")
```
