

function intro(){
    console.log("Welcome to the program!");
    console.log("Hi, \n My name is John Doe.\nI am a software developer.\nI love coding and solving problems.\nLet's get started with functions in JavaScript.");
    return true;
}

const returnValue = intro();
console.log(returnValue);


function someThing(userName="Guest") {
    console.log(userName)
}
someThing(); // default parameter
someThing('ALi');
someThing('Abdullah');
someThing('Kashmala');

function myIndroduction(username){
    console.log(`Hello, my name is ${username}\nI am a software developer.\nI love coding and solving problems.`);
}

myIndroduction('John Doe');

// before es6 

// function myIndroduction(username){
//     if(username === undefined){
//         username = 'Guest';
//     }
//     console.log("my name is " + username);
//     if(!username){
//         username = 'Guest';
//     }
        // another way like if username is undefined because or will find other value if first is falsy value 
        // console.log(`hi my name is ${username || 'procodrr'  } `)

// }

// now working with return statement and result of the function

function addTwoNumbers(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return "Please provide both numbers.";
    }
    return num1 + num2;
}
