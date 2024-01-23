// Show or hide navlinks 

const links = document.querySelector('.navbar-container__links')
const openNavLinksBtn = document.querySelector('.navbar-container__open-links-btn')
const closeNavLinksBtn = document.querySelector('.navbar-container__close-links-btn')

const handleEvents = (e)=> {
    const classArray = [
        'navbar-container__links',
        'navbar-container__link',
        'navbar-container__anchor-tag',
    ]

    const path = e.composedPath()
    path.some((element)=> {
        if(element.classList !== undefined && element.classList.length && element.classList) {
            const elements = [...element.classList]
            // console.log(elements)
            elements.forEach((item)=> {
                if(!classArray.includes(item)){
                    console.log(item)
                    links.style.right = '-120%'
                }else {
                    console.log(item)
                }
            })
        }
        
    })
}

window.addEventListener('click', handleEvents)