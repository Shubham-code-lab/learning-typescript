//Type inference :-
var number1 = 5; //constant and we assign number so it know it type
var number2 = 5; //still know it is number type
var number3; //doesn't know type of variable //it treat it as number
number3 = '5';
//Object type :-
//type as generic object
// const person: object = {
//specific object type 
var person = {
    name: "shubham",
    age: 25
};
console.log(person.name);
//Array type :-
var hobbies = ["cricket", "volleyball", "hockey"];
//Tuples type:-
//fixed length and fixed type
var role = [2, "author"];
// role[1] = 5;   //error second type is string
role.push(8); //execeptional it work which shouldn't
//ENUM type :-
//global constant with human readable label
//Automatically enumerated globally constant identifiers
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["Author"] = 2] = "Author";
    Role[Role["test"] = 3] = "test"; //any case is okay
})(Role || (Role = {}));
console.log(Role.test);
var Num;
(function (Num) {
    Num[Num["One"] = 1] = "One";
    Num[Num["two"] = 2] = "two";
    Num[Num["three"] = 3] = "three";
})(Num || (Num = {}));
console.log(Num.three); //get value 3 automatically
var Num2;
(function (Num2) {
    Num2["One"] = "1";
    Num2[Num2["two"] = 2] = "two";
    Num2["three"] = "three";
})(Num2 || (Num2 = {}));
//ANY type :-
var temp;
