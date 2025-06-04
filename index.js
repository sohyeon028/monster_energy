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

// 로고 축소
    const header = document.querySelector('.army-header');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
    });

  // Mission 나타나기
    const missionIcons = document.querySelector('.mission-icons');
    const historyItems = document.querySelectorAll('.history-item');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        }
    });
    }, { threshold: 0.3 });

    observer.observe(missionIcons);
    historyItems.forEach(item => observer.observe(item));