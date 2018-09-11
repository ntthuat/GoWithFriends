function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
console.log(output);
output = identity("myString2");
console.log(output);
var outputNumber = identity(12345);
console.log(outputNumber);
