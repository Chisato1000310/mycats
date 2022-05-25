const menu = () =>{
    
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.menu')

    const openMenu = () =>{

        menu.classList.toggle('menu--opened')

        menuButton.classList.toggle('menu-button--close')

    }
    
    menuButton.addEventListener('click',openMenu)
}

menu()