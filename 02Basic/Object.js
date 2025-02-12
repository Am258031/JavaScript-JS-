// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Amjad",
    age: 22,
    location: "Himachel",
    [mySym]: "mykey1",
    email: "Amjad2435@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "amjad@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "amjad@google.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


