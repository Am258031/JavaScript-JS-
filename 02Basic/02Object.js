const tinderUser = {}

tinderUser.id = "123nbc"
tinderUser.name = "Mack"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//Object in Object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Amjad",
            lastname: "Ali"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "Js in hinglish",
    price: "999",
    courseInstructor: "Amjad"
}

const {courseInstructor} = course
console.log(courseInstructor);


//API format
// {
//     name: "Amjad",
//     coursename: "Js in Hinglish",
//     price: "free"
// }

[
    {},
    {},
    {}
]