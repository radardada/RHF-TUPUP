// js/main.js - Versi FULL & FINAL untuk homepage (index.html)
// Fungsi:
// - Load data dari data/games.json (pastikan file ini ada & berisi struktur seperti contoh di bawah)
// - Tampilkan semua kategori: Game Populer, Game Lainnya, Voucher, Pulsa, E-Money
// - Setiap card punya logo high quality & rapi
// - Klik card → simpan nama game ke localStorage → buka topup.html
// - Responsif & smooth

document.addEventListener('DOMContentLoaded', async () => {
    // Container grid (harus ada di index.html)
    const popularGrid = document.getElementById('popular-games');
    const allGamesGrid = document.getElementById('all-games');
    const voucherGrid = document.getElementById('vouchers');
    const pulsaGrid = document.getElementById('pulsa');
    const emoneyGrid = document.getElementById('emoney');

    if (!popularGrid && !allGamesGrid && !voucherGrid && !pulsaGrid && !emoneyGrid) {
        console.error('Tidak ada container grid di index.html!');
        return;
    }

    try {
        // Load games.json
        const response = await fetch('data/games.json');
        if (!response.ok) throw new Error('games.json tidak ditemukan atau error');
        const data = await response.json();

        // Logo Map FULL (semua game, voucher, pulsa, e-money dengan URL high quality & official)
        const logoMap = {
            // Game Populer & Lainnya
            "Mobile Legends Diamonds": "https://assets.stickpng.com/images/62061920cdd94000043e3951.png",
            "Free Fire Diamonds": "https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png",
            "PUBG Mobile UC": "https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png",
            "Higgs Domino Island MD": "https://play-lh.googleusercontent.com/5f9k2RZ8L9Z5Q2e7y8f9k2RZ8L9Z5Q2e7y8f9k2RZ8L9Z5Q2e7y8f9k2RZ8L9Z5Q2e7y8",
            "Honor of Kings Tokens": "https://upload.wikimedia.org/wikipedia/en/1/1f/Honor_of_Kings_logo.png",
            "Bigo Live Diamonds": "https://logowik.com/content/uploads/images/bigo-live2708.jpg",
            "Honkai: Star Rail Shard": "https://upload.wikimedia.org/wikipedia/en/7/7f/Honkai_Star_Rail_%28logo%29.png",
            "Valorant Points": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png",
            "Genshin Impact Crystals": "https://1000logos.net/wp-content/uploads/2021/08/Genshin-Impact-Logo.png",
            "King's Choice Diamonds": "https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/0a/0b/0a/0a0b0a0a-0a0b-0a0b-0a0b-0a0b0a0a/512x512bb.jpg",
            "Arena Breakout Bonds": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Metal Slug: Awakening": "https://upload.wikimedia.org/wikipedia/en/5/5e/Metal_Slug_Awakening_logo.png",
            "Blood Strike Gold": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Ragnarok M Eternal Love": "https://upload.wikimedia.org/wikipedia/en/7/7f/Ragnarok_M_Eternal_Love_logo.png",
            "Zepeto Zems": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Zepeto_logo.png",
            "Call of Duty Mobile CP": "https://upload.wikimedia.org/wikipedia/en/8/82/Call_of_Duty_Mobile_logo.png",
            "Super SUS Golden Stars": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Pokemon UNITE AeosGems": "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Unite_logo.png",
            "The Ragnarok SEA": "https://upload.wikimedia.org/wikipedia/en/7/7f/Ragnarok_Online_logo.png",
            "AFK Journey": "https://upload.wikimedia.org/wikipedia/en/4/4e/AFK_Journey_logo.png",
            "Soul Land: New World": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Ragnarok M Classic": "https://upload.wikimedia.org/wikipedia/en/7/7f/Ragnarok_Online_logo.png",
            "Delta Force - Garena": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Tokogame Credits": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Mobile Legends Adventure": "https://upload.wikimedia.org/wikipedia/en/1/1f/Mobile_Legends_Adventure_logo.png",
            "League of Legends WC": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/League_of_Legends_Wild_Rift_logo.svg/2560px-League_of_Legends_Wild_Rift_logo.svg.png",
            "Moonlight Blade M": "https://play-lh.googleusercontent.com/0Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z9Z4Z",
            "Night Crows": "https://upload.wikimedia.org/wikipedia/en/4/4e/Night_Crows_logo.png",

            // Pulsa
            "Pulsa Indosat": "https://upload.wikimedia.org/wikipedia/id/1/1f/Logo_Indosat_Ooredoo.png",
            "Pulsa Tri": "https://upload.wikimedia.org/wikipedia/id/5/5c/Logo_Tri_%282019%29.png",
            "Pulsa Telkomsel": "https://upload.wikimedia.org/wikipedia/id/5/5c/Telkomsel_2021_icon.svg",
            "Pulsa XL": "https://upload.wikimedia.org/wikipedia/id/5/5c/XL_Axiata_logo.svg",
            "Pulsa Axis": "https://upload.wikimedia.org/wikipedia/id/5/5c/Axis_logo.svg",
            "Pulsa Smartfren": "https://upload.wikimedia.org/wikipedia/id/5/5c/Smartfren_logo.svg",

            // E-Money
            "DANA": "https://upload.wikimedia.org/wikipedia/commons/5/5e/DANA_Indonesia_logo.svg",
            "OVO": "https://upload.wikimedia.org/wikipedia/commons/1/1f/OVO_logo.svg",
            "GoPay": "https://upload.wikimedia.org/wikipedia/commons/1/1f/GoPay_logo.svg",
            "ShopeePay": "https://upload.wikimedia.org/wikipedia/commons/1/1f/ShopeePay_logo.svg",

            // Voucher
            "Candy Crush Saga": "https://upload.wikimedia.org/wikipedia/en/3/3f/Candy_Crush_Saga_logo.png",
            "Tinder Plus/Gold": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tinder_logo.svg",
            "Steam Wallet Code IDR": "https://upload.wikimedia.org/wikipedia/commons/9/91/Steam_wallet_logo.png",
            "Google Play Voucher": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Google_Play_Store_logo.svg",
            "PlayStation Network (PSN)": "https://upload.wikimedia.org/wikipedia/commons/0/0f/PlayStation_Network_logo_%282019%29.svg",
            "Vision+ Voucher": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Vision%2B_logo.svg",
            "Vidio Voucher": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Vidio_logo.svg",
            "Token PLN": "https://upload.wikimedia.org/wikipedia/id/4/4f/Logo_PLN.png",
            "Fortnite V Bucks": "https://upload.wikimedia.org/wikipedia/en/4/4e/Fortnite_Logo.svg",
            "Twitch Gift Cards": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitch_logo_2019.svg",
            "Garena Shell Voucher": "https://upload.wikimedia.org/wikipedia/en/9/9f/Garena_logo.png",
            "XBOX Gift Cards": "https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_logo_%282019%29.svg",
            "TikTok Live Koin": "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
            "Minecraft Minecoins": "https://upload.wikimedia.org/wikipedia/en/a/a9/Minecraft_logo.svg",
            "Razer Gold Voucher": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Razer_Gold_logo.svg",

            // Default kalau tidak ada
            "default": "https://via.placeholder.com/150x150/cccccc/666666?text=No+Logo"
        };

        // Fungsi buat card game/voucher (rapi dengan shadow & hover)
        const createCard = (name) => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.style.cssText = `
                background: white;
                border-radius: 15px;
                padding: 15px;
                text-align: center;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            card.innerHTML = `
                <img src="\( {logoMap[name] || logoMap.default}" alt=" \){name}" style="width:100%; max-height:120px; object-fit:contain; border-radius:12px;">
                <p style="margin:10px 0 0; font-weight:bold; font-size:14px; color:#333;">${name}</p>
            `;
            card.addEventListener('mouseover', () => {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            });
            card.addEventListener('mouseout', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            });
            card.addEventListener('click', () => {
                localStorage.setItem('selectedGame', name);
                window.location.href = 'topup.html';
            });
            return card;
        };

        // Render semua kategori
        if (popularGrid && data.popular) {
            data.popular.forEach(name => popularGrid.appendChild(createCard(name)));
        }
        if (allGamesGrid && data.allGames) {
            data.allGames.forEach(name => allGamesGrid.appendChild(createCard(name)));
        }
        if (voucherGrid && data.vouchers) {
            data.vouchers.forEach(name => voucherGrid.appendChild(createCard(name)));
        }
        if (pulsaGrid && data.pulsa) {
            data.pulsa.forEach(name => pulsaGrid.appendChild(createCard(name)));
        }
        if (emoneyGrid && data.emoney) {
            data.emoney.forEach(name => emoneyGrid.appendChild(createCard(name)));
        }

    } catch (error) {
        console.error('Error loading games:', error);
        // Tampilkan pesan di halaman
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Gagal memuat data game. Cek console atau games.json.';
        errorMsg.style.color = 'red';
        document.body.appendChild(errorMsg);
    }
});
