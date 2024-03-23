const accountId = 144556
let accountEmail  = "rozy@microsoft.com"
var accountPassword = "11223334444"
accountCity = "sonepur"

// accountid = 2  this is not allowed

accountEmail = "rozy@gmail.com"
accountPasssword = "3333333333333"
accountCity = "Banguluru"

console.log(accountId);


// NOTE :- prefer not to use var beacause of issue in block scope and functional scope.

console.table([accountId,accountEmail,accountPassword,accountCity]);
