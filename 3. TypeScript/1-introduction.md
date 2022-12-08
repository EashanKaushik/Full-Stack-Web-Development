# TypeScript

## Lite Server

1.  ```
    npm init
    npm install --save-dev lite-server
    ```
2.  Inside package.json add:
    ```
    "scripts": {
    "test": "...",
    "start": "lite-server" <-
    }
    ```
3.  ```
    npm start
    ```

## Compile using """ tsc app.ts """

## Core Types

- number
- string
- boolean

### Type Inference

```
let temp = 5; //typescript automatically infers type number

let temp2; // typescript asigns 'any' to variable and waits for usage to infer type
temp2 = 5;
let temp3;
temp3 = 'hello'

let temp4: number; // we can assign a type while declaring
temp4 = 5;

let temp5: string = '5'; // redundant as let temp5 = '5' automatically infers type string
```

## Object Types

- object

```
// we can explicitly define the type like this
const number: object = {
first_number: 5,
second_number: 1.5,
phrase: "Answer is: ",
printResult: true
}
// or more appropriately like this
const number1: {
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

//or let typescript infer it which is a good practice

const number2 = {
first_number: 5,
second_number: 1.5,
phrase: "Answer is: ",
printResult: true
}

```

- Arrays

1. string[]
2. number[]
3. boolean[]
4. {}[]
5. (string | number | boolean | {
   first_number: number;
   second_number: number;
   phrase: string;
   printResult: boolean;
   }) []

- any

```
let a: any[];
let b: any;
```

- Tuple (fixed length and type array)

```
const person: {
name: string,
age: number,
hobbies: string[]
role: [number, string]
} = {
name: 'hello',
age: 30,
hobbies: ['cooking', 'cleaning'],
role: [2, 'developer']
}
```

This ensures role is a fixed length array, i.e. we need to have an array assigned to role with number and string.

However, person.role.push(5) will work, push is an exception here.
