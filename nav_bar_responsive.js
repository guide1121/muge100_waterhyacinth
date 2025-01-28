const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // เพิ่ม/ลบคลาส bx-x สำหรับการเปลี่ยนไอคอน
    navbar.classList.toggle('active'); // แสดง/ซ่อน navbar
    navbg.classList.toggle('active'); // แสดง/ซ่อน nav-bg
});