const fruits = ['apples','bananas','grapes','oranges','mangos','peach']

const myFruits = fruits;

myFruits.push("kiwi","barry")
console.log(myFruits)
console.log(fruits)
//  got the same result because array is object if we copy like that so it will copy the reference which points the next
// previous array and the recent 
//  so the solution is that if you want to do in a save mode like copy and do not change in the copied array so it done as follow 
//  by doing array destructing like that
const newFruits = [...fruits];
newFruits.pop() // delete art last only single element from newFruits
console.log(newFruits)
console.log(fruits) // hope it wont change the fruits lets see

// second use like 

const newArray = [...fruits,'almond','Cashews']
console.log(newArray)


// const newAnimals = [].concat(oldAnimals) another method to do copy without same reference or address 
// const newAnimals = oldAnimals.slice another method to do same work you knwo this if we do not pass the parameter then it returns complete new array so by slice method   

// now take the example of object

const user1 = {
    name:'Ali',
    age: 16
};
const user2 = user1;
user2.age = 24;
console.log(user1)
console.log(user2)
// same output

//  how we do that 
const obj1 = {
    name:"something",
    lastName:"pagal"
}
const obj2 = {}
Object.assign(obj2, obj1); // this will copy the object in a new object but this method is old and the way is old too 
obj2.name = "something new";
console.log(obj1)
console.log(obj2)

// now we use the other way which is es6 which is spread operator ...

// const newUSer = {...oldUser} this is new way to do this ok which i have done above for arrays

//  but in nested objects it will not properly like I am wrting a example here

const person1 = {
    name: "chola",
    age: 16,
    address :{
        city:"Sukkur",
        postalCode: 65200,
        pinCode:90
    }
}
const person2 = {...person1}
person2.address.city = "Karachi";
console.log(person1.address)
console.log(person2.address)
// it is called shallow copy , it copy only one level deep
// the result is same why because it copied only one object the upper one not the nested one 

// now we are going to find the way to deep copy of this so it will done by json