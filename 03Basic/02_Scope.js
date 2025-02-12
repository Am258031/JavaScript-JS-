let a = 200

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);

//Nested Scope

function one() {
    const username = "Amjad"

    function two() {
        const website = "abc"
        // console.log(username);
    }
    two()
}

// one()

if (true) {
    const username = "Amjad"
    if (username === "Amjad") {
        const website = " abc"
        // console.log(username + website);

    }
}

// ++++++++++++++++++++++++=== interesting ++++++++++++++

function addone(num) {
    return num + 1
}
console.log(addone(5));


const addTwo = function (num) {
    return num + 2
}
addTwo(6)