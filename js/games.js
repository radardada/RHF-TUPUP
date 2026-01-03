// js/games.js - Manage daftar game, voucher, pulsa, e-money & search seperti Tokogame.com

document.addEventListener('DOMContentLoaded', () => {
    // Tambah search bar di hero
    addSearchBar();

    // Hardcode daftar lengkap mirip Tokogame (tanpa perlu JSON eksternal lagi)
    loadAllItems();
});

/**
 * Tambah search bar besar di hero
 */
function addSearchBar() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const existingSearch = document.getElementById('game-search');
    if (existingSearch) return; // Hindari duplikat

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'game-search';
    searchInput.placeholder = 'Cari game, voucher, pulsa, atau e-money... (contoh: Mobile Legends, Steam, DANA)';
    searchInput.autofocus = true;

    hero.appendChild(searchInput);

    // Event real-time search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterAllItems(query);
    });
}

/**
 * Load semua item hardcode (popular, games, voucher, pulsa, emoney)
 */
function loadAllItems() {
    const popular = [
        "Mobile Legends Diamonds",
        "Free Fire Diamonds",
        "PUBG Mobile UC",
        "Higgs Domino Island MD",
        "Honor of Kings Tokens",
        "Bigo Live Diamonds",
        "Honkai: Star Rail Shard",
        "Valorant Points",
        "Genshin Impact Crystals",
        "King's Choice Diamonds",
        "Arena Breakout Bonds",
        "Metal Slug: Awakening",
        "Blood Strike Gold",
        "Ragnarok M Eternal Love",
        "Zepeto Zems",
        "Call of Duty Mobile CP",
        "Super SUS Golden Stars",
        "Pokemon UNITE AeosGems",
        "The Ragnarok SEA",
        "AFK Journey",
        "Soul Land: New World",
        "Ragnarok M Classic",
        "Delta Force - Garena",
        "Indus Battle Royale",
        "Delta Force - Steam",
        "Tokogame Credits",
        "Mobile Legends Adventure",
        "League of Legends WC",
        "Moonlight Blade M",
        "Night Crows"
    ];

    const vouchers = [
        "Steam Wallet Code IDR",
        "Google Play Voucher",
        "PlayStation Network (PSN)",
        "Roblox Robux",
        "Vision+ Voucher",
        "Vidio Voucher",
        "Token PLN",
        "Tinder Plus/Gold",
        "Candy Crush Saga",
        "Valorant Voucher",
        "Fortnite V Bucks",
        "Twitch Gift Cards",
        "Garena Shell Voucher",
        "Monster Hunter Wilds CD Keys",
        "XBOX Gift Cards",
        "TikTok Live Koin",
        "Minecraft Minecoins",
        "Razer Gold Voucher"
    ];

    const pulsa = [
        "Pulsa Telkomsel",
        "Pulsa XL",
        "Pulsa Indosat",
        "Pulsa Tri",
        "Pulsa Axis",
        "Pulsa Smartfren"
    ];

    const emoney = [
        "DANA",
        "GoPay",
        "OVO",
        "ShopeePay"
    ];

    // Load ke container masing-masing
    popular.forEach(item => createGameItem(item, document.getElementById('popular-games')));
    [...popular, ...vouchers].forEach(item => createGameItem(item, document.getElementById('all-games-list')));
    vouchers.forEach(item => createGameItem(item, document.getElementById('voucher-list')));
    pulsa.forEach(item => createGameItem(item, document.getElementById('pulsa-list')));
    emoney.forEach(item => createGameItem(item, document.getElementById('emoney-list')));
}

/**
 * Buat card item game/voucher
 */
function createGameItem(name, container) {
    if (!container) return;

    const item = document.createElement('div');
    item.className = 'game-item';
    item.textContent = name;
    item.title = `Top Up ${name}`;
    item.onclick = () => showTopupForm(name);
    container.appendChild(item);
}

/**
 * Filter semua item berdasarkan query
 */
function filterAllItems(query) {
    const allItems = document.querySelectorAll('.game-item');
    let hasResult = false;

    allItems.forEach(item => {
        const name = item.textContent.toLowerCase();
        if (name.includes(query)) {
            item.style.display = 'block';
            hasResult = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Tampilkan pesan jika tidak ada hasil
    const status = document.getElementById('status');
    if (query && !hasResult && status) {
        status.textContent = 'Tidak ditemukan hasil untuk "' + query + '"';
        status.style.color = 'red';
    }
}

/**
 * Fungsi showTopupForm (dipanggil dari onclick) - sama seperti di script.js
 */
function showTopupForm(game) {
    document.getElementById('selected-game').textContent = game;
    // Nominal bisa dikustom per game nanti
    const amounts = [5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000];
    const select = document.getElementById('amount');
    select.innerHTML = '';
    amounts.forEach(amt => {
        const opt = document.createElement('option');
        opt.value = amt;
        opt.textContent = `Rp ${new Intl.NumberFormat('id-ID').format(amt)}`;
        select.appendChild(opt);
    });

    document.getElementById('topup-form').style.display = 'block';
    document.getElementById('topup-form').scrollIntoView({ behavior: 'smooth' });
}