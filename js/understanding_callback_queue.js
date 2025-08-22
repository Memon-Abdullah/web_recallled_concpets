console.log("hi-1")
// i will use google devtool so i must have to connect html file 

function hello(){
    console.log("hello world!")
}

for(let i=0; i<=4; i++){
    console.log(i)
}
hello()

setTimeout(function(){ // this will run at the end because it is asynchronous first js engine will ignore it it will be in callback que 
    console.log(';hi-3')
},0)

console.log('hi-3')
