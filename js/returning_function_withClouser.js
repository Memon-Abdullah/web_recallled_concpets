// higher order function is that which take a function as parameter or return an other function sio that function will he higher order function
// example
// const a = 10;
// const b = 20;

// function parent(){
//     function child(){
//         console.log(a+b)
//     }
//     return child
// }

// here are two scopes 

// but in this case the scope will be global and script the context of execution  and scope will deleted after scope  of function

// const add = parent();
// console.dir(add);

// console.log(add)

// here are three scopes clouser script and global
// clouser is that the varible used in child of parent 

function parent(){                  // but in this it wont be like that the because there is clouser the child function has its parents variables 
const a = 10;
const b = 20;
    function child(){
        console.log(a+b)
    }
    return child
}
