// js/games.js - FULL dengan URL gambar dari kamu (pasti muncul!)

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
        input.placeholder = 'Cari game atau voucher...';
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
        {name: "Night Crows", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EyqA6RGbOTNZOAepLI5hlo0Qd6MtJkJtmF_f4Fa3Gg&s=10"}
    ];

    // Load ke container
    items.forEach(item => {
        const containers = [
            document.getElementById('popular-games'),
            document.getElementById('all-games-list'),
            document.getElementById('voucher-list')
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
    img.style.height = '140px';
    img.style.objectFit = 'contain';
    img.style.background = 'white';
    img.style.padding = '10px';
    img.style.borderRadius = '10px';
    img.onerror = () => { img.src = 'https://via.placeholder.com/150?text=No+Image'; };

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
