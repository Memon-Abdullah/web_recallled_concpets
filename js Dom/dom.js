// Window object the Browser Object Model

console.dir(document.body.children[0])
document.body.children[0].innerHTML = "chola";

//  we will see the difference between the innerHtml and innerText 

console.dir(document.body.children[0].innerHTML ='<i>CHOLA</i>' )
console.dir(document.body.children[0].innerText)
console.dir(document.body.children[1].innerText="hello world")

