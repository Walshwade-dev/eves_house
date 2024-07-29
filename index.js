document.addEventListener('DOMContentLoaded', () => {
    const hamburgerEl = document.querySelector('.hamburger-menu-icon');
    const miniMenuEl = document.querySelector('.mini-menu');
    const loginModalEl = document.querySelector(".login-modal");
    const closeModalBtn = document.querySelector("#close-modal-btn");
    const emailEl = document.getElementById("email");
    const passwordEl = document.getElementById("password");
    const signInBtn = document.getElementById("sign-in-btn");
    const loginBtn = document.getElementById('login-btn');
    const lgLoginBtn = document.querySelector('.lg-login-btn');
    const loginAvatar = document.querySelector(".login-avatar");
    const loginBtnSpan = document.querySelector(".login-btn-span");

    function toggleMenu() {
        hamburgerEl.classList.toggle('open');
        miniMenuEl.classList.toggle('show');
    }

    function closeMenu() {
        hamburgerEl.classList.remove("open");
        miniMenuEl.classList.remove('show');
    }

    function showLoginModal() {
        loginModalEl.classList.remove('hidden');
        closeMenu();
    }

    function hideLoginModal() {
        loginModalEl.classList.add('hidden');
    }

    function handleLogin() {
        const emailValue = emailEl.value.trim();
        const passwordValue = passwordEl.value.trim();

        if (!emailValue || !passwordValue) {
            alert("Please enter both email and password.");
            return;
        }

        console.log(emailValue, passwordValue);

        if (loginBtnSpan) {
            loginBtnSpan.innerHTML = `
                <i class="fa-regular fa-left-to-bracket hover:text-dullCreme"></i>
                <button id="logout-btn">LogOut</button>
            `;
        }

        if (loginAvatar) {
            loginAvatar.classList.remove('hidden');
            loginAvatar.classList.add('flex');
            loginAvatar.textContent = emailValue.slice(0, 2).toUpperCase();
        }

        document.getElementById("logout-btn").addEventListener('click', handleLogout);
    }

    function handleLogout() {

        document.getElementById("logout-btn").innerHTML = `Logging out ...`;
        setTimeout(() => {
            document.getElementById("logout-btn").innerHTML = '';
            document.querySelector(".login-btn-span").innerHTML =`
                <i class="fa-regular fa-right-to-bracket hover:text-dullCreme"></i>
                <Button id="login-btn">Login</Button>
            `;
            loginAvatar.classList.add('hidden');
            loginAvatar.textContent = '';
        }, 3000);
    }

    hamburgerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (!hamburgerEl.contains(e.target) && !miniMenuEl.contains(e.target)) {
            closeMenu();
        }
    });

    miniMenuEl.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            closeMenu();
        }
        e.stopPropagation();
    });

    loginBtn.addEventListener('click', showLoginModal);
    lgLoginBtn.addEventListener('click', showLoginModal);

    signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogin();
        hideLoginModal();
        emailEl.value = "";
        passwordEl.value = "";
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !loginModalEl.classList.contains('hidden')) {
            hideLoginModal();
        }
    });

    // Ensure only one event listener for closeModalBtn
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideLoginModal);
    }
});
