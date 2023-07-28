// aos initialisation
AOS.init({
    offset: 100,
    delay: 100,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})

// sticky navbar
const navbar = document.querySelector("nav")

window.addEventListener("scroll", ()=> {
    navbar.classList.toggle("active", scrollY > 200)
    if(scrollY > 0) {
        closeMobileNav()
        deactivateSearch()
    }
})

// nav menu mobile and search
const hamBtn = document.querySelector(".menu-btn")
const searchBtn = document.querySelector(".search-btn")
const navList = document.querySelector("nav .nav-list")
const searchForm = document.querySelector(".nav-wrapper .search-wrapper")

hamBtn.addEventListener("click", openMobileNav)
searchBtn.addEventListener("click", activateSearch)

function openMobileNav() {
    navList.classList.toggle("active")
    deactivateSearch()
}
function activateSearch() {
    searchForm.classList.toggle("active")
    closeMobileNav()
}
function closeMobileNav() {
    navList.classList.remove("active")
}
function deactivateSearch() {
    searchForm.classList.remove("active")
}

