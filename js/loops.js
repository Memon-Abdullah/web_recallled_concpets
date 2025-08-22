/**
 * Demonstrates different types of loops in JavaScript
 * with arrays and objects, highlighting their differences.
 */

// Sample array and object
const arr = [10, 20, 30];
const obj = { a: 1, b: 2, c: 3 };

// 1. while loop (array)
let i = 0;
console.log('while loop (array):');
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 2. do...while loop (array)
i = 0;
console.log('\ndo...while loop (array):');
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);

// 3. for loop (array)
console.log('\nfor loop (array):');
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

// 4. for...of loop (array)
console.log('\nfor...of loop (array):');
for (const value of arr) {
    console.log(value);
}

// 5. forEach (array)
console.log('\nforEach (array):');
arr.forEach((value, index) => {
    console.log(value);
});

// 6. for...in loop (array)
console.log('\nfor...in loop (array):');
for (const index in arr) {
    console.log(arr[index]);
}

// 7. for...in loop (object)
console.log('\nfor...in loop (object):');
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 8. for...of loop (object) - Not valid directly, but can be used with Object.entries/keys/values
console.log('\nfor...of loop (Object.entries):');
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

// 9. forEach (object) - Not directly, but can use Object.keys/values/entries
console.log('\nforEach (Object.keys):');
Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`);
});

/*
Differences:
- while/do...while/for: General-purpose, index-based, works with arrays and can be adapted for objects.
- for...of: Iterates over iterable objects (arrays, strings, etc.), not plain objects.
- forEach: Array method, cannot break/continue, not for objects directly.
- for...in: Iterates over enumerable properties (keys) of objects or array indices (not recommended for arrays).
*/

// practice 
const friends = ['Áli','Anisha','Iqra','Avantika','shazeb']
let counter = 0;
while(counter<friends.length){
    console.log(friends[counter]);
    counter++;
}

