const pageTitle = document.getElementById("page-title")
const gotoRegisterForm = document.getElementById("goto-register-form");
const gotoLoginForm = document.getElementById("goto-login-form");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const formImg = document.querySelector(".form-img");
const formWelcome = document.querySelectorAll(".form-img .welcome");
let windowWidth = window.innerWidth;

// Define event handler functions
const handleGotoRegisterForm = () => {
    pageTitle.innerHTML="Registration Form"
    if (windowWidth <= 800) {
        defaultForm()
        formToggler()
    } else {
        formImg.style.transform = "translateX(100%)";
        loginForm.style.transform = "translateX(-100%)";
        registerForm.style.transform = "translateX(-100%)";
        formToggler();
    }
    event.stopPropagation()
}
const handleGotoLoginForm = () => {
    pageTitle.innerHTML="Login Form"
    defaultForm()
    formToggler()
    event.stopPropagation()
}
// Function to initialize event listeners
const initializeEventListeners = () => {
    gotoRegisterForm.addEventListener("click", handleGotoRegisterForm);
    gotoLoginForm.addEventListener("click", handleGotoLoginForm);
}
// Initialize event listeners on page load
initializeEventListeners();
// Handle window resize events
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    // initializeEventListeners();
    if (windowWidth <= 800) {
        defaultForm()
    }
});
let defaultForm = () => {
    formImg.style.transform = "translateX(0%)";
    loginForm.style.transform = "translateX(0%)";
    registerForm.style.transform = "translateX(0%)";
}
let formToggler = () => {
    setTimeout(() => {
        if (windowWidth >= 800) {
            formWelcome.forEach((element) => {
                element.classList.toggle("none");
            });
        }

        loginForm.classList.toggle("none");
        registerForm.classList.toggle("none");
    }, 100);
}
