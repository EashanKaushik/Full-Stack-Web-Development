# TypeScript Introduction - Install & Types

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

## Types

### Core Types

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

### Object Types

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

### Arrays

1. string[]
2. number[]
3. boolean[]
4. {name: string, age: number}[]

### any

```
let a: any[];
let b: any;
```

This does not let you take advantage of types in TypeScript. This gives you same flexibility as vanilla JavaScript. We should explicitly define types or let TypeScript infer the type either while variable is being declared or during usage.
**Note:**
Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript.

### Tuple (fixed length and type array)

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
};
```

This ensures role is a fixed length array, i.e. we need to have an array assigned to role with number and string.

However, `person.role.push(5)` will work, push is an exception here.

### Enum

```
enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
name: 'hello',
age: 30,
hobbies: ['cooking', 'cleaning'],
role: Role.admin
};

if (person.role == Role.ADMIN){
    console.log('Yes')
}
```

Here, ADMIN is assigned 0, READ_ONLY is assigned 1 and AUTHOR is assigned 2. We can explicitly assign value to one or all roles.

```
enum Role {ADMIN, READ_ONLY=5, AUTHOR} // ADMIN=0, READ_ONLY=5, AUTHOR=6
enum Role {ADMIN=7, READ_ONLY, AUTHOR} // ADMIN=7, READ_ONLY=8, AUTHOR=9
enum Role {ADMIN=1, READ_ONLY=2, AUTHOR=7 }// ADMIN=1, READ_ONLY=2, AUTHOR=7
```

We can also store, strings. **But not boolean, string[], number[] or {}**.

### Union Type

```
function add(n1: number | string, n2: string){
    return n1 + n2 ;
}

let object2: (string | number | boolean | {
   first_number: number;
   second_number: number;
   phrase: string;
   printResult: boolean;
   }) []
```

**Note**
This lets you declare multiple data type for your variable. Sometimes, however this can lead to certain issues like:

```
function add(n1: number | string, n2: number | string){
    return n1 + n2 ;
}
```

In order to resolve this issue we can do this:

```
function add(n1: number | string, n2: number | string){
    let result: (number | string);
    if (typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1 + n2
    }else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
```

We might have to sometimes resolve these issues while using union.

### Literal Type

```
let temp: 'as-number' | 'as-text';
let temp1: 1 | 2;
let temp2: 1 | 'as-text';
```

### Function

```
function add(n1: number, n2: number){
    return n1 + n2 ;
}

function add2(n1: number, n2: number, n3: number){
    return n1 + n2 + n3;
}
let anyVar: Function; // Function type in TS

anyVar = add;
console.log(anyVar(5, 6)); // 11

anyVar = add2;
console.log(anyVar(5, 6)); // NaN

```

This issue can be resolved by explicitly defining function defination while declaring `anyVar`

```
function add(n1: number, n2: number){
    return n1 + n2 ;
}

function add2(n1: number, n2: number, n3: number){
    return n1 + n2 + n3;
}
let anyVar: (a: number, b: number) => number; // Function type in TS

anyVar = add;
console.log(anyVar(5, 6)); // 11

anyVar = add2;
console.log(anyVar(5, 6)); // TypeScript will throw compile-time error

```

We can also declare a callback function like this:

### Other types

```
let newVar1: undefined;
let newVar2: null;
```

## Alias

```
type anyName = number | string;
let anyVar: anyName;

type anyName1 = 'as-number' | 'as-text';
let anyVar1: anyName1;

type anyName2 = {
   first_number: number;
   second_number: number;
   phrase: string;
   printResult: boolean;
   };
let anyVar2: anyName2;
```

This allows you to avoid unnecessary repetition and manage types centrally.

```
type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';
```

This code is completely valid.

## Function Return Type

Return type of the function here would be string, which is inferred by TypeScript.

```
function add3(n1: number | string, n2: string){
    return n1 + n2 ;
}
```

We can declare return types as:

```
function add4(n1: number | string, n2: string): number{
    return +n1 + +n2 ;
}
```

However, **just like variables, you should let TypeScript infer the type, unless you specifically want to return a specific type**.

### void type

Function without a return type are given return type void.

```
function printResultFunction(output: number | string){
    console.log('Output is' + output);
}
```

Or you can explicitly define the return type void.

```
function printResultFunction(output: number | string): void{
    console.log('Output is' + output);
}
```

```
function voidFunction(result: number | string): void{
    console.log(result)
    return result; // this will generate a compile time error with typescript
}
```

**Note**

```
function printResultFunction(output: number | string): undefined{
    console.log('Output is' + output);
    return; // you need to have this here if return type is explicitly defined as undefined
}
```

## Anonymous Functions/ Callback functions

```
function simpleAdd(n1: number, n2: number, cb: (result: number) => void): void{
    cb(n1 + n2)
}

simpleAdd(100, 100, (result) => {
    console.log(result)
    return result; // here even we can return a value even with void
});
```

## More Types

### unknown type

```
let userInput: any;
let myInput: string;

userInput = 5;
myInput = userInput; // this will work but shouldnt work

userInput = '5';
myInput = userInput; // this will work

```

As you can see, myInput can be assigned to type any. To metigate with issue we have:

```
let userInput: unknown;
let myInput: string;

userInput = 5;
myInput = userInput; // this will not work

userInput = '5';
myInput = userInput; // this will not work

if (typeof userInput === 'string'){
    myInput = userInput; // this will work
}

```

This means **unknown** is a better choice than any.

### never type

```
function generateError(message: string, code: number){
    throw {message: message, code: code}
    // this code never returns anything
}

generateError('This is a message', 500)
```

Inferred type in this case will still be void, however you can explicitly declare never.

```
function generateError(message: string, code: number): never{
    throw {message: message, code: code}
    // this code never returns anything
}

generateError('This is a message', 500)
```
