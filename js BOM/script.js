// location.reload() this run automatically infinite many times as our page reloads or run 

// setTimeout(()=>{
//     document.location.reload()
// },2000)  every two seconds page will be reload here why because as the page will reload then it will be call again and again
//even the setTimeout is run just for one time only  
// console.log('ljsdlfj');

// we can set the url by using location.href ='something'
// location.href = 'https://developer.mozilla.org/en-US/'

// window.history or history has multiple things as well as length, scrollRestoration, state protoType [go, forward, backward,...]

// history.length()
// history.back()
// history.forward()
// history.go(-1)
// history.go(-5)
// history.go(+5)

console.log(innerHeight) //return window's inner height in px 
console.log(innerWidth) //return window's inner height in px 
console.log(outerHeight) //return window's outer height in px 
console.log(outerWidth) //return window's outer height in px 


open() // open a new tab empty about:blank so its useless then we 

open('script.js ') // open  it in new tab

open("testing") // like a url but work as like navigation lon local host / testing 

open("https://youtube.com/") // it will open a url given in parameter in new tab 

//  you can pass the second parameter which  is name parameter 
//  window.name
open("https://youtube.com/","chola")
// now close so we can close that windows or tabs that are open using script 
// close()
// but if didn't open or searched any thing at that window or tab which was opened by our mouse click wo can close that by using script


// now resizeTo is used when conditions matched first the window is opened by open method second is that we must have to tell that we want to open resizable window
// so the third argument is about that wew want window resizable 
open("https://youtube.com/","chola",'resizable')

//  now we can use it
resizeTo(600,500)

resizeBy() // positive value so increase and negative value so decrease

moveTo(0,0) // x and y axis top left corner the window will be there but in pixels 

scrollBy(0,50) // x and y value needed

print() // function for print any page or current page or window

// the main is document 
