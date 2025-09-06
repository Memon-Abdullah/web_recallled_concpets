// maps reduce filter

const months = ["january", "february", "March", "April", "May", "December"];

months.forEach((element) => {
  console.log(element);
  return element.toUpperCase(); //ti will return undefined array
});

// in this map function has three parameters array item , index and the complete array
const monthsUpperCase = months.map((element, index, array) => {
  console.log(element, index + 1, array);
  return element.toUpperCase(); // if we do not return this it will also return the array and the values will be undefined
  // because maps function return the array actual and do not change main array
});

console.log(monthsUpperCase);

// now filter
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// Returns the elements of an array that meet the condition specified in a callback function.

const filteredMonths = months.filter((month, index, array) => {
  // console.log(month.length <=5 ) print the result of true and false conditions
  // return month.toUpperCase() it will return the same but the behind the seen this will bw string and the string is truthy values so it return if it was false so
  // it will skip it
  return month.length <= 5; // for first two are false so it will skip and return for last three values
});
console.log(filteredMonths);

const containingM = months.filter((month, index, array) => {
  return month.toLowerCase().includes("m");
});
console.log(containingM);

const students = [  // array of objects
  {
    name: "Abdullah",
    age: 23,
  },
  {
    name: "Avantika",
    age: 22,
  },
  {
    name: "Anisha",
    age: 24,
  },
  {
    name: "Shazaib",
    age: 21,
  },
  {
    name: "Khubaib",
    age: 18,
  },
];

const matureStudent = students.filter((std, index, array) => {
  console.log(std.age);
  return std.age >= 22;
});
console.log(matureStudent);

// now it became an array to why we are not using map it return the whole array and don't change anything to original

const matureStudentsNames = students
  .filter((std, index, array) => {
    console.log(std.age);
    return std.age >= 22;
  })
  .map((element, index, array) => {
    return element.name;
  }); // its called chaining of array method you can use further filter to this
console.log(matureStudentsNames);

//  now reduce method

const num = [1, 2, 3, 4, 5];
const initialValue = 0; // it can be any thing like a string if there is 0 so initial value is 0 if we don't set this value so 1 this si will pass in acc

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result,
//  and is provided as an argument in the next call to the callback function.

// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn 
// function provides this value as an argument instead of an array value.

num.reduce((accumulator, current, index, array) => {
    // console.log(index,current)
    console.log(accumulator) 
    return 8
},10);

const someOfNum = num.reduce((accumulator, current, index, array) => {
    // console.log(index,current)
    console.log(accumulator,"+",current) 
    return accumulator+current
},0);
console.log('total sum of array using reduce ',someOfNum)

// by using this do the factorial work 3! 4!