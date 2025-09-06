// default paramter 

function something (name="someone"){
    console.log(name)
}

something("Pakistan");

function multiply(a,b=1){ //if we pass any falsy values to it will return a false it only used for undefined value 
    // and if pass a empty string is also falsy value so it will convert it into zero and zero is falsy value because we are multiplying  answer will be 0 
    return a*b
}

function rollADie(numberOfSides = 6){ // we can add a parameter to it for number of sides 
    return Math.floor(Math.random()*numberOfSides ) +1  // always give the random number between 1 top 6 
}
// before default parameter how we do like 
// if(numberOfSides === undefined){
//     numberOfSides = 6
// }

console.log(rollADie())
console.log(rollADie())
console.log(rollADie())
console.log(rollADie())
