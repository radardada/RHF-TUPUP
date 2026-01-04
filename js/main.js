// js/main.js - VERSI UPDATE BARU - Search Bar Fungsi + Efek Rapi

document.addEventListener('DOMContentLoaded', () => {
    // Search Bar Functionality
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.game-card');

            cards.forEach(card => {
                const gameName = card.querySelector('p').textContent.toLowerCase();
                if (gameName.includes(query)) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                }
            });
        });
    }

    // Smooth hover effect tambahan pada card (kalau CSS kurang)
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.03)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Optional: Smooth scroll untuk anchor link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Auto focus search bar saat halaman load (biar cepat cari)
    if (searchInput) {
        setTimeout(() => {
            searchInput.focus();
        }, 500);
    }

    console.log('main.js loaded - RHF SETORS ready!');
});
