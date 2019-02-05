
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const userCommentsSection = document.querySelector('.user-comments')
hamburger.addEventListener('click', e => {
    e.currentTarget.classList.toggle('is-active')

    navLinks.classList.toggle('active')
    
    if(userCommentsSection.style.zIndex >= 0){
        userCommentsSection.style.zIndex = -1;
    }else{
        userCommentsSection.style.zIndex = 0;
    }
})
