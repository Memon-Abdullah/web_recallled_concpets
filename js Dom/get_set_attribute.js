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

//  styling

// const allLinks = document.querySelectorAll('a')

// const allLinks = document.querySelectorAll('a')
// console.log(allLinks)

// for (const link of allLinks) {
//     link.style.color = 'green'
// }

for (const link of allLinks) {
    // link.style.color = 'teal'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily = 'cursive'
    // link.style.fontSize = '18px'

    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    // link.className = 'green-link'
    // link.setAttribute('class', 'green-link')

    link.classList.add('green-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link')
}