const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// container.appendChild(h1) it will be in the last in the container and the color will also be green because container color is green


// if want to copy the element like upper element h1 to container in the end so we have clone node 

// h1.cloneNode(true); it will return you the h1 tag with the   

// so we can clone before appendChild like copy paste here we can do like that 

// container.appendChild(h1.cloneNode(true));


//now append and when we cloneNode then it also copy all of its attributes

// container.appendChild(card) // ti will just blink that card is already in the last position in the container if you want to copy paste and wanna add them more cards
// container.appendChild(card.cloneNode(true))
// if do not pass the true keyword that it copy the card because we gave width and height but the text will not  
// now its task to add 100 cards using this concepts but using for loop 
// for(let i = 2; i<=100; i++){
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.appendChild(newCard)

// }

// we can append any element in any other element except it is not its parent element
// like we can not append container in the card because card is not the parent of container
// card.appendChild(container) // it will give you error 
//  like we can not append body in the container 

// now append methdod
for(let i = 2; i<=100; i++){
    const newCard = card.cloneNode()
    newCard.innerText = i
    container.append(newCard) // working same but there is some difference between appendChild and append

}
// the difference is that append do not return any thing it is undefined and appendChild return that appended child 
//  secdon is thast we can append also a string 
container.append("hello") // it will add hello in the end of the container
// container.appendChild("hello") // it will give you error

//  if you want to add textNode how will you do that but you have to use appendChild
const newTextNOde = document.createTextNode("hello world ") // now it is a text node not a string now we can appendChild
container.appendChild(newTextNOde) 
// third difference is that append can take multiple arguments
container.append("hello","world","how","are","you",h1) // it will add all the strings in the end of the container
container.appendChild("hello",h1) // it will return hello it will not append h1  