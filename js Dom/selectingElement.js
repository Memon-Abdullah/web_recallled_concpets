// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";

const allImages = document.getElementsByTagName("img"); // it will select all img tags
//  you can do this like too
// const images  = document.images; just for images

document.getElementsByTagName("img")[0]; // it will select all img tags
document.getElementsByTagName("img")[1]; // it will select all img tags

// all elements who has classname paragraphs
// document.getElementsByClassName('paragraphs').innerHtml we cant do so cause its array type
// const css_image =  document.getElementById('css-image')

// sab se best ha query selector and query selector all
document.querySelector("#css-image"); // we can pass id className and tagName return first element if it find
document.querySelector(".css-image"); // . for class # for id
document.querySelectorAll(".css-image"); // it will select all element with class name css-image and return node list and we can use the forEach method on it
// another way to select the element by attribute selector

const jsImage = document.querySelector('[alt="javascript roadmap"]');
jsImage.src = "https://sb.ecobnb.net/app/uploads/sites/3/2020/01/nature.jpg"; // we can use any css selector even we can select nested selector fro example

const li = document.querySelector("ul li");

// const themeToggle = document.getElementById('theme-toggle').;
// const body = document.body;
// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// // Load theme preference from local storage or system settings
// function loadTheme() {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark' || (storedTheme === null && prefersDarkScheme.matches)) {
//         body.classList.add('dark-mode');
//     } else {
//         body.classList.remove('dark-mode');
//     }
// }

// // Toggle theme on button click
// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'dark');
//     } else {
//         localStorage.setItem('theme', 'light');
//     }
// });

// // Initial load
// loadTheme();
