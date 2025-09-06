// arrow function in js Es6 
// function declaration
function something(){
    console.log("hello")
}
// function expression
const hello = something()
console.log(hello)

// function expression

const hi = function(b){
    console.log(b)
}

// arrow function expression

const arrow = ()=>{
    console.log("first arrow function")
}
arrow()

const square = (num)=>{
    return num**2 
}

console.log(square(2))

// creating single line arrow function with implicit return 

const add = (a,b)=> a+b;
console.log(add(1,5)) 

// if we have just single parameter then we don't need to use () like

const cube = num => num**3;
console.log(cube(3))

// another way of writing the expression in new line 
const random = ()=> (
    Math.floor(Math.random()*10 + 1)
) 

//  it is mostly used as a call back function like
// it is also anonymous function
setTimeout(()=>console.log("printing hello after 3 seconds using arrow function as a callback"),3000)