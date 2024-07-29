const hamburgerEl = document.querySelector('.hamburger-menu-icon');
const miniMenuEl = document.querySelector('.mini-menu')

hamburgerEl.addEventListener('click', (e) => {
    e.stopPropagation(); 
    hamburgerEl.classList.toggle('open');
    miniMenuEl.classList.toggle('show');
});


// close menu when clicking outside of the menu
document.addEventListener('click', (e) => {
    //check if the click is outside the hamburger and mini-menu
    if(!hamburgerEl.contains(e.target) && !miniMenuEl.contains(e.target)){
        hamburgerEl.classList.remove("open");
        miniMenuEl.classList.remove('show');
    }
})

//close menu when clicking on a list item inside the mini-menu
miniMenuEl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI"){
        hamburgerEl.classList.remove("open");
        miniMenuEl.classList.remove('show');
    }
})