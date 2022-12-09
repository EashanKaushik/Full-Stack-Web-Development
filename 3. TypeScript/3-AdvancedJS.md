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
