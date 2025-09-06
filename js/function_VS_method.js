// every function is not a method but every method is a function

function add(a,b){ // its an function 
    return a+b;
}

// and when we pass this function to an object it will be method

const maths={
    // these are all methods
    add:function(a,b){
        return a+b
    },
    subtract(a,b){
        return a-b
    },
    mul:function(a,b){
        return a*b
    },
    square:function(num){
        return num*num
    },
    cube:function(num){
        return num ** 3
    }
}
console.log( maths.add(6,7))
console.log( maths.subtract(14,7))
console.log( maths.mul(6,7))
console.log( maths.square(7))
console.log( maths.cube(3))