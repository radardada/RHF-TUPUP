// js/script.js - VERSI UPDATE BARU - Efek Rapi & Smooth untuk Seluruh Situs

document.addEventListener('DOMContentLoaded', () => {
    console.log('script.js loaded - RHF SETORS effects ready!');

    // Smooth scroll untuk anchor link (misal menu ke section)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hover effect tambahan pada game card (lebih halus)
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.05)';
            card.style.transition = 'all 0.4s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Fade-in effect saat scroll (section muncul halus)
    const sections = document.querySelectorAll('.section-title, .game-grid');
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });

    // Placeholder animation di search bar (biar hidup)
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        const placeholders = [
            "Cari game atau voucher...",
            "Mobile Legends?",
            "Free Fire Diamonds?",
            "Top Up DANA?",
            "Pulsa Telkomsel?"
        ];
        let index = 0;
        setInterval(() => {
            index = (index + 1) % placeholders.length;
            searchInput.placeholder = placeholders[index];
        }, 3000);
    }

    // Optional: Preload logo penting biar cepat muncul
    const preloadImages = [
        "images/logo.png",
        "https://seeklogo.com/images/M/mobile-legends-bang-bang-logo-9A9D9D9C84-seeklogo.com.png",
        "https://seeklogo.com/images/G/garena-free-fire-new-logo-9AA15BFA96-seeklogo.com.png"
    ];
    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
