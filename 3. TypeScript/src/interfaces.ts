interface Age {
    incrementAge(): void;
}

interface Person extends Age{ // can extend multiple interfaces unlike classes
    readonly name: string; // cant have public or private
    nickname?: string|undefined; // optional ? property
    age: number;

    greet(phrase: string): void;
    nicknameOutput?(): void; // optional ? method 
}

let user1: Person = {
    name: 'max',
    age: 30,
    greet(phrase: string){
        console.log(`${phrase}` + this.name);
    },
    incrementAge(){
        this.age = 1;
        console.log(this.age)
    }
};

class PersonClass implements Person{ // can have multiple interfaces
    readonly name: string;
    public age: number;
    public nickname: string|undefined
    public blah?: string; // optional can be used in classes as well

    constructor(name: string, age: number, nickname?: string|undefined){ // optional parameter
        this.name = name
        this.age = age
        if (typeof nickname === 'string'){
            this.nickname = nickname
        }
    }

    greet(this: PersonClass, phrase: string): void {
        console.log(`${phrase}` + this.name)
    }
    incrementAge(this: PersonClass){
        this.age = 1;
        console.log(this.age)
    }
    nicknameOutput(this: PersonClass){
        if (typeof this.nickname === 'string'){
            console.log(this.name)
        }
    }
}

type AddFn = (a: number, b: number) => number;

let addNew: AddFn;

addNew = (n1: number, n2: number) => {
    return n1 + n2
}

interface AddFnInterface {
    (a: number, b: number): number;
}

let addNewInterface: AddFnInterface;

addNewInterface = (n1: number, n2: number) => {
    return n1 + n2
}