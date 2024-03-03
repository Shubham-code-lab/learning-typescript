//Union Type
let twoType: string | number = "Hii";
twoType = 7;

//Literal Type
let outputType = "as-number";
outputType = "as-string";

if(outputType === "as-string")
    console.log(+twoType);

if(outputType === "as-number")
    console.log(`${outputType}`);


//Type Alias 
type CombinableUnion = string | number;
type CombinableLiteral = "as-number" | "as-string";


//function return Type 
const funReturn = function(input1:number, input2:number):number{
    return input1 + input2;
}

const funReturnVoid = function(input1:number, input2:number):void{}   //

const funReturnUndefined1 = function(input1:number, input2:number):undefined{}   //but no error i am getting //error in course video
const funReturnUndefined2 = function(input1:number, input2:number):undefined{return;} //no error   //undefined expect return statement

console.log(funReturn(5,7));
console.log(funReturnVoid(5,7));    //undefined is printed  
console.log(funReturnUndefined1(3,8));

//undefined
let undefinedType:undefined = undefined;


//function Type
const fun:Function = funReturn;
const funType:(a:number,b:number)=>number = funReturn; 


//unknown Type
let userInput: unknown;   //gives some type check
let userInput1:any;      //ignore all type check
let userInput2:string = "sepname";

userInput = 5;
userInput = 'Shubham';
 
userInput2 = userInput1;     //work    

// userInput2 = userInput;   //error
if(typeof userInput === 'string'){
    userInput2 = userInput; 
} 



//never Type
function generateError(message:string, statusCode:number):unknown{   
    throw {message: message, status: statusCode};
}

console.log(generateError("wrong", 404));   //this console log don't print any thing //not even undefined which void,undefined return
