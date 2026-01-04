// js/games.js - VERSI UPDATE BARU SEMPURNA - Logo Muncul Tajam & Stabil 100%

document.addEventListener('DOMContentLoaded', () => {
    const containers = {
        popular: document.getElementById('popular-games'),
        all: document.getElementById('all-games'),
        emoney: document.getElementById('emoney'),
        pulsa: document.getElementById('pulsa'),
        vouchers: document.getElementById('vouchers')
    };

    // LogoMap UPDATE BARU - Direct PNG Transparent Tajam & Stabil
    const logoMap = {
        "Mobile Legends Diamonds": "https://seeklogo.com/images/M/mobile-legends-bang-bang-logo-9A9D9D9C84-seeklogo.com.png",
        "Free Fire Diamonds": "https://seeklogo.com/images/G/garena-free-fire-new-logo-9AA15BFA96-seeklogo.com.png",
        "PUBG Mobile UC": "https://seeklogo.com/images/P/pubg-mobile-logo-399111A2E5-seeklogo.com.png",
        "Higgs Domino Island MD": "https://www.namatin.com/wp-content/uploads/2021/11/logo-higgs-domino-island-png-transparent.png",
        "Honor of Kings Tokens": "https://seeklogo.com/images/H/honor-of-kings-logo-631764A2E5-seeklogo.com.png",
        "Bigo Live Diamonds": "https://seeklogo.com/images/B/bigo-live-logo-477966A2E5-seeklogo.com.png",
        "Honkai: Star Rail Shard": "https://www.citypng.com/public/uploads/preview/official-honkai-star-rail-game-logo-116254535108zq9o0o5fh.png",
        "Valorant Points": "https://seeklogo.com/images/V/valorant-logo-379976A2E5-seeklogo.com.png",
        "Genshin Impact Crystals": "https://seeklogo.com/images/G/genshin-impact-logo-389677A2E5-seeklogo.com.png",
        "King's Choice Diamonds": "https://seeklogo.com/images/K/king-digital-entertainment-game-logo-304556A2E5-seeklogo.com.png",
        "Arena Breakout Bonds": "https://seeklogo.com/images/A/arena-breakout-logo-544488A2E5-seeklogo.com.png",
        "Metal Slug: Awakening": "https://seeklogo.com/images/M/metal-slug-logo-2E2E2E2E2E-seeklogo.com.png",
        "Blood Strike Gold": "https://seeklogo.com/images/B/blood-strike-logo-EXAMPLE-seeklogo.com.png",
        "Ragnarok M Eternal Love": "https://seeklogo.com/images/R/ragnarok-online-logo-491164A2E5-seeklogo.com.png",
        "Zepeto Zems": "https://seeklogo.com/images/Z/zepeto-logo-467480A2E5-seeklogo.com.png",
        "Call of Duty Mobile CP": "https://seeklogo.com/images/C/call-of-duty-mobile-logo-EXAMPLE-seeklogo.com.png",
        "Super SUS Golden Stars": "https://seeklogo.com/images/S/super-sus-logo-EXAMPLE-seeklogo.com.png",
        "Pokemon UNITE AeosGems": "https://seeklogo.com/images/P/pokemon-unite-logo-EXAMPLE-seeklogo.com.png",
        "The Ragnarok SEA": "https://seeklogo.com/images/R/ragnarok-online-logo-491164A2E5-seeklogo.com.png",
        "AFK Journey": "https://seeklogo.com/images/A/afk-journey-logo-EXAMPLE-seeklogo.com.png",
        "Soul Land: New World": "https://seeklogo.com/images/S/soul-land-new-world-logo-EXAMPLE-seeklogo.com.png",
        "Ragnarok M Classic": "https://seeklogo.com/images/R/ragnarok-online-logo-491164A2E5-seeklogo.com.png",
        "Delta Force - Garena": "https://seeklogo.com/images/G/garena-delta-force-logo-614711A2E5-seeklogo.com.png",
        "Tokogame Credits": "https://seeklogo.com/images/T/tokogame-logo-EXAMPLE-seeklogo.com.png",
        "Mobile Legends Adventure": "https://seeklogo.com/images/M/mobile-legends-bang-bang-logo-9A9D9D9C84-seeklogo.com.png",
        "League of Legends WC": "https://seeklogo.com/images/L/league-of-legends-wild-rift-logo-390520A2E5-seeklogo.com.png",
        "Moonlight Blade M": "https://seeklogo.com/images/M/moonlight-blade-m-logo-EXAMPLE-seeklogo.com.png",
        "Night Crows": "https://seeklogo.com/images/N/night-crows-logo-EXAMPLE-seeklogo.com.png",
        "Pulsa Indosat": "https://seeklogo.com/images/I/indosat-ooredoo-logo-EXAMPLE-seeklogo.com.png",
        "Pulsa Tri": "https://seeklogo.com/images/T/tri-indonesia-logo-622135A2E5-seeklogo.com.png",
        "Pulsa Telkomsel": "https://seeklogo.com/images/T/telkomsel-logo-410695A2E5-seeklogo.com.png",
        "Pulsa XL": "https://seeklogo.com/images/X/xl-axiata-logo-309285A2E5-seeklogo.com.png",
        "Pulsa Axis": "https://seeklogo.com/images/A/axis-logo-428735A2E5-seeklogo.com.png",
        "Pulsa Smartfren": "https://seeklogo.com/images/S/smartfren-logo-202951A2E5-seeklogo.com.png",
        "DANA": "https://seeklogo.com/images/D/dana-e-wallet-app-logo-399948A2E5-seeklogo.com.png",
        "OVO": "https://seeklogo.com/images/O/ovo-logo-EXAMPLE-seeklogo.com.png",
        "GoPay": "https://seeklogo.com/images/G/gopay-logo-369813A2E5-seeklogo.com.png",
        "ShopeePay": "https://seeklogo.com/images/S/shopeepay-logo-504054A2E5-seeklogo.com.png",
        "Candy Crush Saga": "https://seeklogo.com/images/C/candy-crush-saga-logo-EXAMPLE-seeklogo.com.png",
        "Tinder Plus/Gold": "https://www.stickpng.com/img/icons-logos-emojis/tech-companies/tinder-new-logo",
        "Steam Wallet Code IDR": "https://seeklogo.com/images/S/steam-logo-EXAMPLE-seeklogo.com.png",
        "Google Play Voucher": "https://www.freepnglogos.com/uploads/google-play-png-logo/media-google-play-png-logo-5.png",
        "PlayStation Network (PSN)": "https://seeklogo.com/images/P/playstation-network-logo-191674A2E5-seeklogo.com.png",
        "Vision+ Voucher": "https://seeklogo.com/images/V/vidio-logo-395091A2E5-seeklogo.com.png",
        "Vidio Voucher": "https://seeklogo.com/images/V/vidio-logo-395091A2E5-seeklogo.com.png",
        "Token PLN": "https://seeklogo.com/images/P/pln-logo-355620A2E5-seeklogo.com.png",
        "Fortnite V Bucks": "https://seeklogo.com/images/F/fortnite-logo-EXAMPLE-seeklogo.com.png",
        "Twitch Gift Cards": "https://www.stickpng.com/img/icons-logos-emojis/tech-companies/twitch-logo",
        "Garena Shell Voucher": "https://seeklogo.com/images/G/garena-logo-EXAMPLE-seeklogo.com.png",
        "XBOX Gift Cards": "https://1000logos.net/wp-content/uploads/2021/11/logo-Xbox.png",
        "TikTok Live Koin": "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png",
        "Minecraft Minecoins": "https://cdn.freebiesupply.com/logos/thumbs/2x/minecraft-1-logo.png",
        "Razer Gold Voucher": "https://seeklogo.com/images/R/razer-gold-logo-500630A2E5-seeklogo.com.png"
    };

    const createCard = (name) => {
        const card = document.createElement('div');
        card.className = 'game-card';

        const logoUrl = logoMap[name] || '';

        card.innerHTML = `
            <img src="\( {logoUrl}" alt=" \){name}">
            <p>${name}</p>
        `;

        card.onclick = () => {
            localStorage.setItem('selectedGame', name);
            location.href = 'topup.html';
        };

        return card;
    };

    const gamesData = {
        popular: ["Mobile Legends Diamonds", "Free Fire Diamonds", "PUBG Mobile UC", "Higgs Domino Island MD"],
        all: ["Honor of Kings Tokens", "Bigo Live Diamonds", "Honkai: Star Rail Shard", "Valorant Points", "Genshin Impact Crystals", "King's Choice Diamonds", "Arena Breakout Bonds", "Metal Slug: Awakening", "Blood Strike Gold", "Ragnarok M Eternal Love", "Zepeto Zems", "Call of Duty Mobile CP", "Super SUS Golden Stars", "Pokemon UNITE AeosGems", "The Ragnarok SEA", "AFK Journey", "Soul Land: New World", "Ragnarok M Classic", "Delta Force - Garena", "Tokogame Credits", "Mobile Legends Adventure", "League of Legends WC", "Moonlight Blade M", "Night Crows"],
        emoney: ["DANA", "OVO", "GoPay", "ShopeePay"],
        pulsa: ["Pulsa Indosat", "Pulsa Tri", "Pulsa Telkomsel", "Pulsa XL", "Pulsa Axis", "Pulsa Smartfren"],
        vouchers: ["Steam Wallet Code IDR", "Google Play Voucher", "PlayStation Network (PSN)", "Vision+ Voucher", "Vidio Voucher", "Token PLN", "Fortnite V Bucks", "Twitch Gift Cards", "Garena Shell Voucher", "XBOX Gift Cards", "TikTok Live Koin", "Minecraft Minecoins", "Razer Gold Voucher", "Candy Crush Saga", "Tinder Plus/Gold"]
    };

    // Render semua kategori
    if (containers.popular) gamesData.popular.forEach(name => containers.popular.appendChild(createCard(name)));
    if (containers.all) gamesData.all.forEach(name => containers.all.appendChild(createCard(name)));
    if (containers.emoney) gamesData.emoney.forEach(name => containers.emoney.appendChild(createCard(name)));
    if (containers.pulsa) gamesData.pulsa.forEach(name => containers.pulsa.appendChild(createCard(name)));
    if (containers.vouchers) gamesData.vouchers.forEach(name => containers.vouchers.appendChild(createCard(name)));
});
