// const person = {
//     name: "Alice",
//     age: 30,
//     isStudent: false
// };

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022
// };

// const book = {
//     title: "JavaScript Basics",
//     author: "John Doe",
//     pages: 250
// };

// console.log(person.name); // Accessing property of an object
// console.log(car.year); // Accessing property of another object  
// console.log(book.title); // Accessing property of a book object


const myName = "Ali"

const user = {
    firstName: "John",
    lastName: "Doe"
}   
const user2 = {
    firstName: "John",
    lastName: "Doe",
    'Ali' : "developer"
}



// how to access the properties of an object
console.log(user.firstName); // Accessing firstName property
//  second way to access the properties of an object\
console.log(user['lastName']); // Accessing lastName property using bracket notation

//  string ke ilawa bhi variable sab access kr skte han using bracket notation

console.log(user2.Ali); // developer
console.log(user2['myName']);  //?// undefined, because 'myName' is not a property of user2
console.log(user2[myName]) // developer

//  we can write the js expression too in this like below
 console.log(user2["first" + 'Name']); // john will be answer

//  now updating th obj
user2.age = 18

// user.is-Student = true; this will not work because hyphen is not allowed in property names
user["is-Student"] = true; // using bracket notation to add a property with hyphen

console.log(user2.age); // 18, now we added age property to user2 object


// these object address will be different even though they have the same properties
// but the values got the same address in memory
// console.log(user === user2); // false, because they are different objects
console.log(user===user2)
// because the match the address in comparing not values hope you got the idea of addresses of memory 
//  in memory tab you can see the user object's memory 

const userName1 ='' // @77 
const userName2 ='' // @77 always the same address in memory of empty string 
// now check theses memory addresses
const obj1 = {}
const obj2 = {}

// nested object

const myIntro = {
    name: "Ali",
    age: 25,
    address: {
        city: "Karachi",
        country: "Pakistan"
    },
    hobbies: ["reading", "coding", "gaming"]
}