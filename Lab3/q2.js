// Write the Destructuring assignment that reads:
//     name property into the variable name.
//     years property into the variable age.
//     isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:
//     let user = { name: "John", years: 30 };
// // your code to the left side:
// // ... = user
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let user = {name: "John", years: 30};
let {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);