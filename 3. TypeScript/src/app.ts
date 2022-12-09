abstract class Department {
    // public readonly name: string;
    // public id: number;
    // public employees_number: number;
    // private employee: string[];

    // constructor(name: string, id: number, employees_number:number, employee: string[]){
    //     this.name = name;
    //     this.id = id;
    //     this.employees_number = employees_number;
    //     this.employee = employee;
    // }
    // or 
    constructor(public readonly name: string, public id: number, public employees_number:number, protected admin: string, protected employee: string[]){
    }


    abstract describe(this: Department): void;

    addEmployee(this: Department, employee: string): boolean{
        this.employee.push(employee);
        return true;
    }
    
    showEmployee(this: Department){
        console.log(...this.employee);
    }

}

class ITDepartment extends Department{

    constructor(name: string, id: number, employees_number:number, admin: string,employee: string[], public readonly langauge: string){
        super(name, id, employees_number, admin, employee);
    }

    addEmployee(this: ITDepartment, employee: string): boolean {
        if (this.admin !== employee){
            this.employee.push(employee);
            return true;
        }else{
            return false;
        }
    }
    describe(this: ITDepartment){
        console.log("Department is " + this.name);
    }

}

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

class NewDepartment extends Department {
    static fiscalYear = 2022
    constructor(name: string, id: number, employees_number:number, admin: string,employee: string[], public departmentCreated: number|undefined = undefined){
        super(name, id, employees_number, admin, employee);
    }

    set setDepartmentCreated(fiscalYear: boolean | number){
        if(typeof fiscalYear === 'number'){
            this.departmentCreated = fiscalYear
        }else{
            this.departmentCreated = NewDepartment.fiscalYear
        }
    }

    describe(this: NewDepartment){
        console.log("Department is " + this.name);
    }
}

class PrivateDepartment extends Department {
    private static instanceExist: PrivateDepartment;
    private constructor(name: string, id: number, employees_number:number, admin: string,employee: string[]){
            super(name, id, employees_number, admin, employee);
    }
    describe(this: ITDepartment){
        console.log("Department is " + this.name);
    }

    static getInstance(name: string, id: number, employees_number:number, admin: string,employee: string[]){
        if(PrivateDepartment.instanceExist){
            return this.instanceExist;
        }else{
            this.instanceExist = new PrivateDepartment(name, id, employees_number, admin, employee);
            return this.instanceExist;
        }
    }
}

let accounting = new ITDepartment('Accounting', 123, 5, 'eashan', [], 'python')

console.log(accounting)