// Show or hide navlinks 
const colorOverlay = document.querySelector('.color-overlay')
const links = document.querySelector('.navbar-container__links')
const openNavLinksBtn = document.querySelector('.navbar-container__open-links-btn')
const closeNavLinksBtn = document.querySelector('.navbar-container__close-links-btn')
const navLinkAnchor = [...document.querySelectorAll('.navbar-container__anchor-tag')]

const handleEvents = (e)=> {
    if(e.currentTarget === openNavLinksBtn) {
        links.classList.add('show-navlinks')
        document.body.style.overflowY = 'hidden'
        colorOverlay.style.display = 'block'
        window.scrollTo({top:0})
    }else if(e.currentTarget === closeNavLinksBtn) {
        links.classList.remove('show-navlinks')
        document.body.style.overflowY = 'scroll'
        colorOverlay.style.display = 'none'
    }
}

openNavLinksBtn.addEventListener('click', handleEvents)
closeNavLinksBtn.addEventListener('click', handleEvents)

const getPath = ()=> {
    const path = window.location.pathname
    const name = path.split('/').filter((i)=>i !== '').slice(-1).join('').replaceAll('.html', '')
    const id = document.querySelector(`#${name}`)
    const href = id.href.split('/').filter((i)=>i !== '').slice(-1).join('').replaceAll('.html', '') === name
    if(href) {
        id.classList.add('active-navlink')
    }
}

getPath()
// window.addEventListener('resize', ()=> {
//     const heroContainerHeader = document.querySelector('.hero-container__header')
//     const fontSize = window.getComputedStyle(heroContainerHeader).fontSize
//     console.log(fontSize)
// })