// Show or hide navlinks 
const colorOverlay = document.querySelector('.color-overlay')
const links = document.querySelector('.navbar-container__links')
const openNavLinksBtn = document.querySelector('.navbar-container__open-links-btn')
const closeNavLinksBtn = document.querySelector('.navbar-container__close-links-btn')

const handleEvents = (e)=> {
    if(e.currentTarget === openNavLinksBtn) {
        links.classList.add('show-navlinks')
        document.body.style.overflowY = 'hidden'
        colorOverlay.style.display = 'block'
    }else if(e.currentTarget === closeNavLinksBtn) {
        links.classList.remove('show-navlinks')
        document.body.style.overflowY = 'scroll'
        colorOverlay.style.display = 'none'
    }
}

openNavLinksBtn.addEventListener('click', handleEvents)
closeNavLinksBtn.addEventListener('click', handleEvents)