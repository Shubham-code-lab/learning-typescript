
//Type inference :-
const number1 = 5;    //constant and we assign number so it know it type
let number2 = 5;      //still know it is number type
let number3;         //doesn't know type of variable //it treat it as number
number3 = '5';   



//Object type :-

//type as generic object
// const person: object = {

//specific object type 
const person: {
    name:string;
    age: number;
}={
    name: "shubham",
    age: 25
}

console.log(person.name); 


//Array type :-
const hobbies:string[] = ["cricket", "volleyball", "hockey"];


//Tuples type:-
//fixed length and fixed type
const role: [number, string] = [2, "author"]

// role[1] = 5;   //error second type is string
role.push(8)   //execeptional it work which shouldn't


//ENUM type :-
//global constant with human readable label
//Automatically enumerated globally constant identifiers

enum Role {
    ADMIN,
    READ_ONLY,
    Author,
    test   //any case is okay
}

console.log(Role.test);

enum Num {
    One = 1,
    two,
    three
}

console.log(Num.three);  //get value 3 automatically

enum Num2 {
 One = "1",
 two = 2,
 three = "three"
}


//ANY type :-
let temp:any;
