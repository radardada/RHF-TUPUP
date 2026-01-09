// js/games.js - Logo stabil high-quality transparan
const gamesList = [
  { name: "Mobile Legends Diamonds", url: "https://assets.stickpng.com/images/62061920cdd94000043e3951.png", link: "topup.html?game=ml" },
  { name: "Free Fire Diamonds", url: "https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png", link: "topup.html?game=ff" },
  { name: "PUBG Mobile UC", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png", link: "topup.html?game=pubg" },
  { name: "Valorant Points", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png", link: "topup.html?game=valorant" },
  { name: "Genshin Impact Crystals", url: "https://www.freepnglogos.com/uploads/genshin-impact-logo-png/hd-transparent-logo-genshin-impact-free-download-2.png", link: "topup.html?game=genshin" },
  { name: "Bigo Live Diamonds", url: "https://logowik.com/content/uploads/images/bigo-live2708.jpg", link: "topup.html?game=bigo" },
  { name: "Honkai: Star Rail Shard", url: "https://toppng.com/uploads/preview/official-logo-of-the-honkai-star-rail-game-11728656973tfuqkczxck.png", link: "topup.html?game=hsr" },
  { name: "Call of Duty Mobile CP", url: "https://static.wikia.nocookie.net/logopedia/images/7/77/CODM_Logo_BlackYellow.png/revision/latest?cb=20200325111109", link: "topup.html?game=codm" },
  { name: "Steam Wallet Code IDR", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png", link: "topup.html?game=steam" },
  { name: "Google Play Voucher", url: "https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo.png", link: "topup.html?game=googleplay" },
  { name: "Pulsa Telkomsel", url: "https://1000logos.net/wp-content/uploads/2021/12/Telkomsel-logo.png", link: "topup.html?game=telkomsel" },
  { name: "Pulsa Indosat", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Indosat_Ooredoo_logo_%282019%29.svg/2560px-Indosat_Ooredoo_logo_%282019%29.svg.png", link: "topup.html?game=indosat" },
  { name: "Pulsa Tri", url: "https://upload.wikimedia.org/wikipedia/id/thumb/1/1e/Logo_Tri.svg/1200px-Logo_Tri.svg.png", link: "topup.html?game=tri" },
  { name: "Pulsa XL", url: "https://download.logo.wine/logo/XL_Axiata/XL_Axiata-Logo.wine.png", link: "topup.html?game=xl" },
  { name: "Pulsa Axis", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Axis_logo_2015.svg/1200px-Axis_logo_2015.svg.png", link: "topup.html?game=axis" },
  { name: "Pulsa Smartfren", url: "https://download.logo.wine/logo/Smartfren/Smartfren-Logo.wine.png", link: "topup.html?game=smartfren" },
  { name: "DANA", url: "https://logos-world.net/wp-content/uploads/2023/02/Dana-Logo.png", link: "topup.html?game=dana" },
  { name: "OVO", url: "https://assets.stickpng.com/images/620517004e162f000480edaa.png", link: "topup.html?game=ovo" },
  { name: "GoPay", url: "https://1000logos.net/wp-content/uploads/2021/05/GoPay-Logo.png", link: "topup.html?game=gopay" },
  { name: "ShopeePay", url: "https://logowik.com/content/uploads/images/shopeepay4268.jpg", link: "topup.html?game=shopeepay" },
  { name: "Fortnite V Bucks", url: "https://assets.stickpng.com/images/5ef09460f3d0af0004ad1776.png", link: "topup.html?game=fortnite" },
  { name: "TikTok Live Koin", url: "https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-how-use-tiktok-create-cool-videos-with-iphone-14.png", link: "topup.html?game=tiktok" },
  { name: "Razer Gold Voucher", url: "https://www.nicepng.com/png/full/346-3465823_razer-gold-silver.png", link: "topup.html?game=razer" },
  { name: "Minecraft Minecoins", url: "https://1000logos.net/wp-content/uploads/2018/10/Minecraft-Logo.png", link: "topup.html?game=minecraft" }
];

document.addEventListener('DOMContentLoaded', () => {
  const gamesGrid = document.getElementById('gamesGrid');
  if (!gamesGrid) return;

  gamesList.forEach(game => {
    const item = document.createElement('a');
    item.href = game.link;
    item.className = 'game-item';
    item.innerHTML = `<img src="\( {game.url}" alt=" \){game.name}" onerror="this.src='https://via.placeholder.com/150x150?text=No+Image'"><p>${game.name}</p>`;
    gamesGrid.appendChild(item);
  });
});
