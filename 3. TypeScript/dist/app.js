"use strict";
class Department {
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
    constructor(name, id, employees_number, admin, employee) {
        this.name = name;
        this.id = id;
        this.employees_number = employees_number;
        this.admin = admin;
        this.employee = employee;
    }
    addEmployee(employee) {
        this.employee.push(employee);
        return true;
    }
    showEmployee() {
        console.log(...this.employee);
    }
}
class ITDepartment extends Department {
    constructor(name, id, employees_number, admin, employee, langauge) {
        super(name, id, employees_number, admin, employee);
        this.langauge = langauge;
    }
    addEmployee(employee) {
        if (this.admin !== employee) {
            this.employee.push(employee);
            return true;
        }
        else {
            return false;
        }
    }
    describe() {
        console.log("Department is " + this.name);
    }
}
class Accounting extends Department {
    constructor(name, id, employees_number, admin, employee, report) {
        super(name, id, employees_number, admin, employee);
        this.report = report;
    }
    get getReport() {
        return this.report;
    }
    set setReport(report) {
        this.report = report;
    }
    describe() {
        console.log("Department is " + this.name);
    }
}
class NewDepartment extends Department {
    constructor(name, id, employees_number, admin, employee, departmentCreated = undefined) {
        super(name, id, employees_number, admin, employee);
        this.departmentCreated = departmentCreated;
    }
    set setDepartmentCreated(fiscalYear) {
        if (typeof fiscalYear === 'number') {
            this.departmentCreated = fiscalYear;
        }
        else {
            this.departmentCreated = NewDepartment.fiscalYear;
        }
    }
    describe() {
        console.log("Department is " + this.name);
    }
}
NewDepartment.fiscalYear = 2022;
class PrivateDepartment extends Department {
    constructor(name, id, employees_number, admin, employee) {
        super(name, id, employees_number, admin, employee);
    }
    describe() {
        console.log("Department is " + this.name);
    }
    static getInstance(name, id, employees_number, admin, employee) {
        if (PrivateDepartment.instanceExist) {
            return this.instanceExist;
        }
        else {
            this.instanceExist = new PrivateDepartment(name, id, employees_number, admin, employee);
            return this.instanceExist;
        }
    }
}
let accounting = new ITDepartment('Accounting', 123, 5, 'eashan', [], 'python');
console.log(accounting);
