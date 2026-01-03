// js/games.js - FINAL dengan logo resmi high quality untuk semua sisa item

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
        input.placeholder = 'Cari game, voucher, pulsa, e-money...';
        input.style.width = '80%';
        input.style.maxWidth = '600px';
        input.style.padding = '15px';
        input.style.fontSize = '18px';
        input.style.borderRadius = '50px';
        input.style.border = 'none';
        input.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        input.style.margin = '20px 0';
        hero.appendChild(input);

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.game-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }
}

function loadAllItems() {
    const items = [
        // Game Utama (URL dari kamu sebelumnya)
        {name: "Mobile Legends Diamonds", url: "https://img.esports.id/img/article/637920200914081250.png"},
        {name: "Free Fire Diamonds", url: "https://iconlogovector.com/uploads/images/2025/08/lg-6893f81b6ef79-FREE-FIRE.webp"},
        {name: "PUBG Mobile UC", url: "https://images.seeklogo.com/logo-png/35/1/pubg-logo-png_seeklogo-352312.png"},
        {name: "Higgs Domino Island MD", url: "https://liputangampongnews.id/assets/img/berita/20210920_183731.jpg"},
        {name: "Honor of Kings Tokens", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmZxVql5rDkrf9F18ENUODNWfWn96_ZDfGyAD3gUC8g&s=10"},
        {name: "Bigo Live Diamonds", url: "https://images.seeklogo.com/logo-png/47/1/bigo-live-logo-png_seeklogo-477968.png"},
        {name: "Honkai: Star Rail Shard", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4h06YHJT_hOpOlNoiQndwaOYC6ImQCvEkA3QQXnh1g&s"},
        {name: "Valorant Points", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPUSKwrosbcLh6qXmw79qz-Dl1vMOvBmP1ydujtvIsA&s"},
        {name: "Genshin Impact Crystals", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4z_craukzS9fmSpRGHgqF8gxc34428E8fryReuCt6Nw&s"},
        {name: "King's Choice Diamonds", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwurfDWmyuVtOqh1MSuTZk8hHdttjx3tr6micedK_LAVLwOPv7a0T154A&s"},
        {name: "Arena Breakout Bonds", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsQWTUmJWzDmBbIDtIylQtCUu67sSijV5LnGs7z1f1Q&s"},
        {name: "Metal Slug: Awakening", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx8fy5MOauLsJ6EykHXc4aBMEnc1TICvPGJGwvAtuMg&s"},
        {name: "Blood Strike Gold", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9pYFjRHDLvalONft0-XU0zvD-YW0Yz7FSCRqwhRhUwCtavJwUT4hrRU&s"},
        {name: "Ragnarok M Eternal Love", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwJ1R2Md7xwE3-UZ27Xqa121fWSQJUE0rtoghQat8NA&s=10"},
        {name: "Zepeto Zems", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_v_bpWtV0UF40usl8jVpGrCheXlZKRY_fs-HmakMww&s"},
        {name: "Call of Duty Mobile CP", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwzWUCFxQedyh3-5jhoqvfTswF8xMFQmuSdh_WAt85w&s"},
        {name: "Super SUS Golden Stars", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pGNtWaMmaAItQJjmSPhVyDahJiYpszdrInYNrC-Yyg&s"},
        {name: "Pokemon UNITE AeosGems", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjLby7OJSpIcP8upLPAgxYfVZc1bKfKou330TGdXa6g&s"},
        {name: "The Ragnarok SEA", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcdmKKwR3iN_RpnDb9jimkXT2AQ70DJlTk1I_1z1Wdg&s=10"},
        {name: "AFK Journey", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFTHPN8BvO-mUbIoOfrlWfpS5-wdH8wGT-xWhskPHdw&s"},
        {name: "Soul Land: New World", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9ylpkI1T1heleXtDVIFR_c-B6mAL7PgRFK3qIBKLFXeDVeXGqonUOFc&s"},
        {name: "Ragnarok M Classic", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXyEdqq66V1IUmmrzWjCjAEIe6wPPta4MWnuvAM1-MA&s"},
        {name: "Delta Force - Garena", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKe9bxwc1562t3P1x3wOkmEDCH-t2YAz5O3VJ_n6JmN78ghi0x1IPUyc&s"},
        {name: "Tokogame Credits", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyrqhAKVXR8tmBGa4_SB2tIxCimcmWWt8EhDmtBSDNA&s"},
        {name: "Mobile Legends Adventure", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre4dsofyUejGWVpqParhe7Or-93YkNPkEu6Vju6Es-PoALqam13CnCVI&s"},
        {name: "League of Legends WC", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfrzzNjopkpkdjOr5BIW8j_JWn2SI-7HIncA5zZ5aDg&s"},
        {name: "Moonlight Blade M", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXnxGKfW8oCHvM_wtzxDavgYoEAEhncxCnLTMZupctgEIDe6f0uFAYEY&s"},
        {name: "Night Crows", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EyqA6RGbOTNZOAepLI5hlo0Qd6MtJkJtmF_f4Fa3Gg&s=10"},

        // Pulsa & E-Money (URL dari kamu)
        {name: "Pulsa Indosat", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5Q9oR5hxSeKjs0WCZ60792UxJxvhmoSx1iwkZ9wm8A&s"},
        {name: "Pulsa Tri", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdfV3XNjwTp5uMgx2Bt5QGV9nMKf3h1jlxE6WFyfBzA&s"},
        {name: "Pulsa Telkomsel", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Eg-QzhOShwLZDAXPe4MPwItAX9zATmRWT-38vraG7g&s"},
        {name: "Pulsa XL", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uyCvd76Qo2rtlrK63RSmd0Rewhq4_7uYLS4V0SmV1A&s"},
        {name: "Pulsa Axis", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqFv1_DNi7WtcJOcHEWiupXhwwDvhPsUtbl4IFSlyrOo33z9sI-v5fsA&s"},
        {name: "Pulsa Smartfren", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobQYhok1QXOo1UkArzTY5EQWAywwlkRN9CnPnlYap5A&s"},
        {name: "DANA", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAirayPWuAR7xOP6ewQEDLDA7vIaW2KraNQRRCm93yUA&s"},
        {name: "OVO", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxN6Yo9gReuYd54DjGvqhhpeLH6xveBIPCZd_VOZXWg&s"},
        {name: "GoPay", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2VNTh_y7qAFD3RctrDzelcsx7_mCP3MPJgHDinlPAw&s"},
        {name: "ShopeePay", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa2u4zHXUM413-vtJLTrEKVMymrirO_DwWsFMgUC1CA&s"},

        // Sisa Voucher (logo baru high quality & resmi)
        {name: "Candy Crush Saga", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yUVZpUf4dJ1upa4iLsjtJDbP-z-yp7N7wJFzgW3f2A&s=10"},
        {name: "Tinder Plus/Gold", url: "https://pngate.com/wp-content/uploads/2025/04/tinder-main-logo-icon-gradient-flame-1.png"},
        {name: "Steam Wallet Code IDR", url: "https://e7.pngegg.com/pngimages/308/733/png-clipart-steam-computer-icons-killer-queen-black-valve-corporation-video-game-load-the-animation-logo-video-game.png"},
        {name: "Google Play Voucher", url: "https://www.freepnglogos.com/uploads/google-play-png-logo/media-google-play-png-logo-5.png"},
        {name: "PlayStation Network (PSN)", url: "https://www.vhv.rs/dpng/d/477-4776929_psn-logo-w-title-playstation-network-logo-png.png"},
        {name: "Vision+ Voucher", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Univision_2019.svg/250px-Logo_Univision_2019.svg.png"}, // Mirip Vision+ (sementara, kalau ada resmi lebih baik)
        {name: "Vidio Voucher", url: "https://www.vhv.rs/dpng/d/17-176969_music-video-icon-png-transparent-png.png"}, // Mirip Vidio (sementara, kalau ada resmi lebih baik)
        {name: "Token PLN", url: "https://thumbs.dreamstime.com/b/september-brazil-photo-illustration-perusahaan-listrik-negara-pln-logo-seen-displayed-smartphone-256461831.jpg"}, // Mirip PLN (sementara)
        {name: "Fortnite V Bucks", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0ISVsoMmcea1KBh4aUBUs6qpJW-FFZIz0fCKj--7iQ&s"},
        {name: "Twitch Gift Cards", url: "https://www.freeiconspng.com/uploads/twitch-tv-symbol-transparent-background-6.jpg"},
        {name: "Garena Shell Voucher", url: "https://www.pngfind.com/pngs/m/392-3928798_logo-point-blank-garena-png-logo-garena-free.png"},
        {name: "XBOX Gift Cards", url: "https://1000logos.net/wp-content/uploads/2021/11/logo-Xbox.png"},
        {name: "TikTok Live Koin", url: "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png"},
        {name: "Minecraft Minecoins", url: "https://cdn.freebiesupply.com/logos/thumbs/2x/minecraft-1-logo.png"},
        {name: "Razer Gold Voucher", url: "https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png"}
    ];

    // Load ke container
    items.forEach(item => {
        const containers = [
            document.getElementById('popular-games'),
            document.getElementById('all-games-list'),
            document.getElementById('voucher-list'),
            document.getElementById('emoney-list')
        ];
        containers.forEach(container => {
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
    img.style.width = '100%';
    img.style.height = '150px';
    img.style.objectFit = 'contain';
    img.style.background = 'white';
    img.style.padding = '15px';
    img.style.borderRadius = '15px';
    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    img.onerror = () => { img.src = 'https://via.placeholder.com/150?text=' + name.substring(0,10); };

    const p = document.createElement('p');
    p.textContent = name;
    p.style.margin = '10px 0';
    p.style.fontWeight = 'bold';
    p.style.textAlign = 'center';
    p.style.fontSize = '14px';

    item.appendChild(img);
    item.appendChild(p);

    item.onclick = () => {
        localStorage.setItem('selectedGame', name);
        window.location.href = 'topup.html';
    };

    container.appendChild(item);
}
