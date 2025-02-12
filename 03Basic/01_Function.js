function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("J");
    console.log("A");
    console.log("D");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(5, 10)

// console.log("Result: ", result);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Amajd"));

function calculateCartPrice(val1, val2, ...num1) { //Here (...) is rest and spread operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 800));

// Object

const user = {
    username: "Amjad",
    Rollno: 22
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and rollno is ${anyobject.Rollno}`);

}

// handleObject(user)
handleObject({
    username: "Mack",
    Rollno: 45
})

//Array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue([200,400,500,1000]));
