"use strict";
class Department {
    constructor(rollNumber, id, age, name) {
        this.rollNumber = rollNumber;
        this.id = id;
        this.age = age;
        this.name = name;
        this.employees = [];
    }
    get employeesArray() {
        return this.employees;
    }
    addEmployee(employeeName) {
        this.employeesArray.push(employeeName);
    }
    memberFun(name) {
        console.log(this.name);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(deptID, deptName, rollNumber, DeptMainId, age, name) {
        super(rollNumber, DeptMainId, age, name);
        this.deptID = deptID;
        this.deptName = deptName;
    }
}
const itDeptNewObj = new ITDepartment(420, "computer science", 69, "id2", 35, "shubham");
const dept = new Department(45, "id1", 25, "science");
dept.addEmployee('emp1');
dept.addEmployee('emp2');
dept.printEmployeeInformation();
console.log(dept.age);
console.log(dept);
let deptObj = {
    name: '',
    memberFun: dept.memberFun
};
