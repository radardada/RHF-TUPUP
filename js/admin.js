// admin.js - RHF STORE ADMIN LOGIC

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Data Dummy (Bisa diganti dengan data Firebase nanti)
    const transactions = [
        { id: "RHF-9901", game: "Mobile Legends", user: "User123", price: "Rp 50.000", status: "Selesai" },
        { id: "RHF-9902", game: "Free Fire", user: "Player01", price: "Rp 10.000", status: "Pending" },
        { id: "RHF-9903", game: "Honor of Kings", user: "HOK-Lover", price: "Rp 100.000", status: "Selesai" },
        { id: "RHF-9904", game: "PUBG Mobile", user: "WinnerWinner", price: "Rp 25.000", status: "Pending" }
    ];

    renderTable(transactions);
    updateStats(transactions);

    // 2. Fungsi untuk menampilkan data ke tabel HTML
    function renderTable(data) {
        const tableBody = document.querySelector('table tbody');
        if (!tableBody) return;

        tableBody.innerHTML = ""; // Bersihkan tabel

        data.forEach((trx, index) => {
            const statusClass = trx.status.toLowerCase() === 'selesai' ? 'badge-success' : 'badge-pending';
            
            const row = `
                <tr>
                    <td>${trx.id}</td>
                    <td><b>${trx.game}</b></td>
                    <td>${trx.user}</td>
                    <td>${trx.price}</td>
                    <td><span class="badge ${statusClass}">${trx.status}</span></td>
                    <td>
                        <button onclick="deleteTrx(${index})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Hapus</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // 3. Fungsi Update Statistik di Card Atas
    function updateStats(data) {
        const totalTrx = document.getElementById('total-orders');
        const pendingTrx = document.getElementById('pending-orders');
        
        if (totalTrx) totalTrx.innerText = data.length;
        if (pendingTrx) {
            const pendingCount = data.filter(t => t.status === 'Pending').length;
            pendingTrx.innerText = pendingCount;
        }
    }

    // 4. Fungsi Hapus Data (Global agar bisa dipanggil dari HTML)
    window.deleteTrx = (index) => {
        if (confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) {
            transactions.splice(index, 1); // Hapus data dari array
            renderTable(transactions);    // Gambar ulang tabel
            updateStats(transactions);    // Update angka statistik
        }
    };
});

// 5. Fungsi Tambah Game Baru (Untuk Form Admin)
function addNewGame(event) {
    event.preventDefault();
    const name = document.getElementById('game-name').value;
    const category = document.getElementById('game-category').value;

    if (name && category) {
        alert(`Game ${name} berhasil ditambahkan ke kategori ${category}!`);
        document.getElementById('add-game-form').reset();
    } else {
        alert("Mohon isi semua data!");
    }
}
