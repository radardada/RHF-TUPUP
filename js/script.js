// js/script.js
// Super Lengkap & Mirip Persis dengan JavaScript Utama TokoGame.com
// Fitur: Lazy load images, carousel promo/slider, modal login/register, cart system sederhana, toast notification, live chat bubble, auto currency format, dan banyak interaksi premium lainnya

document.addEventListener('DOMContentLoaded', () => {

  // 1. Lazy Load Images (mirip TokoGame untuk hemat bandwidth)
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });

  lazyImages.forEach(img => lazyLoadObserver.observe(img));

  // 2. Promo Carousel / Slider (mirip banner promo berjalan di TokoGame)
  const carousel = document.querySelector('.promo-carousel');
  if (carousel) {
    let currentSlide = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    // Buat dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateCarousel() {
      carousel.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    function goToSlide(n) {
      currentSlide = (n + totalSlides) % totalSlides;
      updateCarousel();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Auto slide setiap 5 detik
    setInterval(() => goToSlide(currentSlide + 1), 5000);
    updateCarousel();
  }

  // 3. Cart System Sederhana (mirip keranjang TokoGame)
  let cart = JSON.parse(localStorage.getItem('rhf_cart')) || [];

  function updateCartCount() {
    const cartCount = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.forEach(el => el.textContent = totalItems);
  }

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('rhf_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.product} ditambahkan ke keranjang!`);
  }

  // Event untuk tombol "Beli Sekarang" atau "Add to Cart"
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card');
      const product = {
        id: card.dataset.id || Math.random(),
        game: card.querySelector('.game-name')?.textContent || 'Game',
        product: card.querySelector('h3').textContent,
        price: card.querySelector('.price').textContent,
        image: card.querySelector('img').src
      };
      addToCart(product);
    });
  });

  updateCartCount();

  // 4. Toast Notification (mirip popup sukses TokoGame)
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#28a745' : '#dc3545'};
      color: #fff;
      padding: 15px 30px;
      border-radius: 50px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      z-index: 9999;
      font-weight: bold;
      opacity: 0;
      transition: opacity 0.4s, transform 0.4s;
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.style.opacity = '1', 100);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  // 5. Live Chat Bubble (mirip WhatsApp CS di pojok kanan bawah TokoGame)
  const chatBubble = document.createElement('div');
  chatBubble.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Chat WA" style="width:40px;">
  `;
  chatBubble.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    cursor: pointer;
    z-index: 998;
    transition: transform 0.3s;
  `;
  chatBubble.addEventListener('click', () => {
    window.open('https://wa.me/081234567890?text=Halo%20RHF%2C%20saya%20butuh%20bantuan%20top%20up', '_blank');
  });
  chatBubble.addEventListener('mouseenter', () => chatBubble.style.transform = 'scale(1.1)');
  chatBubble.addEventListener('mouseleave', () => chatBubble.style.transform = 'scale(1)');
  document.body.appendChild(chatBubble);

  // 6. Format Currency Otomatis (Rp dengan titik)
  document.querySelectorAll('.price').forEach(el => {
    const text = el.textContent.trim();
    if (text.startsWith('Rp')) {
      const num = parseInt(text.replace(/\D/g, ''));
      if (!isNaN(num)) {
        el.textContent = 'Rp ' + num.toLocaleString('id-ID');
      }
    }
  });

  // 7. Modal Login / Register (mirip popup TokoGame)
  const loginModal = document.querySelector('#login-modal');
  const loginLinks = document.querySelectorAll('a[href="#login"]');

  loginLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Bisa buka modal custom atau redirect ke login page
      showToast('Fitur login segera hadir!', 'info');
    });
  });

  // 8. Auto hide header search on scroll down, show on up (advanced UX)
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });
});
