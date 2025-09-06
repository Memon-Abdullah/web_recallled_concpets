const num1 = [1,2,3,4];
const num2 = [5,6,7,8,9,10];

const firstName = "Abdullah";
const lastName = "Hyder";
const fullName  = [...firstName,...lastName];
console.log(fullName)
const joinedArray = [...num1,...num2];

const secondArray = [...num1,...num2,11,12,13]; // you can do this too 
console.log(joinedArray)

const user = {
    name:'john',
    age: 23
}

const updatedObj = {...user ,city: "karachi"}
console.log (updatedObj)

function add(){
    let sum =0;
    for(let i=0; i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}
// otherwise we had to do like that add(joinedArray[0],joinedArray[1] and so on .....)
console.log(add(...joinedArray)) // but the spread operator make things easy