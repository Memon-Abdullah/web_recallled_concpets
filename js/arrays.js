const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
const oddNumber = [1, 3, 5];

// evenNumbers.shift() delete at first the first element will be deleted and return that element and the elements will shift left
// evenNumbers.unshift(0) add at first the element will be added at the first position and the elements will shift right return the length

const addedArray1 = evenNumbers.concat(animals);
const addedArray2 = animals.concat(evenNumbers, oddNumber);

const elementIndex = animals.indexOf("Cat");
const isIncluded = animals.includes("dog");

// animals.reverse(); // This will reverse the original array in place
// console.log(animals);    
const reversedArray = animals.reverse(); // it will reverse the orignal array either you save any variale or not 
// console.log(reversedArray);
console.log(animals)

// sort method / function
animals.sort(); // This will sort the original array in place
console.log(animals);

console.log(evenNumbers) // it will sort alphabetically so result will be like this
// [0, 10, 12, 14, 16, 18, 20, 22, 24, 2, 4, 6, 8] kind of
//  so we have to pass the parameter to sort fucntion that which way to sort the elements 
// but it is not sorrting alphabetically it is sorting in another way if you want to sort alphabetically so every element has small case or in uppercase 
// behind the scene it is converting them into numeric value then sorting them 

animals.slice(5); //gives new error 

animals.slice(2, 5); // start value include end value exclude

animals.splice(2, 3, "Monkey", "Giraffe"); // This will remove 3 elements starting from index 2 and add "Monkey" and "Giraffe" in their place   