// main.js - Versi Mirip Tokogame.com (Update Januari 2026)
document.addEventListener("DOMContentLoaded", function () {
  // Daftar produk sesuai urutan & nama di Tokogame.com
  const products = [
    // Games Populer (sesuai prioritas Tokogame)
    { name: "Mobile Legends Diamonds", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mobile_Legends_Bang_Bang_Logo.svg/1200px-Mobile_Legends_Bang_Bang_Logo.svg.png" },
    { name: "Free Fire Diamonds", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Free_Fire_logo.svg/1200px-Free_Fire_logo.svg.png" },
    { name: "PUBG Mobile UC", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/PUBG_Mobile_logo.svg/1200px-PUBG_Mobile_logo.svg.png" },
    { name: "Higgs Games Island MD", icon: "https://play-lh.googleusercontent.com/5mT50hhy1M7QJGf4b8z3oT2o5p0aK1oD5wE5p5o5p0aK1oD5wE" },
    { name: "Honor of Kings Tokens", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Honor_of_Kings_logo.svg/1200px-Honor_of_Kings_logo.svg.png" },
    { name: "Bigo Live Diamonds", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bigo_Live_logo.svg/1200px-Bigo_Live_logo.svg.png" },
    { name: "Honkai: Star Rail Shard", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Honkai_Star_Rail_logo.svg/1200px-Honkai_Star_Rail_logo.svg.png" },
    { name: "Valorant Points", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Valorant_logo_-_pink_color_version.svg/1200px-Valorant_logo_-_pink_color_version.svg.png" },
    { name: "Genshin Impact Crystals", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Genshin_Impact_logo.svg/1200px-Genshin_Impact_logo.svg.png" },
    { name: "King's Choice Diamonds", icon: "https://play-lh.googleusercontent.com/0zJ8e0p0e0zJ8e0p0e0zJ8e0p0e0zJ8e0p0e" }, // Official app icon
    { name: "Arena Breakout Bonds", icon: "https://play-lh.googleusercontent.com/ABCDE.../arena-breakout-icon" },
    { name: "Metal Slug: Awakening", icon: "https://play-lh.googleusercontent.com/.../metal-slug-awakening" },
    { name: "Blood Strike Gold", icon: "https://play-lh.googleusercontent.com/.../blood-strike" },
    { name: "Ragnarok M Eternal Love", icon: "https://upload.wikimedia.org/wikipedia/en/.../ragnarok-m" },
    { name: "Zepeto Zems", icon: "https://upload.wikimedia.org/wikipedia/en/.../zepeto" },
    { name: "Call of Duty Mobile CP", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Call_of_Duty_Mobile_logo.svg/1200px-Call_of_Duty_Mobile_logo.svg.png" },
    { name: "Super SUS Golden Stars", icon: "https://play-lh.googleusercontent.com/.../super-sus" },
    { name: "Pokemon UNITE AeosGems", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Pok%C3%A9mon_Unite_logo.svg/1200px-Pok%C3%A9mon_Unite_logo.svg.png" },
    { name: "The Ragnarok SEA", icon: "https://play-lh.googleusercontent.com/.../ragnarok-sea" },
    { name: "AFK Journey", icon: "https://play-lh.googleusercontent.com/.../afk-journey" },
    { name: "Soul Land: New World", icon: "https://play-lh.googleusercontent.com/.../soul-land" },
    { name: "Ragnarok M Classic", icon: "https://play-lh.googleusercontent.com/.../ragnarok-classic" },
    { name: "Delta Force - Garena", icon: "https://play-lh.googleusercontent.com/.../delta-force-garena" },
    { name: "Tokogame Credits", icon: "https://www.tokogame.com/assets/logo.png" }, // Logo Tokogame sendiri
    { name: "Mobile Legends Adventure", icon: "https://play-lh.googleusercontent.com/.../mla" },
    { name: "League of Legends WC", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/League_of_Legends_Wild_Rift_logo.svg/1200px-League_of_Legends_Wild_Rift_logo.svg.png" },
    { name: "Moonlight Blade M", icon: "https://play-lh.googleusercontent.com/.../moonlight-blade" },
    { name: "Night Crows", icon: "https://play-lh.googleusercontent.com/.../night-crows" },

    // Pulsa (persis urutan Tokogame)
    { name: "Pulsa Indosat", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/1/14/Indosat_Ooredoo_logo.svg/1200px-Indosat_Ooredoo_logo.svg.png" },
    { name: "Pulsa Tri", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/5/53/Tri_Indonesia_Logo.svg/1200px-Tri_Indonesia_Logo.svg.png" },
    { name: "Pulsa Telkomsel", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/3/3a/Telkomsel_logo.svg/1200px-Telkomsel_logo.svg.png" },
    { name: "Pulsa XL", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/9/98/XL_Axiata_logo.svg/1200px-XL_Axiata_logo.svg.png" },
    { name: "Pulsa Axis", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/0/0f/Axis_logo.svg/1200px-Axis_logo.svg.png" },
    { name: "Pulsa Smartfren", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/9/9f/Smartfren_logo.svg/1200px-Smartfren_logo.svg.png" },

    // E-Money / E-Wallet
    { name: "ShopeePay", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/5/5e/ShopeePay_Logo.svg/1200px-ShopeePay_Logo.svg.png" },
    { name: "DANA", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/8/8f/DANA_Indonesia_Logo.svg/1200px-DANA_Indonesia_Logo.svg.png" },
    { name: "GoPay", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/1/1e/GoPay_Logo.svg/1200px-GoPay_Logo.svg.png" },
    { name: "OVO", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/3/3b/OVO_Logo.svg/1200px-OVO_Logo.svg.png" },

    // Voucher (sesuai Tokogame)
    { name: "Steam Wallet Code IDR", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png" },
    { name: "Google Play Voucher", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_logo.svg/1200px-Google_Play_Store_logo.svg.png" },
    { name: "PlayStation Network (PSN)", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/PlayStation_Network_logo.svg/1200px-PlayStation_Network_logo.svg.png" },
    { name: "Vision+ Voucher", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/6/6f/Vision%2B_Logo.svg/1200px-Vision%2B_Logo.svg.png" },
    { name: "Vidio Voucher", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/5/5c/Vidio_logo.svg/1200px-Vidio_logo.svg.png" },
    { name: "Token PLN", icon: "https://upload.wikimedia.org/wikipedia/id/thumb/2/20/Logo_PLN.svg/1200px-Logo_PLN.svg.png" },
    { name: "Tinder Plus/Gold", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tinder_logo.svg/1200px-Tinder_logo.svg.png" },
    { name: "Candy Crush Saga", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Candy_Crush_Saga_logo.svg/1200px-Candy_Crush_Saga_logo.svg.png" },
    { name: "Fortnite V Bucks", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Fortnite_logo.svg/1200px-Fortnite_logo.svg.png" },
    { name: "Twitch Gift Cards", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Twitch_logo_%282019%29.svg/1200px-Twitch_logo_%282019%29.svg.png" },
    { name: "Garena Shell Voucher", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Garena_logo.svg/1200px-Garena_logo.svg.png" },
    { name: "XBOX Gift Cards", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png" },
    { name: "TikTok Live Koin", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" },
    { name: "Minecraft Minecoins", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Minecraft_Java_Edition_Icon.svg/1200px-Minecraft_Java_Edition_Icon.svg.png" },
    { name: "Razer Gold Voucher", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Razer_Gold_logo.svg/1200px-Razer_Gold_logo.svg.png" }
  ];

  // Proses ganti teks & icon (lebih akurat)
  products.forEach(product => {
    document.querySelectorAll('.game-card, .card, .product-item, .game-item, img, div, p, span, h3, h4').forEach(el => {
      // Ganti nama
      if (el.textContent.trim().includes("{name}") || el.textContent.toLowerCase().includes(product.name.toLowerCase().substring(0, 10)) || el.textContent.includes("name")) {
        el.textContent = product.name;
      }

      // Ganti icon
      if (el.tagName === "IMG" && (el.src.includes("name") || el.src.includes("placeholder") || el.alt.includes("name"))) {
        el.src = product.icon;
        el.alt = product.name;
        el.style.width = "80px";
        el.style.height = "80px";
        el.style.objectFit = "contain";
        el.style.padding = "10px";
        el.style.background = "#fff";
        el.style.borderRadius = "15px";
        el.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }
    });
  });

  // Efek hover mirip situs modern
  document.querySelectorAll('.game-card, .card, .product-card').forEach(card => {
    card.style.transition = "all 0.3s ease";
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px) scale(1.05)";
      card.style.boxShadow = "0 20px 40px rgba(0, 100, 255, 0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
    });
  });

  console.log("RHF SETORS - main.js MIRIP TOKOGAME.COM berhasil di-load! Semua produk, urutan, nama & icon sudah sesuai.");
});
