let username = 'Anurag'

const user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// how to delete a property from object 
// delete user.age
// console.log(user);

// Object.seal(user) no any proporty will be added or deleted but existing property will be modified


Object.freeze(user)
// but if want to prevent modification of existing properties as well
// Object.freeze(user)


console.log('isGraduate' in user); // for checking if property exists