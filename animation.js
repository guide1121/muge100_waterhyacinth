document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-why");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 } // เริ่มทำงานเมื่อ section ปรากฏ 50%
    );

    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-why");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-structure");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-benefits");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-impact");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-prevention");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-removal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-utilization");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});

// ฟังก์ชันเปิด Popup พร้อมโหลดรูปที่คลิก
function openPopup(imgElement) {
    let popup = document.getElementById("imagePopup");
    let popupImg = document.getElementById("popupImage");

    popup.style.display = "flex";  // แสดง popup
    popupImg.src = imgElement.src; // เปลี่ยนรูปเป็นรูปที่ถูกคลิก
}

// ฟังก์ชันปิด Popup
function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
}

document.querySelectorAll('.table-of-contents a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // ปรับตำแหน่งให้ไม่ชนขอบ
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const goToTopBtn = document.getElementById("goToTopBtn");

    // แสดงปุ่มเมื่อเลื่อนลง
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            goToTopBtn.classList.add("show");
        } else {
            goToTopBtn.classList.remove("show");
        }
    });

    // กดปุ่มแล้วเลื่อนกลับไปด้านบน
    goToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // ตำแหน่งที่เลื่อน
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // ความสูงทั้งหมดของหน้าเว็บ
    const progress = (scrollPosition / docHeight) * 100; // คำนวณเปอร์เซ็นต์ที่เลื่อน
    document.getElementById('progress-bar').style.width = progress + '%'; // อัพเดทความกว้างของ progress bar
});
