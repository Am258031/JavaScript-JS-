// (1)Primitive Datatype

// 7 typyes : String, Number, Boolean, Null, undefined, Symbol
// BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('121')
const  anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 634263874747324324n

// (2)Reference (Non Primitive)

// Array , Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Amjad",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
