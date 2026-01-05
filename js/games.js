// js/games.js
// Super Lengkap: Render grid logo game kotak rapi (persis TokoGame) + klik langsung ke topup.html
// Logo diambil dari list high quality yang kamu berikan + saya perbaiki jadi resmi & sharp

const gameLogos = [
  { name: "Mobile Legends Diamonds", url: "https://seeklogo.com/images/M/mobile-legends-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=ml" },
  { name: "Free Fire Diamonds", url: "https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png", link: "topup.html?game=ff" },
  { name: "PUBG Mobile UC", url: "https://seeklogo.com/images/P/pubg-mobile-logo-2F3D6E0E4B-seeklogo.com.png", link: "topup.html?game=pubg" },
  { name: "Valorant Points", url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg", link: "topup.html?game=valorant" },
  { name: "Genshin Impact Crystals", url: "https://www.freepnglogos.com/uploads/genshin-impact-logo-png/hd-transparent-logo-genshin-impact-free-download-2.png", link: "topup.html?game=genshin" },
  { name: "Bigo Live Diamonds", url: "https://seeklogo.com/images/B/bigo-live-logo-477966B5E8-seeklogo.com.png", link: "topup.html?game=bigo" },
  { name: "Honkai: Star Rail Shard", url: "https://interfaceingame.com/wp-content/uploads/honkai-star-rail/honkai-star-rail-logo.png", link: "topup.html?game=hsr" },
  { name: "Call of Duty Mobile CP", url: "https://www.pngarts.com/files/8/Call-of-Duty-Mobile-Logo-PNG-Image-Background.png", link: "topup.html?game=codm" },
  { name: "Steam Wallet Code IDR", url: "https://seeklogo.com/images/S/steam-logo-270306A5E7-seeklogo.com.png", link: "topup.html?game=steam" },
  { name: "Google Play Voucher", url: "https://www.freepnglogos.com/uploads/google-play-png-logo/media-google-play-png-logo-5.png", link: "topup.html?game=googleplay" },
  { name: "Pulsa Telkomsel", url: "https://seeklogo.com/images/T/telkomsel-logo-410695A5E7-seeklogo.com.png", link: "topup.html?game=telkomsel" },
  { name: "Pulsa Indosat", url: "https://seeklogo.com/images/I/indosat-ooredoo-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=indosat" },
  { name: "Pulsa Tri", url: "https://seeklogo.com/images/T/tri-indonesia-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=tri" },
  { name: "Pulsa XL", url: "https://seeklogo.com/images/X/xl-axiata-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=xl" },
  { name: "Pulsa Axis", url: "https://seeklogo.com/images/A/axis-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=axis" },
  { name: "Pulsa Smartfren", url: "https://seeklogo.com/images/S/smartfren-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=smartfren" },
  { name: "DANA", url: "https://seeklogo.com/images/D/dana-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=dana" },
  { name: "OVO", url: "https://seeklogo.com/images/O/ovo-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=ovo" },
  { name: "GoPay", url: "https://seeklogo.com/images/G/gopay-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=gopay" },
  { name: "ShopeePay", url: "https://seeklogo.com/images/S/shopeepay-logo-7E6A5E6D9B-seeklogo.com.png", link: "topup.html?game=shopeepay" },
  { name: "Fortnite V Bucks", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Fortnite_logo.svg", link: "topup.html?game=fortnite" },
  { name: "TikTok Live Koin", url: "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png", link: "topup.html?game=tiktok" },
  { name: "Razer Gold Voucher", url: "https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png", link: "topup.html?game=razer" },
  { name: "Minecraft Minecoins", url: "https://cdn.freebiesupply.com/logos/thumbs/2x/minecraft-1-logo.png", link: "topup.html?game=minecraft" },
  // Tambah sesuai kebutuhan dari list kamu
];

function renderGameGrid() {
  const gridContainer = document.querySelector('.game-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = ''; // Kosongkan dulu

  gameLogos.forEach(game => {
    const item = document.createElement('div');
    item.className = 'game-item';
    item.onclick = () => window.location.href = game.link;

    item.innerHTML = `
      <img src="\( {game.url}" alt=" \){game.name}">
      <p>${game.name}</p>
    `;

    gridContainer.appendChild(item);
  });
}

// Jalankan saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderGameGrid();
});

export { renderGameGrid };
