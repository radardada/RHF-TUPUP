// js/games.js - SUPER LENGKAP semua game, voucher, e-money, platform seperti tokogame.com + daftar kamu

document.addEventListener('DOMContentLoaded', () => {
    addSearchBar();
    loadAllItems();
});

function addSearchBar() {
    const hero = document.getElementById('hero');
    if (hero && !document.getElementById('game-search')) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'game-search';
        input.placeholder = 'Cari game, voucher, e-money, pulsa...';
        hero.appendChild(input);

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.game-item').forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
            });
        });
    }
}

function loadAllItems() {
    const items = [
        // 🔥 Game Paling Populer
        {name: "Free Fire Diamonds", url: "https://www.citypng.com/public/uploads/preview/free-fire-new-logo-battle-in-style-hd-png-11662549483l8q9y9p8or.png"},
        {name: "Mobile Legends Diamonds", url: "https://www.citypng.com/public/uploads/preview/mobile-legends-logo-icon-hd-png-11641585831b1f1k7o6qw.png"},
        {name: "PUBG Mobile UC", url: "https://www.citypng.com/public/uploads/preview/hd-player-unknown-pubg-battlegrounds-mobile-logo-11673988311zq4v9d9j8f.png"},
        {name: "Call of Duty Mobile CP", url: "https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-cod-m-game-official-logo-png-11669988311zq4v9d9j8f.png"},
        {name: "Genshin Impact Crystals", url: "https://www.citypng.com/public/uploads/preview/hd-official-genshin-impact-game-logo-png-1165335w8z8z8z8z.png"},
        {name: "Honkai Star Rail Shard", url: "https://www.citypng.com/public/uploads/preview/official-honkai-star-rail-game-logo-116584610bcw8z8z8z8z.png"},
        {name: "Clash of Clans Gems", url: "https://www.pngwing.com/en/search?q=clash+of+clans+logo"},
        {name: "Clash Royale Gems", url: "https://www.pngwing.com/en/search?q=clash+royale+logo"},
        {name: "Brawl Stars Gems", url: "https://www.pngwing.com/en/search?q=brawl+stars+logo"},
        {name: "Roblox Robux", url: "https://www.citypng.com/public/uploads/preview/hd-new-roblox-logo-icon-png-1167025w8z8z8z8z.png"},
        {name: "Stumble Guys Gems", url: "https://seeklogo.com/images/S/stumble-guys-logo.png"},
        {name: "FC Mobile (EA FC Mobile)", url: "https://seeklogo.com/images/E/ea-sports-fc-mobile-logo.png"},
        {name: "eFootball PES", url: "https://seeklogo.com/images/E/efootball-pes-logo.png"},
        {name: "Arena of Valor", url: "https://seeklogo.com/images/A/arena-of-valor-logo.png"},
        {name: "League of Legends: Wild Rift WC", url: "https://seeklogo.com/images/L/league-of-legends-wild-rift-logo.png"},

        // 🎲 Game RPG / Anime / Santai
        {name: "Tower of Fantasy Tanium", url: "https://seeklogo.com/images/T/tower-of-fantasy-logo.png"},
        {name: "Blue Archive", url: "https://seeklogo.com/images/B/blue-archive-logo.png"},
        {name: "Arknights", url: "https://seeklogo.com/images/A/arknights-logo.png"},
        {name: "Higgs Domino MD", url: "https://www.namatin.com/wp-content/uploads/2021/11/logo-higgs-domino-panda.png"},
        {name: "Lords Mobile Gems", url: "https://seeklogo.com/images/L/lords-mobile-logo.png"},
        {name: "Rise of Kingdoms Gems", url: "https://seeklogo.com/images/R/rise-of-kingdoms-logo.png"},
        {name: "Among Us Star Pack", url: "https://seeklogo.com/images/A/among-us-logo.png"},

        // 🖥️ Game PC / Platform Digital
        {name: "Steam Wallet IDR", url: "https://seeklogo.com/images/S/steam-logo.png"},
        {name: "Garena Shells", url: "https://seeklogo.com/images/G/garena-logo.png"},
        {name: "Riot Points (Valorant/LoL)", url: "https://seeklogo.com/images/V/valorant-logo.png"},
        {name: "Minecraft Minecoins", url: "https://seeklogo.com/images/M/minecraft-logo.png"},
        {name: "Xbox Gift Card", url: "https://seeklogo.com/images/X/xbox-logo.png"},
        {name: "PlayStation Store", url: "https://seeklogo.com/images/P/playstation-logo.png"},
        {name: "Google Play Balance", url: "https://seeklogo.com/images/G/google-play-logo.png"},
        {name: "Apple App Store & iTunes", url: "https://seeklogo.com/images/A/apple-app-store-logo.png"},

        // 💳 E-Money & Payment
        {name: "DANA", url: "https://seeklogo.com/images/D/dana-logo.png"},
        {name: "OVO", url: "https://seeklogo.com/images/O/ovo-logo.png"},
        {name: "GoPay", url: "https://seeklogo.com/images/G/gopay-logo.png"},
        {name: "ShopeePay", url: "https://seeklogo.com/images/S/shopeepay-logo.png"},
        {name: "LinkAja", url: "https://seeklogo.com/images/L/linkaja-logo.png"},
        {name: "AstraPay", url: "https://seeklogo.com/images/A/astrapay-logo.png"},
        {name: "i.Saku", url: "https://seeklogo.com/images/I/isaku-logo.png"},
        {name: "Sakuku (BCA)", url: "https://seeklogo.com/images/S/sakuku-logo.png"},
        {name: "Jenius Pay", url: "https://seeklogo.com/images/J/jenius-logo.png"},
        {name: "Blu by BCA", url: "https://seeklogo.com/images/B/blu-by-bca-logo.png"},
        {name: "PayPal", url: "https://seeklogo.com/images/P/paypal-logo.png"},
        {name: "WeChat Pay", url: "https://seeklogo.com/images/W/wechat-pay-logo.png"},
        {name: "Alipay", url: "https://seeklogo.com/images/A/alipay-logo.png"}
    ];

    // Load ke semua section (populer, all, voucher, emoney)
    items.forEach(item => {
        ['popular-games', 'all-games-list', 'voucher-list', 'emoney-list'].forEach(id => {
            const container = document.getElementById(id);
            if (container) createGameItem(item.name, item.url, container);
        });
    });
}

function createGameItem(name, imgUrl, container) {
    const item = document.createElement('div');
    item.className = 'game-item';

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = name;
    img.onerror = () => { img.src = 'https://via.placeholder.com/200?text=' + name; };

    const p = document.createElement('p');
    p.textContent = name;

    item.appendChild(img);
    item.appendChild(p);

    item.onclick = () => {
        localStorage.setItem('selectedGame', name);
        window.location.href = 'topup.html';
    };

    container.appendChild(item);
            }
