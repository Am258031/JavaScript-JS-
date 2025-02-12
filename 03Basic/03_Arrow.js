const user = {
    username: "Amjad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Mack"
// user.welcomeMessage()

// console.log(this);

// function study(){
//     console.log(this);
// }
// study()

const study = () => {
    let username = "Amjad"
    console.log(this);
    
}

// study()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2
const subTwo = (num1, num2) => num1 - num2

console.log(addTwo(2,9), subTwo(10,5));
