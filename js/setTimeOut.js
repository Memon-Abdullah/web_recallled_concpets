// setTimeout function is asynchronous code and it will go to callback queue and there is event loop which put it in the stack if the stack is free 

// basically three parameters are there in setTimeOut
// time handler
// timeout
// arguments [] any : number
function zuhar(){
    console.log("praying zuher")
}
function lesson(){
    console.log("listen lecture")
}


setTimeout(lesson,3000)
zuhar()



const timer_1 = setTimeout('console.log("hi-3")',3000) //in the console run this not here 
const timer_2 = setTimeout('console.log("hi-5")',5000) //in the console run this not here 
const timer_3 = setTimeout('console.log("hi-9")',9000) //in the console run this not here 

// clearInterval(timer_1)
// clearInterval(timer_2)
// clearInterval(timer_3)
// clearTimeout(timer_1)
// clearTimeout(timer_2)
// clearTimeout(timer_3)

setTimeout(a,15000,125,4,78,2,5,6,'sdfsdf') // so return value of a will passed and which is undefined it will be undefined and hello will printed first
// because we have called it
// so the first argument will be a js code a function or any string you can pass to it 
function a (){
    // console.log(arguments) but this is deprecate we don't pass the arguments in the setTimeout function as well as in any callback function the keyword
    console.log("hello")
}


// setInterval higher oder function 
// this will run because its asynchronous  
const timer = setInterval(seconds,1000) // it will run every one and infinite many times  
// clearInterval(timer)
// clearTimeout(timer)

// first this will run then 
function seconds(){
    const date = new Date();
    const currentSeconds = date.getSeconds();

    const second = document.getElementById("seconds").innerText = currentSeconds;
    console.log(second)
}
