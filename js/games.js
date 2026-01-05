// js/games.js
// Super Lengkap: Load produk dari Firebase Realtime Database + Buat Slider Kategori Game dengan Logo High Quality Resmi
// Support infinite scroll slider, hover effect, dan click logo bisa filter produk nanti (bisa dikembangkan)

import { database } from './firebase-init.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Array logo kategori (high quality resmi/transparent PNG terbaik dari sumber terpercaya)
const categoryLogos = [
  { name: "Mobile Legends", url: "https://seeklogo.com/images/M/mobile-legends-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "Free Fire", url: "https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png" },
  { name: "PUBG Mobile", url: "https://seeklogo.com/images/P/pubg-mobile-logo-2F3D6E0E4B-seeklogo.com.png" },
  { name: "Valorant", url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg" },
  { name: "Genshin Impact", url: "https://www.freepnglogos.com/uploads/genshin-impact-logo-png/hd-transparent-logo-genshin-impact-free-download-2.png" },
  { name: "Bigo Live", url: "https://seeklogo.com/images/B/bigo-live-logo-477966B5E8-seeklogo.com.png" },
  { name: "Honkai: Star Rail", url: "https://interfaceingame.com/wp-content/uploads/honkai-star-rail/honkai-star-rail-logo.png" },
  { name: "Call of Duty Mobile", url: "https://www.pngarts.com/files/8/Call-of-Duty-Mobile-Logo-PNG-Image-Background.png" },
  { name: "Steam Wallet", url: "https://seeklogo.com/images/S/steam-logo-270306A5E7-seeklogo.com.png" },
  { name: "Google Play Voucher", url: "https://www.freepnglogos.com/uploads/google-play-png-logo/media-google-play-png-logo-5.png" },
  { name: "Pulsa Telkomsel", url: "https://seeklogo.com/images/T/telkomsel-logo-410695A5E7-seeklogo.com.png" },
  { name: "Pulsa Indosat", url: "https://seeklogo.com/images/I/indosat-ooredoo-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "Pulsa Tri", url: "https://seeklogo.com/images/T/tri-indonesia-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "Pulsa XL", url: "https://seeklogo.com/images/X/xl-axiata-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "Pulsa Axis", url: "https://seeklogo.com/images/A/axis-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "Pulsa Smartfren", url: "https://seeklogo.com/images/S/smartfren-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "DANA", url: "https://seeklogo.com/images/D/dana-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "OVO", url: "https://seeklogo.com/images/O/ovo-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "GoPay", url: "https://seeklogo.com/images/G/gopay-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "ShopeePay", url: "https://seeklogo.com/images/S/shopeepay-logo-7E6A5E6D9B-seeklogo.com.png" },
  { name: "Fortnite", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Fortnite_logo.svg" },
  { name: "TikTok", url: "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png" },
  { name: "Razer Gold", url: "https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png" },
  { name: "Minecraft", url: "https://cdn.freebiesupply.com/logos/thumbs/2x/minecraft-1-logo.png" },
  // Tambah lebih banyak sesuai list kamu (saya pilih yang paling resmi & high quality)
];

// Fungsi buat slider kategori dengan logo
function createCategorySlider() {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderDuplicate = document.querySelector('.slider-duplicate');

  if (!sliderContainer || !sliderDuplicate) return;

  categoryLogos.forEach(cat => {
    const item = document.createElement('div');
    item.className = 'slider-item';
    item.innerHTML = `
      <img src="\( {cat.url}" alt=" \){cat.name}">
      <p>${cat.name}</p>
    `;
    sliderContainer.appendChild(item);
    sliderDuplicate.appendChild(item.cloneNode(true));
  });
}

// Fungsi load produk dari Firebase
function loadProducts() {
  const productsRef = ref(database, 'products');
  onValue(productsRef, (snapshot) => {
    const products = snapshot.val() || [];
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <img src="\( {p.image}" alt=" \){p.game}">
        <div class="product-info">
          <span class="game-name">${p.game}</span>
          <h3>${p.product}</h3>
          <div class="price">${p.price}</div>
          <a href="topup.html?id=${p.id}" class="btn">Beli Sekarang</a>
        </div>
      `;
      container.appendChild(div);
    });
  });
}

// Init saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
  createCategorySlider();
  loadProducts();
});

export { loadProducts };
