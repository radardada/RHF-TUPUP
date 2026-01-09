// games.js - List game dengan logo stabil & transparan

const gamesList = [
  { name: "Mobile Legends Diamonds", url: "https://www.citypng.com/public/uploads/preview/mobile-legends-bang-bang-game-logo-icon-hd-png-11641645448znjdvio7aa.png", link: "topup.html?game=ml" },
  { name: "Free Fire Diamonds", url: "https://www.pngmart.com/files/22/Garena-Free-Fire-Logo-PNG-Clipart.png", link: "topup.html?game=ff" },
  { name: "PUBG Mobile UC", url: "https://www.citypng.com/public/uploads/preview/hd-player-unknown-pubg-battlegrounds-mobile-logo-png-116624555945y5f7zq1ji.png", link: "topup.html?game=pubg" },
  { name: "Valorant Points", url: "https://www.citypng.com/public/uploads/preview/hd-valorant-white-official-logo-with-symbol-png-11674097635mny9m0k4p0.png", link: "topup.html?game=valorant" },
  { name: "Genshin Impact Crystals", url: "https://www.citypng.com/public/uploads/preview/hd-official-genshin-impact-game-logo-png-11662505853icwn8jdyru.png", link: "topup.html?game=genshin" },
  { name: "Bigo Live Diamonds", url: "https://seeklogo.com/images/B/bigo-live-logo-477966B5E8-seeklogo.com.png", link: "topup.html?game=bigo" },
  { name: "Honkai: Star Rail Shard", url: "https://toppng.com/uploads/preview/official-logo-of-the-honkai-star-rail-game-11728656973tfuqkczxck.png", link: "topup.html?game=hsr" },
  { name: "Call of Duty Mobile CP", url: "https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-cod-m-game-official-logo-png-11662457498zq9y0b0zq9.png", link: "topup.html?game=codm" },
  { name: "Steam Wallet Code IDR", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png", link: "topup.html?game=steam" },
  { name: "Google Play Voucher", url: "https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo.png", link: "topup.html?game=googleplay" },
  { name: "Pulsa Telkomsel", url: "https://1000logos.net/wp-content/uploads/2021/12/Telkomsel-logo.png", link: "topup.html?game=telkomsel" },
  { name: "Pulsa Indosat", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Indosat_Ooredoo_logo_%282019%29.svg/1280px-Indosat_Ooredoo_logo_%282019%29.svg.png", link: "topup.html?game=indosat" },
  { name: "Pulsa Tri", url: "https://developingtelecoms.com/images/stories/Company_Logos/3-logo-600.png", link: "topup.html?game=tri" },
  { name: "Pulsa XL", url: "https://download.logo.wine/logo/XL_Axiata/XL_Axiata-Logo.wine.png", link: "topup.html?game=xl" },
  { name: "Pulsa Axis", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Axis_logo_2015.svg/1200px-Axis_logo_2015.svg.png", link: "topup.html?game=axis" },
  { name: "Pulsa Smartfren", url: "https://download.logo.wine/logo/Smartfren/Smartfren-Logo.wine.png", link: "topup.html?game=smartfren" },
  { name: "DANA", url: "https://1000logos.net/wp-content/uploads/2021/03/Dana-logo.png", link: "topup.html?game=dana" },
  { name: "OVO", url: "https://1000logos.net/wp-content/uploads/2021/05/GoPay-Logo.png", link: "topup.html?game=ovo" }, // Alternatif terbaik yang tersedia
  { name: "GoPay", url: "https://1000logos.net/wp-content/uploads/2021/05/GoPay-Logo.png", link: "topup.html?game=gopay" },
  { name: "ShopeePay", url: "https://logowik.com/content/uploads/images/shopeepay4268.jpg", link: "topup.html?game=shopeepay" },
  { name: "Fortnite V Bucks", url: "https://assets.stickpng.com/images/5ef09460f3d0af0004ad1776.png", link: "topup.html?game=fortnite" },
  { name: "TikTok Live Koin", url: "https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-how-use-tiktok-create-cool-videos-with-iphone-14.png", link: "topup.html?game=tiktok" },
  { name: "Razer Gold Voucher", url: "https://seeklogo.com/images/R/razer-gold-logo-500630-v2.png", link: "topup.html?game=razer" },
  { name: "Minecraft Minecoins", url: "https://1000logos.net/wp-content/uploads/2018/10/Minecraft-Logo.png", link: "topup.html?game=minecraft" }
];

// Render grid game
document.addEventListener('DOMContentLoaded', () => {
  const gamesGrid = document.getElementById('gamesGrid');
  if (!gamesGrid) return;

  gamesList.forEach(game => {
    const item = document.createElement('a');
    item.href = game.link;
    item.className = 'game-item';
    item.innerHTML = `
      <img src="\( {game.url}" alt=" \){game.name}" onerror="this.src='https://via.placeholder.com/200x160?text=No+Image'">
      <p>${game.name}</p>
    `;
    gamesGrid.appendChild(item);
  });
});
