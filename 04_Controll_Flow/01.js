// if
// const isUserloggedIn = true
// const temperature = 42

// if(temperature < 50){
//     console.log("Less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("Executed_");

// const balance = 1000

// if(balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedId = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedId && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


