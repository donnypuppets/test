const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=>{
        //toggle nave
        nav.classList.toggle('nav-active');
        console.log('clicked!');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

    navSlide();
