const accountId = 123453
let accountEmail = "Amjad5423@gamil.com"
var accoundPassword = "6542378"
accountCity = "Himachal"
let accountState;

// accountId = 2 // not allowed

accountEmail = "Abc4235@google.com"
accoundPassword = "4352373"
accountCity = "Bihar"

console.log(accountId)

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accoundPassword, accountCity, accountState])