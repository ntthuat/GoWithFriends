function genericFunc<T>(argument: T): T[] {
    let arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

let arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0]);   // String

let arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0]);   // number

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'
console.log(output);
output = identity("myString2");
console.log(output);

let outputNumber = identity<number>(12345);
console.log(outputNumber);