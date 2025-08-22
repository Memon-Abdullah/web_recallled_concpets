// hoisting in js 
/*
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase. Only the declarations are hoisted, not the initializations. 'var' variables and function declarations are hoisted, but 'let' and 'const' are not initialized until their definition is evaluated.
*/

// Example 1: Function Declaration Hoisting
foo(); // Output: "Hello"
function foo() {
    console.log("Hello");
}

// Example 2: Variable Hoisting with var
console.log(a); // Output: undefined
var a = 5;

// Example 3: let is not hoisted (Temporal Dead Zone)
try {
    console.log(b); // ReferenceError
} catch (e) {
    console.log(e.message);
}
let b = 10;

// Example 4: const is not hoisted (Temporal Dead Zone)
try {
    console.log(c); // ReferenceError
} catch (e) {
    console.log(e.message);
}
const c = 20;

// Example 5: Function Expression with var
try {
    bar(); // TypeError: bar is not a function
} catch (e) {
    console.log(e.message);
}
var bar = function() {
    console.log("Bar");
};

// Example 6: Function Expression with let
try {
    baz(); // ReferenceError
} catch (e) {
    console.log(e.message);
}
let baz = function() {
    console.log("Baz");
};

// Example 7: Hoisting inside functions
function test() {
    console.log(x); // undefined
    var x = 2;
}
test();

// Example 8: Multiple var declarations
var d = 1;
function demo() {
    console.log(d); // undefined
    var d = 2;
}
demo();

// Example 9: Function declaration overrides var
console.log(typeof fun); // function
var fun = 1;
function fun() {}
console.log(typeof fun); // number

// Example 10: Only declarations are hoisted, not initializations
console.log(e); // undefined
var e = 100;

//---------------------------------------------------------------------------------------------------------------------------

// debugger

console.log(a)

var a = 'Anurag'

hi()


// Function Definition
// Function Declaration & definition
function hi() {
    console.log('Hello');
}

//  creating a function with const key word /with  a variable
const greeting  = function() {
    console.log('Greetings');   
}

// you can call this now with the variable name
greeting(); // Output: Greetings and this function will be lke variable concept like it will not be hoist like function declaration 



// but Function Definition

// thi is called Function Expression
var sayHi = function() {    //anonymous function
    console.log('Hiii');
}
// var sayHi = function greeting() {    
//     console.log('Hiii');
// }
// greeting(); so it will do nothing giving error because it is not function so there is no need to define the name of the function here that's why its called anonymous function


// IIFE imidiately invoked function expression


sayHi()