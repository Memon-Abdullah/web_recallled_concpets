const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

document.querySelector('[procodrr]').getAttribute('procodrr')
document.querySelector('[procodrr]')
document.querySelector('[procodrr]').getAttribute('hello')

document.querySelector('[procodrr]').getAttribute('hellow') // get null because there is not any attribute
document.querySelector('h1').getAttribute('class') // we will get all values of class attribute

document.querySelector('h1').setAttribute('title','hello world in h2 ') 
document.querySelector('h1').setAttribute('id','heading')

//  we can access and change the builtin html attribute by directly like
document.querySelector('hi').id = "something";

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'
