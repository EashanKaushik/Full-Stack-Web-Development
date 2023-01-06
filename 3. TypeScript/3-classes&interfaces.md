## Classes

### 1. constructor

### 2. public, private, protected

### 3. readonly

### 4. abstract class

```
// abstract  class cannot be initialized only inherited
abstract class Department {
    // First way to initialize

    public readonly name: string;
    public id: number;
    public employees_number: number;
    private employee: string[];

    constructor(name: string, id: number, employees_number:number, employee: string[]){
        this.name = name;
        this.id = id;
        this.employees_number = employees_number;
        this.employee = employee;
    }

    // or
    // second way to initialize
    constructor(public readonly name: string, public id: number, public employees_number:number, protected admin: string, protected employee: string[]){
    } // read-only

    // this forces classes inherting this abstract class to initialize a describe method
    abstract describe(this: Department): void;

    addEmployee(this: Department, employee: string): boolean{
        this.employee.push(employee);
        return true;
    }

    showEmployee(this: Department){
        console.log(...this.employee);
    }

}
```

### 5. Inheritance

### 6. Method override

```
class ITDepartment extends Department{

    constructor(name: string, id: number, employees_number:number, admin: string,employee: string[], public readonly langauge: string){
        super(name, id, employees_number, admin, employee);
    }

    // overriding methods
    addEmployee(this: ITDepartment, employee: string): boolean {
        if (this.admin !== employee){
            this.employee.push(employee);
            return true;
        }else{
            return false;
        }
    }

    // initialize describe method
    describe(this: ITDepartment){
        console.log("Department is " + this.name);
    }

}
```

### 7. Getters and Setters

```
class Accounting extends Department {
    constructor(name: string, id: number, employees_number:number, admin: string,employee: string[], private report: string){
                super(name, id, employees_number, admin, employee);
    }

    get getReport(){
        return this.report;
    }

    set setReport(report: string){
        this.report = report
    }

    describe(this: Accounting){
        console.log("Department is " + this.name);
    }

}
```

### 8. Static

```
class NewDepartment extends Department {
    // static keyword
    static fiscalYear = 2022
    constructor(name: string, id: number, employees_number:number, admin: string,employee: string[], public departmentCreated: number|undefined = undefined){
        super(name, id, employees_number, admin, employee);
    }

    set setDepartmentCreated(fiscalYear: boolean | number){
        if(typeof fiscalYear === 'number'){
            this.departmentCreated = fiscalYear
        }else{
            // we connt access fiscalYear using this keyword NewDepartment.fiscalYear
            this.departmentCreated = NewDepartment.fiscalYear
        }
    }

    describe(this: NewDepartment){
        console.log("Department is " + this.name);
    }
}
```

### 9. Singleton class / private contructor

```
class PrivateDepartment extends Department {
    // to check if instanceExists
    private static instanceExist: PrivateDepartment;
    private constructor(name: string, id: number, employees_number:number, admin: string,employee: string[]){
            super(name, id, employees_number, admin, employee);
    }
    describe(this: ITDepartment){
        console.log("Department is " + this.name);
    }

    static getInstance(name: string, id: number, employees_number:number, admin: string,employee: string[]){
        if(PrivateDepartment.instanceExist){
            return this.instanceExist; // inside a static method we can use this to access static properties
        }else{
            this.instanceExist = new PrivateDepartment(name, id, employees_number, admin, employee);
            return this.instanceExist;
        }
    }
}
```

### 10. ainitializing objects

```
let accounting = new ITDepartment('Accounting', 123, 5, 'eashan', [], 'python')

console.log(accounting)
```

## Interfaces

Type alias is of following form:

```
type AddFn = (a: number, b: number) => number;

let addNew: AddFn;

addNew = (n1: number, n2: number) => {
    return n1 + n2
}
```

Interfaces can be defined as:

```
interface AddFnInterface {
    (a: number, b: number): number;
}

let addNewInterface: AddFnInterface;

addNewInterface = (n1: number, n2: number) => {
    return n1 + n2
}
```

Interface can inherit other interfaces and also support multiple inheritance.

```
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

```

Define the stucture of an object.

```
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

```

It can also be used to define a structure of a class.

```
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
```
