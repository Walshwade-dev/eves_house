const hamburgerEl = document.querySelector('.hamburger-menu-icon');
const miniMenuEl = document.querySelector('.mini-menu')
const mainEl = document.querySelector(".main");
const loginBtn = document.getElementById('login-btn');
const loginModalEL = document.querySelector(".login-modal")
const closeModalBtn  = document.querySelector("#close-modal-btn");

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
    e.stopPropagation();
})

// Login function
function login() {
    if (loginModalEL.classList.contains('hidden')) {
        loginModalEL.classList.remove('hidden');
        hamburgerEl.classList.remove("open");
        miniMenuEl.classList.remove('show');
    }

    //close modal with the close btn
    if(closeModalBtn){
        closeModalBtn.addEventListener('click', () => {
            if(loginModalEL) {
                loginModalEL.classList.add('hidden');
            }
        })
    }
}
loginBtn.addEventListener('click', () => {login()});