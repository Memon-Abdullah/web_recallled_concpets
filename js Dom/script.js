const button = document.getElementById("btn1");
button.addEventListener("click", () => {
    document.getElementById("myImage").src = "with_bg.jpg";
})

const button2 = document.getElementById("btn2");
button2.addEventListener("click", () => {
    document.getElementById("myImage").src = "without_bg.png";
});
