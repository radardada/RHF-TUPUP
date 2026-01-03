// Tambah load voucher, pulsa, emoney
fetch('data/games.json')
    .then(res => res.json())
    .then(data => {
        // Popular
        data.popular.forEach(game => createGameItem(game, document.getElementById('popular-games')));

        // All games (gabung popular + tambahan jika ada)
        [...data.popular, ...data.vouchers].forEach(game => createGameItem(game, document.getElementById('all-games-list')));

        // Voucher
        data.vouchers.forEach(v => createGameItem(v, document.getElementById('voucher-list')));

        // Pulsa & E-Money
        data.pulsa.forEach(p => createGameItem(p, document.getElementById('pulsa-list')));
        data.emoney.forEach(e => createGameItem(e, document.getElementById('emoney-list')));
    });