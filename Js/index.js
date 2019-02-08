
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const userCommentsSection = document.querySelector('.user-comments')
const userCount = document.getElementById('user-count');

const loginText = document.getElementById('login');

hamburger.addEventListener('click', e => {
    e.currentTarget.classList.toggle('is-active')

    navLinks.classList.toggle('active')
    
    if(userCommentsSection){
        if(userCommentsSection.style.zIndex >= 0){
            userCommentsSection.style.zIndex = -1;
        }else{
            userCommentsSection.style.zIndex = 0;
        }
    }
})


console.log(loginText)
if(loginText){
    const clients = document.querySelector('.client-container');
    loginText.addEventListener('click', e => {
        clients.classList.toggle('clients-active')
    })
}

