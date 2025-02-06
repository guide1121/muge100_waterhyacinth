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


window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    let logo = document.getElementById("logo");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        logo.src = "images/logo-black.png"; // เปลี่ยนเป็นโลโก้สีดำ
    } else {
        header.classList.remove("scrolled");
        logo.src = "images/logo-white.png"; // กลับเป็นโลโก้สีขาว
    }
});