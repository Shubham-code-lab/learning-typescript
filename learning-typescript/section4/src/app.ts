class Department {
    private name:string;
    private employees: string[];

    //readonly property only modify once only in constructor
    constructor(private readonly rollNumber:number,private id: string,public age:number, name:string){
        this.name = name;
        this.employees = [];
    }

    get employeesArray(){
        return this.employees;
    }

    addEmployee(employeeName:string){
        this.employeesArray.push(employeeName);
     }

     memberFun(this:Department,name:string){
        // this.rollNumber = 67;   //can't change readonly variable value

        // this.name = name;    //removed this code as in javascript variable get initialize for deptObj even in member methods
        console.log(this.name) ;
     }


     printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
     }
}

class ITDepartment extends Department {
    private deptName:string;

    constructor(private deptID:number, deptName:string, rollNumber:number, DeptMainId: string,age:number,name:string ){
        super(rollNumber, DeptMainId, age, name);
        this.deptName = deptName;  //if initialize this way then initialize after super
    }
}

const itDeptNewObj = new ITDepartment(420,"computer science", 69, "id2", 35, "shubham");

const dept = new Department(45,"id1",25,"science");
dept.addEmployee('emp1');
dept.addEmployee('emp2');
// dept.employees[2] = "shubham";
dept.printEmployeeInformation();
console.log(dept.age);
console.log(dept);

let deptObj = {
    name: '',   
    memberFun: dept.memberFun   //
}

// deptObj.memberFun("shubham");   //this keyword refer to Department

