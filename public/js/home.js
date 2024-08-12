document.addEventListener('DOMContentLoaded', () => {
    
    /* Desplegar Menu emergente */
    const content = document.getElementById('content');
    const contentDarkened = document.getElementById('content-darkened');
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const crossButton = document.getElementById('cross-icon');

    menuIcon.addEventListener('click', () => {

        content.classList.toggle('unfocused');
        contentDarkened.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

    
    contentDarkened.addEventListener('click', () => {
        
        if(contentDarkened.classList.contains('active')) {
            
            navMenu.classList.toggle('active');
            contentDarkened.classList.toggle('active');
            content.classList.toggle('unfocused');
        }
    })
    
    crossButton.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) {

            navMenu.classList.toggle('active');
            contentDarkened.classList.toggle('active');
            content.classList.toggle('unfocused');
        }
    })

})
    