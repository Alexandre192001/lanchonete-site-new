let menu = document.querySelector(".bi-list")
let navBar = document.querySelector(".container-navbar")

menu.addEventListener("click", function(){
    if(this.classList.toggle("bi-x-lg")){
        this.classList.remove("bi-list")
        navBar.classList.add("hiddenMenu")
    } else if(this.classList.toggle("bi-list")){
        this.classList.remove("bi-x-lg")
        navBar.classList.remove("hiddenMenu")
    }
})


const linksMenu = document.querySelectorAll(".linkMenu")
linksMenu.forEach((item)=>{

    item.addEventListener("click",()=>{
        menu.classList.remove("bi-x-lg")
        menu.classList.add("bi-list")
        navBar.classList.remove("hiddenMenu")
    })
    
})


const dark = document.querySelector(".bi-moon-stars-fill")

dark.addEventListener("click",function(){
    let navBar = document.querySelector(".container-navbar-wrapper")
    let header = document.querySelector(".container-header-wrapper")
    let aboutme = document.querySelector(".container-sobrenos-wrapper")
    let cardapio = document.querySelector(".container-cardapio-wrapper")
    let contato = document.querySelector(".container-contato-wrapper")
    
    let titleCardapio = document.querySelector(".container-cardapio-wrapper .title-section")
    let subtitleCardaprio = document.querySelector(".container-cardapio-wrapper .subtitle-section")

    if(this.classList.toggle("bi-sun-fill")){
        this.classList.remove("bi-moon-stars-fill")
        navBar.style.backgroundColor="#000"
        header.style.backgroundColor="#000"
        aboutme.style.backgroundColor="#000"
        cardapio.style.backgroundColor="#000"
        contato.style.backgroundColor="#000"
        titleCardapio.style.color="#FFF"
        subtitleCardaprio.style.color="#FFF"

    } else if(this.classList.toggle("bi-moon-stars-fill")) {
        this.classList.remove("bi-sun-fill")
        navBar.style.backgroundColor="#E0473D"
        aboutme.style.backgroundColor="#E0473D"
        cardapio.style.backgroundColor="#FFF"
        contato.style.backgroundColor="#E0473D"
        titleCardapio.style.color="#E0473D"
        subtitleCardaprio.style.color="#E0473D"
    }
})  

let imgJesus = document.querySelector(".img-jesus")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    imgJesus.style.top = value + "rem"
})