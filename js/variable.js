// let
// const
// var
// var is function scoped, let and const are block scoped
// let and const are preferred over var in modern JavaScript
// const is used for constants, let is used for variables that can change
// var is hoisted, let and const are not hoisted
// let and const are not re-declarable in the same scope, var is re-declarable
// let and const are not accessible before declaration, var is accessible
// before declaration (undefined)
// let and const are preferred for better readability and maintainability
// Example of variable declaration and usage
let name = "John"; // let variable
const age = 30; // const variable
var city = "New York"; // var variable
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
// Changing the value of let variable