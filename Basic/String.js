const name = "Amjad"
const repoCount = 10

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// console.log(name[0]);

const gameName = new String('Amjad-hcc-com')

// console.log(name.length);
// console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('A'));

const subString = gameName.substring(0,2)
console.log(subString);

const Slicing = gameName.slice(-4, 2)
console.log(Slicing);

const newStringOne = "    Amjad    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Amjad.com/amjad%34Ali"

console.log(url.replace('%34', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
