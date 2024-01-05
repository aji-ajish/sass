const navToggler = document.querySelector(".nav-toggler")

navToggler.addEventListener('click', () => {
    const headerMenu = document.querySelector("ul.header--menu")
    const navIcon = document.querySelectorAll('.navIcon')

    // show menu programmatically
    headerMenu.classList.toggle("show")

    navIcon.forEach(icon=>{
        icon.classList.toggle("hidden")
    })

})