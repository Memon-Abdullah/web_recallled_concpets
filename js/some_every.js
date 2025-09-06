// some and every method of array 

const evenNumber = [2,4,9,8,10]

// evenNumber.some((num,index,array)=>{
//     console.log(index,num,array) // it also loop to array elements
// })

// const returnValue = evenNumber.some((num)=>{
//     return "something" //true it mean truthy value pe return true kr raha ha if any single value is true it will we return true for all five 
// })
const returnValue = evenNumber.some((num,i)=>{
    if(num % 2 === 1){
        console.log('index of that element if present ',i)
    }
    return num % 2 === 1 // checking for odd number in evenNumber may be by mistake it can happen consider this array is thousands of elements 
})

console.log(returnValue) 

// every method is same as some but it return if all the values are true otherwise false if it got any false so it will return false and it will check all values 