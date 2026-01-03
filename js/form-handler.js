const { db, ref, push, update, onValue } = window.firebaseDB;

const form = document.getElementById('topupForm');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const playerId = document.getElementById('playerId').value.trim();
        const amount = parseInt(document.getElementById('amount').value);
        const payment = document.getElementById('payment').value;
        const game = document.getElementById('selected-game').textContent;

        if (!playerId) {
            alert('Masukkan Player ID!');
            return;
        }

        try {
            // Tambah transaksi
            const transRef = push(ref(db, 'transactions'));
            await set(transRef, {
                game,
                amount,
                payment,
                playerId,
                status: 'Sukses',
                timestamp: Date.now()
            });

            // Update saldo
            const balanceRef = ref(db, 'balance');
            onValue(balanceRef, async (snapshot) => {
                const data = snapshot.val() || { value: 0 };
                await update(balanceRef, { value: data.value + amount });
            }, { onlyOnce: true });

            document.getElementById('status').innerHTML = `<strong style="color:green;">Top Up Berhasil!</strong> ${game} - ${amount} IDR telah ditambahkan.`;
            form.reset();
        } catch (error) {
            document.getElementById('status').innerHTML = `<strong style="color:red;">Error: ${error.message}</strong>`;
        }
    });
}