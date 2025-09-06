// argument keyword
// except arrow function all function has argument

function add(a,b){
    console.log(arguments)
    return a+b;
}
// array like object but it is not array in actual we cant use the reduce maps and other array functions but we can access through loop 
function something(){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
}


add(5,5)
add(1,2,3,4,5,6) // we have passed multiple arguments but it will add only two of them but the other will saved in arguments 
something(1,2,3,4)


function sum(){
    let sum =0;
    for(let i=0; i<arguments.length;i++){
        sum+= arguments[i]
    }
    return sum
}
const some =sum(1,2,3,4,5);
console.log(some)

// using rest parameter using spread operator
function addition (...args){
    let sum = 0;
    for(let i=0; i<args.length;i++){
        sum+= args[i]
    }
    return sum
}
console.log(addition(10,20,30,40,50))
