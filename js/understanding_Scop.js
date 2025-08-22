'use strict'

const username = "Abdullah";
const userAge = 25;
const userCountry = "Pakistan";

function add(){
    const x = 10;
    const y = 20;
    var a = 50;
    console.log(x + y);  // x and y has function level scope
} // when we use const and let then there will be script scope created in the memory but this id also a global scope
// basically global scope is window object 
// when we create a variable with var or create a function then it will be created in the window scope
//  when we write window.a then it will show the value of a is 50
// and when we write window.username then it will show undefined because username is not in the global scope 
add(); // Output: 30
// console.log(x) error 

//  when the function is called then  there will bw new scope created in memory a local scope then x y and this :{} object 

//  basically in the global scope there is script and window scop and then there is local function scop

// lexical and block level scope

function father(){
    console.log("Father's scope");
    const x = 11;
    const y = 22;
    const z = 30; // if is created this and don't use it it will shown in memory but the function is not un till we ise it or call it
    console.log(x + y); // Output: 33
    
    function son(){
        const name = 'chola';
        console.log("Son's scope " +name);
        console.log(z) // it will show the closure n that there will be z=30 

        // block scope
        if (true){
            const num1 = 29;
            var num2 =10;
            console.log(num2)
            something = 898; // how we use the variable of function scop from the the local scope or function by creating without any keyword
        }
        console.log(num2) // function level scope ha var ka bhae
        
        
        // console.log(num1) error if we create it with var key word its global so we can access it by using var key word creation

        function grandSon(){
            const grandSonName = "bugra";
            console.log(grandSonName);            
        }
        grandSon();
    }
    son() //  it will not appear in the memory context or in the local scope of function  until we call it so lets call it
    console.log(something) // now something in window object and  in the global scope as well as 
    //  we wont do this because we don't have to do this there is a mode to prevent this im writing this on the top of the file 
    // so in the start it will give error that something is not defined
    //  module scope explore by your self 
    
}
father()
console.log("program ended")

