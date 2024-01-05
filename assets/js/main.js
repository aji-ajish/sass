const navToggler = document.querySelector(".nav-toggler")

navToggler.addEventListener('click', () => {
    const headerMenu = document.querySelector("ul.header--menu")
    const navIcon = document.querySelectorAll('.navIcon')

    // show menu programmatically
    headerMenu.classList.toggle("show")

    navIcon.forEach(icon => {
        icon.classList.toggle("hidden")
    })

})

function navbarFixed() {
    const header_dom = document.querySelector('.header')
    const nav_offset_top = header_dom.clientHeight + 50;

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY || document.documentElement.scrollTop
        if (scroll >= nav_offset_top) {
            header_dom.classList.add('navbar-fixed')
        } else {
            header_dom.classList.remove('navbar-fixed')
        }
    })
}


function setMenuActive() {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll('.header--menu__item>a')

    window.addEventListener("scroll", () => {
        let current = ""

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id')
            }
        })

        navLinks.forEach((li) => {
            if (current == li.getAttribute("href").split("#")[1]) {
                li.classList.add('active')
            }else{
                li.classList.remove('active')
            }
        })
    })
}

navbarFixed()
setMenuActive()