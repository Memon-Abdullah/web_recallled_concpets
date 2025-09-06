//  object and array destructuring using spread operator and in the parameter in the function

const colors = ['blue','red','yellow','green','black','pink']

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

// we have to do this one by one which is time taken but the de structuring is easy 

// const [color1,color2,color3] = colors;
// console.log(color1)
// console.log(color2)
// console.log(color3)
// const [blue,red, ...remaining] = colors;
// console.log(blue)
// console.log(red)
// console.log(remaining)
// // you can do like this only third element if oyu want so you can do like that 
// const [,,third] = colors; // skip first and second
// console.log(third)

const {3:fourthElement} = colors; // behind the sceen array is object 
console.log(fourthElement)



const object = {
    name: 'Abdullah',
    caste : 'Memon',
    age: 23,
    address: {
        city:"Karachi",
        zipcode :75300
    }
}
// now object de structuring
// const age = object.age;
// const name = object.name;
// here is the case of key/property of the object
// in the array we can give any name to a variable but in this case we must have to write exact same name of the property

// const {name,age} = object
// if you want to do so you can do like that 
const {name:username, age: userAge } = object
// console.log(name,age)
console.log(username,userAge)

// if you wanna de structure the city property 
const {address} = object // complete address object
const {address : {city} } = object // complete address object
console.log(address)
console.log(city)

// parameter de structuring we are just talking age from object using de structuring
function user({age,name}){  // in object order doesn't matter
    console.log(name,age)
}

user(object) // 23 

function printColors([a,b,,,fifth]){
    console.log([a,b,fifth])
}
printColors(colors)