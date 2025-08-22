// higher order function because we have passed a function in its parameter 

function a(x){
    console.dir(x)
    x()
}


// a("hi")
// a({name:'Ali',age:90})
// a([1,2,3,4,5])
// a("it can be anything")
// a(true)

// console.dir(a)
// console.dir(90)
// console.dir('somthing')
// treat like what we passing in it 

// a.age = 80; // so function is a object 

function sayHi(){
    console.log("hiiiiiiiii")
}
a(sayHi) // here a become higher order function 

const x = sayHi
x.age = 90;
console.dir(x.age)
console.dir(sayHi.age)
x() // will show the output now

// callback function that we passes the function is callback function
a(function (){
    console.log("anonymous function")
}) // there example and use yes there are three builtin higher order function map filter reduce so there are many use cases 

// 1. A function that returns another function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

// 2. Array.prototype.map (built-in higher order function)
const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]

// 3. A function that takes a function and returns a decorated version
function logger(fn) {
    return function(...args) {
        console.log('Calling function with', args);
        return fn(...args);
    };
}
const sum = (a, b) => a + b;
const loggedSum = logger(sum);
console.log(loggedSum(3, 4)); // Logs args and result

// 4. Array.prototype.filter (built-in higher order function)
const words = ['apple', 'banana', 'kiwi', 'pear'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // ['apple', 'banana']

// 5. A function that takes a function and calls it multiple times
function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn(i);
    }
}
repeat(i => console.log('Hello', i), 3);

// 6. Array.prototype.reduce (built-in higher order function)
const values = [1, 2, 3, 4];
const total = values.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10