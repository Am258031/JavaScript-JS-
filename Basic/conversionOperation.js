/*A conversion operation in JavaScript refers to transforming a value from one data type to another, 
such as type coercion(automatic) or type casting (explicit) */

let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33" => 33
// "33abs" => NaN
// true => 1; false => 0

let isLoggedIn = "Amjad"

let booleanIsLggedIn = Boolean(isLoggedIn)
console.log(booleanIsLggedIn);

// 1 => true
// 0 => false
// "Amjad" => true
// " " => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************** Operations ************************** //

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello"
let str2 = "Amjad"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// Link to study more : 
// https://262.ecma-international.org/
