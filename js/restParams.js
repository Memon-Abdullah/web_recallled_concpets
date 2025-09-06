function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6

function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie')); // Hello Alice, Bob, Charlie

const numbers = [2,2,2,2]

function add(a,b,c,...numbers) {
    // console.log(a,b,c)
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
const result = add(1,2,3,4,5,6,7,8,...numbers,50)

// function add(a,b,c,...numbers) {
//     // second way
//     return [...arguments].reduce((acc, curr) => acc + curr, 0);
// }


// function add(a,b,c,...numbers) {
//     third way 
//     return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
// }

console.log(result)