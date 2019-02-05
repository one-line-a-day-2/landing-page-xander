
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
hamburger.addEventListener('click', e => {
    e.currentTarget.classList.toggle('is-active')

    navLinks.classList.toggle('active')
    navLinks.style.zIndex = 9;
})
