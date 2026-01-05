// js/main.js
// Super Lengkap & Mirip Persis dengan JavaScript di TokoGame.com
// Fungsi: Mobile menu toggle, search bar live, sticky header, smooth scroll, loading produk, preloader, back to top, dll.

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle (Hamburger Menu)
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const headerNav = document.querySelector('.header-nav');
  const headerIcons = document.querySelector('.header-icons');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      headerNav.classList.toggle('active');
      headerIcons.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });
  }

  // Tutup menu saat klik link (mobile)
  document.querySelectorAll('.header-nav a').forEach(link => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('active');
      headerIcons.classList.remove('active');
      mobileToggle.classList.remove('open');
    });
  });

  // 2. Sticky Header saat scroll (mirip TokoGame)
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // 3. Search Bar Live Suggestion (mirip fitur pencarian TokoGame)
  const searchInput = document.querySelector('.header-search input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length >= 2) {
        // Di sini nanti bisa fetch suggestion dari Firebase atau API game
        console.log('Cari:', query);
        // Contoh: tampilkan dropdown suggestion (bisa dibuat nanti)
      }
    });

    // Enter untuk search
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  }

  // 4. Back to Top Button
  const backToTop = document.createElement('div');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(to right, #ff6600, #ff8833);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255,102,0,0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    z-index: 999;
  `;
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 5. Smooth Scroll untuk anchor link
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 6. Preloader sederhana (mirip loading saat buka TokoGame)
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.innerHTML = `
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  `;
  preloader.style.cssText = `
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s;
  `;
  const spinnerStyle = `
    .spinner { width: 60px; height: 60px; position: relative; }
    .double-bounce1, .double-bounce2 {
      width: 100%; height: 100%; border-radius: 50%;
      background-color: #ff6600; opacity: 0.6;
      position: absolute; top: 0; left: 0;
      animation: bounce 2.0s infinite ease-in-out;
    }
    .double-bounce2 { animation-delay: -1.0s; }
    @keyframes bounce {
      0%, 100% { transform: scale(0.0); }
      50% { transform: scale(1.0); }
    }
  `;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = spinnerStyle;
  document.head.appendChild(styleSheet);

  document.body.appendChild(preloader);

  // Hilangkan preloader setelah load selesai
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }, 500);
  });

  // 7. Auto focus search bar saat tekan "/" (fitur pro seperti banyak situs besar)
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && e.target === document.body) {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
