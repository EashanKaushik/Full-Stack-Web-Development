"use strict";
let user1 = {
    name: 'max',
    age: 30,
    greet(phrase) {
        console.log(`${phrase}` + this.name);
    },
    incrementAge() {
        this.age = 1;
        console.log(this.age);
    }
};
class PersonClass {
    constructor(name, age, nickname) {
        this.name = name;
        this.age = age;
        if (typeof nickname === 'string') {
            this.nickname = nickname;
        }
    }
    greet(phrase) {
        console.log(`${phrase}` + this.name);
    }
    incrementAge() {
        this.age = 1;
        console.log(this.age);
    }
    nicknameOutput() {
        if (typeof this.nickname === 'string') {
            console.log(this.name);
        }
    }
}
let addNew;
addNew = (n1, n2) => {
    return n1 + n2;
};
let addNewInterface;
addNewInterface = (n1, n2) => {
    return n1 + n2;
};
