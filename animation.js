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