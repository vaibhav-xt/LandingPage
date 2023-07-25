const menu = document.getElementById("menu-bar");
const cross = document.getElementById("cross-bar");
const display = document.querySelector(".NavBar");

menu.addEventListener('click', () => {
    display.classList.toggle('showcase');
    menu.style.display = "none";
    cross.style.display = "block";
})

cross.addEventListener('click', () =>{
    display.classList.toggle('showcase');
    cross.style.display = "none";
    menu.style.display = "block";
})