// index.js
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el);
    });
});
