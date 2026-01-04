// games.js - RHF STORE DYNAMIC CONTENT
document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');

    // Data Produk Super Lengkap
    const allGames = [
        { name: "Mobile Legends Diamonds", url: "https://img.esports.id/img/article/637920200914081250.png", category: "Games" },
        { name: "Free Fire Diamonds", url: "https://iconlogovector.com/uploads/images/2025/08/lg-6893f81b6ef79-FREE-FIRE.webp", category: "Games" },
        { name: "PUBG Mobile UC", url: "https://images.seeklogo.com/logo-png/35/1/pubg-logo-png_seeklogo-352312.png", category: "Games" },
        { name: "Higgs Domino Island MD", url: "https://liputangampongnews.id/assets/img/berita/20210920_183731.jpg", category: "Games" },
        { name: "Honor of Kings Tokens", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmZxVql5rDkrf9F18ENUODNWfWn96_ZDfGyAD3gUC8g&s=10", category: "Games" },
        { name: "Bigo Live Diamonds", url: "https://images.seeklogo.com/logo-png/47/1/bigo-live-logo-png_seeklogo-477968.png", category: "Hiburan" },
        { name: "Honkai: Star Rail Shard", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4h06YHJT_hOpOlNoiQndwaOYC6ImQCvEkA3QQXnh1g&s", category: "Games" },
        { name: "Valorant Points", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPUSKwrosbcLh6qXmw79qz-Dl1vMOvBmP1ydujtvIsA&s", category: "Games" },
        { name: "Genshin Impact Crystals", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4z_craukzS9fmSpRGHgqF8gxc34428E8fryReuCt6Nw&s", category: "Games" },
        { name: "King's Choice Diamonds", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwurfDWmyuVtOqh1MSuTZk8hHdttjx3tr6micedK_LAVLwOPv7a0T154A&s", category: "Games" },
        { name: "Arena Breakout Bonds", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsQWTUmJWzDmBbIDtIylQtCUu67sSijV5LnGs7z1f1Q&s", category: "Games" },
        { name: "Metal Slug: Awakening", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx8fy5MOauLsJ6EykHXc4aBMEnc1TICvPGJGwvAtuMg&s", category: "Games" },
        { name: "Blood Strike Gold", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9pYFjRHDLvalONft0-XU0zvD-YW0Yz7FSCRqwhRhUwCtavJwUT4hrRU&s", category: "Games" },
        { name: "Ragnarok M Eternal Love", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwJ1R2Md7xwE3-UZ27Xqa121fWSQJUE0rtoghQat8NA&s=10", category: "Games" },
        { name: "Zepeto Zems", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_v_bpWtV0UF40usl8jVpGrCheXlZKRY_fs-HmakMww&s", category: "Hiburan" },
        { name: "Call of Duty Mobile CP", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwzWUCFxQedyh3-5jhoqvfTswF8xMFQmuSdh_WAt85w&s", category: "Games" },
        { name: "Super SUS Golden Stars", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pGNtWaMmaAItQJjmSPhVyDahJiYpszdrInYNrC-Yyg&s", category: "Games" },
        { name: "Pokemon UNITE AeosGems", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjLby7OJSpIcP8upLPAgxYfVZc1bKfKou330TGdXa6g&s", category: "Games" },
        { name: "The Ragnarok SEA", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcdmKKwR3iN_RpnDb9jimkXT2AQ70DJlTk1I_1z1Wdg&s=10", category: "Games" },
        { name: "AFK Journey", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFTHPN8BvO-mUbIoOfrlWfpS5-wdH8wGT-xWhskPHdw&s", category: "Games" },
        { name: "Soul Land: New World", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9ylpkI1T1heleXtDVIFR_c-B6mAL7PgRFK3qIBKLFXeDVeXGqonUOFc&s", category: "Games" },
        { name: "Ragnarok M Classic", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXyEdqq66V1IUmmrzWjCjAEIe6wPPta4MWnuvAM1-MA&s", category: "Games" },
        { name: "Delta Force - Garena", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKe9bxwc1562t3P1x3wOkmEDCH-t2YAz5O3VJ_n6JmN78ghi0x1IPUyc&s", category: "Games" },
        { name: "Tokogame Credits", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyrqhAKVXR8tmBGa4_SB2tIxCimcmWWt8EhDmtBSDNA&s", category: "Layanan" },
        { name: "Mobile Legends Adventure", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre4dsofyUejGWVpqParhe7Or-93YkNPkEu6Vju6Es-PoALqam13CnCVI&s", category: "Games" },
        { name: "League of Legends WC", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfrzzNjopkpkdjOr5BIW8j_JWn2SI-7HIncA5zZ5aDg&s", category: "Games" },
        { name: "Moonlight Blade M", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXnxGKfW8oCHvM_wtzxDavgYoEAEhncxCnLTMZupctgEIDe6f0uFAYEY&s", category: "Games" },
        { name: "Night Crows", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EyqA6RGbOTNZOAepLI5hlo0Qd6MtJkJtmF_f4Fa3Gg&s=10", category: "Games" },
        { name: "Pulsa Indosat", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5Q9oR5hxSeKjs0WCZ60792UxJxvhmoSx1iwkZ9wm8A&s", category: "Pulsa" },
        { name: "Pulsa Tri", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdfV3XNjwTp5uMgx2Bt5QGV9nMKf3h1jlxE6WFyfBzA&s", category: "Pulsa" },
        { name: "Pulsa Telkomsel", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Eg-QzhOShwLZDAXPe4MPwItAX9zATmRWT-38vraG7g&s", category: "Pulsa" },
        { name: "Pulsa XL", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uyCvd76Qo2rtlrK63RSmd0Rewhq4_7uYLS4V0SmV1A&s", category: "Pulsa" },
        { name: "Pulsa Axis", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqFv1_DNi7WtcJOcHEWiupXhwwDvhPsUtbl4IFSlyrOo33z9sI-v5fsA&s", category: "Pulsa" },
        { name: "Pulsa Smartfren", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobQYhok1QXOo1UkArzTY5EQWAywwlkRN9CnPnlYap5A&s", category: "Pulsa" },
        { name: "DANA", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAirayPWuAR7xOP6ewQEDLDA7vIaW2KraNQRRCm93yUA&s", category: "E-Money" },
        { name: "OVO", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxN6Yo9gReuYd54DjGvqhhpeLH6xveBIPCZd_VOZXWg&s", category: "E-Money" },
        { name: "GoPay", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2VNTh_y7qAFD3RctrDzelcsx7_mCP3MPJgHDinlPAw&s", category: "E-Money" },
        { name: "ShopeePay", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa2u4zHXUM413-vtJLTrEKVMymrirO_DwWsFMgUC1CA&s", category: "E-Money" },
        { name: "Candy Crush Saga", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yUVZpUf4dJ1upa4iLsjtJDbP-z-yp7N7wJFzgW3f2A&s=10", category: "Games" },
        { name: "Tinder Plus/Gold", url: "https://pngate.com/wp-content/uploads/2025/04/tinder-main-logo-icon-gradient-flame-1.png", category: "Voucher" },
        { name: "Steam Wallet Code IDR", url: "https://e7.pngegg.com/pngimages/308/733/png-clipart-steam-computer-icons-killer-queen-black-valve-corporation-video-game-load-the-animation-logo-video-game.png", category: "Voucher" },
        { name: "Google Play Voucher", url: "https://www.freepnglogos.com/uploads/google-play-png-logo/media-google-play-png-logo-5.png", category: "Voucher" },
        { name: "PlayStation Network (PSN)", url: "https://www.vhv.rs/dpng/d/477-4776929_psn-logo-w-title-playstation-network-logo-png.png", category: "Voucher" },
        { name: "Vision+ Voucher", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Univision_2019.svg/250px-Logo_Univision_2019.svg.png", category: "Voucher" },
        { name: "Vidio Voucher", url: "https://www.vhv.rs/dpng/d/17-176969_music-video-icon-png-transparent-png.png", category: "Voucher" },
        { name: "Token PLN", url: "https://thumbs.dreamstime.com/b/september-brazil-photo-illustration-perusahaan-listrik-negara-pln-logo-seen-displayed-smartphone-256461831.jpg", category: "Layanan" },
        { name: "Fortnite V Bucks", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0ISVsoMmcea1KBh4aUBUs6qpJW-FFZIz0fCKj--7iQ&s", category: "Games" },
        { name: "Twitch Gift Cards", url: "https://www.freeiconspng.com/uploads/twitch-tv-symbol-transparent-background-6.jpg", category: "Voucher" },
        { name: "Garena Shell Voucher", url: "https://www.pngfind.com/pngs/m/392-3928798_logo-point-blank-garena-png-logo-garena-free.png", category: "Voucher" },
        { name: "XBOX Gift Cards", url: "https://1000logos.net/wp-content/uploads/2021/11/logo-Xbox.png", category: "Voucher" },
        { name: "TikTok Live Koin", url: "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png", category: "Hiburan" },
        { name: "Minecraft Minecoins", url: "https://cdn.freebiesupply.com/logos/thumbs/2x/minecraft-1-logo.png", category: "Games" },
        { name: "Razer Gold Voucher", url: "https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png", category: "Voucher" }
    ];

    // Fungsi menampilkan Game
    function renderGames(data) {
        gamesContainer.innerHTML = ""; 
        data.forEach(game => {
            const card = `
                <div class="game-card">
                    <a href="topup.html?game=${encodeURIComponent(game.name)}">
                        <div class="card-img-wrapper">
                            <img src="${game.url}" alt="${game.name}" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3>${game.name}</h3>
                            <p>${game.category}</p>
                        </div>
                    </a>
                </div>
            `;
            gamesContainer.innerHTML += card;
        });
    }

    // Jalankan pertama kali
    renderGames(allGames);
});
