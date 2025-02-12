// Array: The Array object, as with arrays in 
// other programming languages, enables storing a 
// collection of multiple items under a single variable name, 
// and has members for performing common array operations.

const myArr = [0,1,2, 3, 4, 5]
const myHeros = ["shakitiman", "Ironman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);


// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"] 

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);

const another_array = [1, 2, 3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Amjad"));
console.log(Array.from("Amjad"));
console.log(Array.from({name: "Amajd"})) //interesting

let score1 = 200
let score2 = 400
let score3 = 600

console.log(Array.of(score1, score2, score3));
