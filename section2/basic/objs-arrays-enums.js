//Union Type
var twoType = "Hii";
twoType = 7;
//Literal Type
var outputType = "as-number";
outputType = "as-string";
if (outputType === "as-string")
    console.log(+twoType);
if (outputType === "as-number")
    console.log("".concat(outputType));
//function return Type 
var funReturn = function (input1, input2) {
    return input1 + input2;
};
var funReturnVoid = function (input1, input2) { };
var funReturnUndefined = function (input1, input2) { };
console.log(funReturn(5, 7));
console.log(funReturnVoid(5, 7)); //undefined is printed  
console.log(funReturnUndefined(3, 8));
//undefined
var undefinedType = undefined;
