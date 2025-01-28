const header = document.querySelector('.header');

const scrollThreshold = 10;
console.log(scrollThreshold);
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
        navbar.classList.add('scrolled');
        navbg.classList.add('scrolled');

    } else {
        header.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
        navbg.classList.remove('scrolled');
        
    }
});
