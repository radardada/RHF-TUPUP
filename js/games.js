// js/games.js - FINAL FIX LOGO MUNcul DI HOMEPAGE

document.addEventListener('DOMContentLoaded', () => {
    const containers = {
        popular: document.getElementById('popular-games'),
        all: document.getElementById('all-games'),
        emoney: document.getElementById('emoney'),
        pulsa: document.getElementById('pulsa'),
        vouchers: document.getElementById('vouchers')
    };

    const logoMap = {
        "Mobile Legends Diamonds": "https://img.esports.id/img/article/637920200914081250.png",
        "Free Fire Diamonds": "https://iconlogovector.com/uploads/images/2025/08/lg-6893f81b6ef79-FREE-FIRE.webp",
        "PUBG Mobile UC": "https://images.seeklogo.com/logo-png/35/1/pubg-logo-png_seeklogo-352312.png",
        "Higgs Domino Island MD": "https://liputangampongnews.id/assets/img/berita/20210920_183731.jpg",
        "Honor of Kings Tokens": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmZxVql5rDkrf9F18ENUODNWfWn96_ZDfGyAD3gUC8g&s=10",
        "Bigo Live Diamonds": "https://images.seeklogo.com/logo-png/47/1/bigo-live-logo-png_seeklogo-477968.png",
        "Honkai: Star Rail Shard": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4h06YHJT_hOpOlNoiQndwaOYC6ImQCvEkA3QQXnh1g&s",
        "Valorant Points": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPUSKwrosbcLh6qXmw79qz-Dl1vMOvBmP1ydujtvIsA&s",
        "Genshin Impact Crystals": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4z_craukzS9fmSpRGHgqF8gxc34428E8fryReuCt6Nw&s",
        "King's Choice Diamonds": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwurfDWmyuVtOqh1MSuTZk8hHdttjx3tr6micedK_LAVLwOPv7a0T154A&s",
        "Arena Breakout Bonds": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsQWTUmJWzDmBbIDtIylQtCUu67sSijV5LnGs7z1f1Q&s",
        "Metal Slug: Awakening": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx8fy5MOauLsJ6EykHXc4aBMEnc1TICvPGJGwvAtuMg&s",
        "Blood Strike Gold": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9pYFjRHDLvalONft0-XU0zvD-YW0Yz7FSCRqwhRhUwCtavJwUT4hrRU&s",
        "Ragnarok M Eternal Love": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwJ1R2Md7xwE3-UZ27Xqa121fWSQJUE0rtoghQat8NA&s=10",
        "Zepeto Zems": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_v_bpWtV0UF40usl8jVpGrCheXlZKRY_fs-HmakMww&s",
        "Call of Duty Mobile CP": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwzWUCFxQedyh3-5jhoqvfTswF8xMFQmuSdh_WAt85w&s",
        "Super SUS Golden Stars": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pGNtWaMmaAItQJjmSPhVyDahJiYpszdrInYNrC-Yyg&s",
        "Pokemon UNITE AeosGems": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjLby7OJSpIcP8upLPAgxYfVZc1bKfKou330TGdXa6g&s",
        "The Ragnarok SEA": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcdmKKwR3iN_RpnDb9jimkXT2AQ70DJlTk1I_1z1Wdg&s=10",
        "AFK Journey": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFTHPN8BvO-mUbIoOfrlWfpS5-wdH8wGT-xWhskPHdw&s",
        "Soul Land: New World": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9ylpkI1T1heleXtDVIFR_c-B6mAL7PgRFK3qIBKLFXeDVeXGqonUOFc&s",
        "Ragnarok M Classic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXyEdqq66V1IUmmrzWjCjAEIe6wPPta4MWnuvAM1-MA&s",
        "Delta Force - Garena": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKe9bxwc1562t3P1x3wOkmEDCH-t2YAz5O3VJ_n6JmN78ghi0x1IPUyc&s",
        "Tokogame Credits": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyrqhAKVXR8tmBGa4_SB2tIxCimcmWWt8EhDmtBSDNA&s",
        "Mobile Legends Adventure": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre4dsofyUejGWVpqParhe7Or-93YkNPkEu6Vju6Es-PoALqam13CnCVI&s",
        "League of Legends WC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfrzzNjopkpkdjOr5BIW8j_JWn2SI-7HIncA5zZ5aDg&s",
        "Moonlight Blade M": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXnxGKfW8oCHvM_wtzxDavgYoEAEhncxCnLTMZupctgEIDe6f0uFAYEY&s",
        "Night Crows": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EyqA6RGbOTNZOAepLI5hlo0Qd6MtJkJtmF_f4Fa3Gg&s=10",
        "Pulsa Indosat": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5Q9oR5hxSeKjs0WCZ60792UxJxvhmoSx1iwkZ9wm8A&s",
        "Pulsa Tri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdfV3XNjwTp5uMgx2Bt5QGV9nMKf3h1jlxE6WFyfBzA&s",
        "Pulsa Telkomsel": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Eg-QzhOShwLZDAXPe4MPwItAX9zATmRWT-38vraG7g&s",
        "Pulsa XL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uyCvd76Qo2rtlrK63RSmd0Rewhq4_7uYLS4V0SmV1A&s",
        "Pulsa Axis": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqFv1_DNi7WtcJOcHEWiupXhwwDvhPsUtbl4IFSlyrOo33z9sI-v5fsA&s",
        "Pulsa Smartfren": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobQYhok1QXOo1UkArzTY5EQWAywwlkRN9CnPnlYap5A&s",
        "DANA": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAirayPWuAR7xOP6ewQEDLDA7vIaW2KraNQRRCm93yUA&s",
        "OVO": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxN6Yo9gReuYd54DjGvqhhpeLH6xveBIPCZd_VOZXWg&s",
        "GoPay": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2VNTh_y7qAFD3RctrDzelcsx7_mCP3MPJgHDinlPAw&s",
        "ShopeePay": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa2u4zHXUM413-vtJLTrEKVMymrirO_DwWsFMgUC1CA&s",
        "Candy Crush Saga": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yUVZpUf4dJ1upa4iLsjtJDbP-z-yp7N7wJFzgW3f2A&s=10",
        "Tinder Plus/Gold": "https://pngate.com/wp-content/uploads/2025/04/tinder-main-logo-icon-gradient-flame-1.png",
        "Steam Wallet Code IDR": "https://e7.pngegg.com/pngimages/308/733/png-clipart-steam-computer-icons-killer-queen-black-valve-corporation-video-game-load-the-animation-logo-video-game.png",
        "Google Play Voucher": "https://www.freepnglogos.com/uploads/google-play-png-logo/media-google-play-png-logo-5.png",
        "PlayStation Network (PSN)": "https://www.vhv.rs/dpng/d/477-4776929_psn-logo-w-title-playstation-network-logo-png.png",
        "Vision+ Voucher": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Univision_2019.svg/250px-Logo_Univision_2019.svg.png",
        "Vidio Voucher": "https://www.vhv.rs/dpng/d/17-176969_music-video-icon-png-transparent-png.png",
        "Token PLN": "https://thumbs.dreamstime.com/b/september-brazil-photo-illustration-perusahaan-listrik-negara-pln-logo-seen-displayed-smartphone-256461831.jpg",
        "Fortnite V Bucks": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0ISVsoMmcea1KBh4aUBUs6qpJW-FFZIz0fCKj--7iQ&s",
        "Twitch Gift Cards": "https://www.freeiconspng.com/uploads/twitch-tv-symbol-transparent-background-6.jpg",
        "Garena Shell Voucher": "https://www.pngfind.com/pngs/m/392-3928798_logo-point-blank-garena-png-logo-garena-free.png",
        "XBOX Gift Cards": "https://1000logos.net/wp-content/uploads/2021/11/logo-Xbox.png",
        "TikTok Live Koin": "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png",
        "Minecraft Minecoins": "https://cdn.freebiesupply.com/logos/thumbs/2x/minecraft-1-logo.png",
        "Razer Gold Voucher": "https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png"
    };

    const createCard = (name) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        const logoUrl = logoMap[name] || 'https://via.placeholder.com/150x150/cccccc/000000?text=No+Logo';
        card.innerHTML = `
            <img src="\( {logoUrl}" alt=" \){name}" loading="lazy" style="max-width:100%; height:auto; max-height:120px; object-fit:contain; border-radius:12px;">
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

    if (containers.popular) gamesData.popular.forEach(name => containers.popular.appendChild(createCard(name)));
    if (containers.all) gamesData.all.forEach(name => containers.all.appendChild(createCard(name)));
    if (containers.emoney) gamesData.emoney.forEach(name => containers.emoney.appendChild(createCard(name)));
    if (containers.pulsa) gamesData.pulsa.forEach(name => containers.pulsa.appendChild(createCard(name)));
    if (containers.vouchers) gamesData.vouchers.forEach(name => containers.vouchers.appendChild(createCard(name)));
});
