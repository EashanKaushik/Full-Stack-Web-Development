const names: Array<string> = [];

// promises are meant to replace callback functions
let p: Promise<string>= new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if (a == 2){
        resolve("Success")
    }else{
        reject("Failed")
    }
});

// then is called when promise is resolved
p.then((message) => {
    console.log(message);
}).catch((message) => { // catch is called when reject
    console.log(message);
});

let p1: Promise<string>= new Promise((resolve, reject) =>{
        resolve("Success 1")
});

let p2: Promise<string>= new Promise((resolve, reject) =>{
        resolve("Success 2")
});

let p3: Promise<string>= new Promise((resolve, reject) =>{
        resolve("Success 3")
});

// Promise.all -> returns an array of resolve and a single reject
Promise.all([
    p1,
    p2,
    p3
]).then((messages) => {
    console.log(messages)
}).catch((message) => {
    console.log(message)
});

// race returns the first success or first reject
Promise.race([
    p1,
    p2,
    p3
]).then((message) => {console.log(message)}).catch((message) => {console.log(message)});