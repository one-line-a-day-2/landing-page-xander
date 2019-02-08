
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const userCommentsSection = document.querySelector('.user-comments')
const userCount = document.getElementById('user-count');

const loginClickables = document.querySelectorAll('.loginButton');

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


if(loginClickables){
    const clients = document.querySelector('.client-container');
    console.log(loginClickables)
    loginClickables.forEach((clickable) => {
        clickable.addEventListener('click', e => {
            console.log(e.target)
            e.preventDefault()
            clients.classList.toggle('clients-active')
        })
    })
}

