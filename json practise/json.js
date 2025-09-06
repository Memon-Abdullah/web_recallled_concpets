const jsonData = '{ "name" : "Ali", "age":23}';
console.log(typeof(jsonData))

// json to text

const obj = JSON.parse(jsonData)

console.log(typeof(obj))

// object to json 
const person ={
    name:"something",
    age : 23
}
const jsonPerson = JSON.stringify(person) // type string but shown like a json fo
console.log(typeof(jsonPerson))
console.log(jsonPerson)