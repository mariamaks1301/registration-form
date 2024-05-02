const showPopupBtn = document.querySelector('.login-btn');
const hidePopupBtn = document.querySelector('.close-btn');
const blurBg = document.querySelector('.blur-bg-overlay');

const formPopup = document.querySelector('.form-popup');
const loginSignupLink = document.querySelectorAll('.bottom-link a');

const menuBtn = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.close-menu');
const navBar = document.querySelector('.navbar');


// Open Burger Menu
menuBtn.addEventListener('click', ()=> {
    navBar.classList.toggle('open-menu');
})

closeMenuBtn.addEventListener('click', ()=> menuBtn.click())








// Toggle between login popup & signup popup
loginSignupLink.forEach(link => {
    link.addEventListener('click', (e)=> {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? "add" : "remove"]("show-signup");
    })
})

// Show popup
showPopupBtn.addEventListener("click", ()=> {
    document.body.classList.toggle('show-popup');
})

// Hide popup onclick closeBtn
hidePopupBtn.addEventListener('click', ()=> showPopupBtn.click());

// Hide popup oncklick blur bg
blurBg.addEventListener('click', ()=> showPopupBtn.click());






