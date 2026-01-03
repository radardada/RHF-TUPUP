// js/games.js - Full games dengan logo resmi persis tokogame.com

document.addEventListener('DOMContentLoaded', () => {
    addSearchBar();
    loadAllItems();
});

function addSearchBar() { /* kode search bar sama seperti sebelumnya */ }

function loadAllItems() {
    const popular = [ /* daftar popular persis tokogame dari respons sebelumnya */ ];
    const allGames = [ /* semua game */ ];
    const vouchers = [ /* semua voucher */ ];
    const pulsa = [ /* pulsa */ ];
    const emoney = [ /* emoney */ ];

    // Load semua
    popular.forEach(item => createGameItem(item, document.getElementById('popular-games')));
    allGames.forEach(item => createGameItem(item, document.getElementById('all-games-list')));
    vouchers.forEach(item => createGameItem(item, document.getElementById('voucher-list')));
    pulsa.forEach(item => createGameItem(item, document.getElementById('pulsa-list')));
    emoney.forEach(item => createGameItem(item, document.getElementById('emoney-list')));
}

function createGameItem(name, container) {
    if (!container) return;

    let slug = name.toLowerCase()
        .replace(/[:&\s]/g, '-')
        .replace(/diamonds|uc|points|crystals|md|tokens|gold|cp|shard|bonds|gems|code|gift|card|voucher/g, '')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');

    const item = document.createElement('div');
    item.className = 'game-item';

    const img = document.createElement('img');
    img.src = `images/games/${slug}.png`;
    img.alt = name;
    img.onerror = () => { img.src = 'images/games/placeholder.png'; }; // Buat placeholder kalau icon belum ada

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
