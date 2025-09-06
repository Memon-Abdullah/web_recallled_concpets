// for of and for in loops 

// for of is used for array and for in for objects
// because for of is used for iterable object

const fruits = ['apple','banana','cherry','mango','leechie','orange','water chestnut']

for (const element of fruits) {
    console.log(element)
}

const string = "abcdefghijklmnopqrstuvwxyz";
for (const letter of string) {
    console.log(letter)
}

const person ={
    name:"Abdullah",
    caste: "Memon",
    age: 23,
    education:"bachelor in CS",
    gender: "M"
}

for (const key in person) {
    console.log(person[key])
}
for (const key in person) {
    console.log(`${key}:${person[key]}`)
}

const personKeys = Object.keys(person)
console.log(personKeys)

for (const element of personKeys) { // behind the scene its fast than for in 
    console.log(person[element])
}
const personValues = Object.values(person);
// const personValues = Object.values; this will return [Function:object]
console.log(personValues)

const personEntries = Object.entries(person); // it will return list of arrays every array has two items key value key value.... 
console.log(personEntries)


// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }