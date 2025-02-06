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